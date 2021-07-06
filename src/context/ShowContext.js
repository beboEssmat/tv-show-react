import axios from 'axios';
import React, { useReducer } from 'react';

const showReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: true };
        case "SEARCH_SHOWS":
            return { ...state, shows: action.payload, loading: false };
        case "Active_SHOWS":
            return { ...state, activeShows: action.payload ? action.payload : {}, loading: false }
        default: return null
    }
}

const ShowsContext = React.createContext({
    // title: "",
    // changeTitle: () => { },
})


const ShowsState = (props) => {
    const initailState = {
        shows: [],
        activeShows: {},
        loading: false
    }
    const [state, dispatch] = useReducer(showReducer, initailState)

    const searchShows = async (searchTerm) => {
        dispatch({ type: "SET_LOADING" });
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        // console.log(data)
        dispatch({ type: "SEARCH_SHOWS", payload: data })
    }

    const getShowActive = async (id) => {
        dispatch({ type: "SET_LOADING" })
        const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log(data)
        dispatch({ type: "Active_SHOWS", payload: data })
    }



    return (
        <ShowsContext.Provider value={{
            shows: state.shows,
            loading: state.loading,
            activeShows: state.activeShows,
            searchShows,
            getShowActive
        }}>
            {props.children}
        </ShowsContext.Provider>
    )

}



export { ShowsContext, ShowsState }