import React, { useContext } from 'react'
import ShowsItem from './ShowsItem'
import { ShowsContext } from '../../context/ShowContext'
const ShowsList = () => {
    const { loading, shows } = useContext(ShowsContext)
    return (
        <section className="shows">
            <div className="container">
                <div className="row py-2 justify-between">
                    {loading && (
                        <div className="col-full">
                            <div className="not-found">Loading.. </div>
                        </div>
                    )}

                    {shows.length === 0 && !loading ? (
                        <div className="col-full">
                            <div className="not-found">Show Not Found </div>
                        </div>
                    ) :
                        <>
                            {shows.map((show, index) => (
                                <div className="col-1-5" key={index}>
                                    <ShowsItem show={show.show} />
                                </div>
                            ))}
                        </>
                    }

                </div>
            </div>

        </section>
    )
}

export default ShowsList
