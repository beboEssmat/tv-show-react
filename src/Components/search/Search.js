import React, { useState, useContext, useEffect } from 'react'
import homeBg from '../../assets/images/home-bg.jpg';
import { ShowsContext } from '../../context/ShowContext';
import { AlertContext } from '../../context/Alert';
import { withRouter } from 'react-router-dom';
import Alert from '../Alert'
const Search = (props) => {
    const styleClass =
        props.size === "large"
            ? "col-2-4 search-content mx-auto mh-100"
            : "col-2-4 search-content mx-auto pt-6 pb-2";
    const [searchTerm, setSearchTerm] = useState("");

    const { loading, searchShows } = useContext(ShowsContext);
    const { alert, setAlert } = useContext(AlertContext);

    useEffect(() => {
        if (props.location.search && props.location.search.includes("key")) {
            let key = props.location.search.split("key=")[1];
            if (key && key.includes("&")) {
                key = key.split("&")[0]
            }
            if (key) {
                key = decodeURIComponent(key)
                setSearchTerm(key);
                searchShows(key)
            }
        }
    }, [])

    const handleSearchForm = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            props.history.replace(`/search?key=${searchTerm}`)
            searchShows(searchTerm)
        } else {
            setAlert("danger", "Input Search Is Empty")
        }

    }
    return (
        <section className="search" style={{ background: `url(${homeBg})` }}>
            <div className="container">
                <div className="row">
                    <div className={styleClass}>
                        {
                            props.size === "large" ?
                                <>
                                    <h1>Find Your Next Show</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                </> : null}
                        <form className="search-form" onSubmit={handleSearchForm}>
                            <input type="search" placeholder="Search For TV Show" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? "Loading.." : "Search"}
                            </button>
                        </form>
                        {alert && (
                            <Alert type={alert.type} message={alert.message} />
                        )}

                    </div>

                </div>
            </div>
        </section>
    )
}

export default withRouter(Search)
