import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import Shows from './Pages/shows';
import Header from './Components/layout/Header';
import { ShowsState } from './context/ShowContext';
import { AlertState } from './context/Alert';
function App() {

  return (
    <ShowsState >
      <AlertState>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/shows/:id" exact component={Shows} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </ShowsState>
  );
}

export default App;
