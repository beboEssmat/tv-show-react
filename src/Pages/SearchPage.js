import React from 'react'
import Search from '../Components/search/Search'
import ShowsList from '../Components/shows/ShowsList'
const SearchPage = () => {
    return (
        <>
            <Search size="small" />
            <ShowsList />
        </>
    )
}

export default SearchPage
