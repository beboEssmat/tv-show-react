import React, { useState, useContext, useEffect } from 'react'
import onImg from '../../assets/images/no-img.png';
import { ShowsContext } from '../../context/ShowContext';
import { withRouter } from 'react-router-dom';
const Show = (props) => {
    const { getShowActive, activeShows, loading } = useContext(ShowsContext)
    const [showImg, setShowImg] = useState(onImg)
    useEffect(() => {
        if (props.match.params.id) {
            getShowActive(props.match.params.id)
        }
    }, [props.match.params.id])

    useEffect(() => {
        if (activeShows.image && activeShows.image.original) {
            setShowImg(activeShows.image.original)
        } else if (activeShows.image && activeShows.image.medium) {
            setShowImg(activeShows.image.medium)
        } else {
            setShowImg(onImg)
        }
    }, [activeShows])
    return (
        <section className="show" style={{ backgroundImage: `url(${showImg})` }}>
            <div className="container">
                {loading && (
                    <div className="row">
                        <div className="col-full">
                            <div className="not-found">Loading..</div>
                        </div>
                    </div>
                )}

                {!loading && !activeShows && (
                    <div className="row">
                        <div className="col-full">
                            <div className="not-found">Show Not Found</div>
                        </div>
                    </div>
                )}

                {!loading && activeShows && (
                    <div className="row">
                        <div className="col-1-4">
                            <div className="show-img">
                                <img src={showImg} alt="show title" />
                            </div>
                        </div>
                        <div className="col-3-4">
                            <div className="show-info">
                                <h1 className="mb-2">{activeShows.name ? activeShows.name : ".."}</h1>

                                <div className="show-info_type mb-2">
                                    {activeShows.genres && (
                                        activeShows.genres.map(el => (
                                            <span className="badge" key={el}>{el}</span>
                                        ))
                                    )}
                                </div>
                                {activeShows.status && (
                                    <div className="show-info_status mb-1">
                                        <strong>Status:</strong> {activeShows.status}
                                    </div>
                                )}

                                {activeShows.rating && activeShows.rating.average && (
                                    <div className="show-info_ratung mb-1">
                                        <strong>Rating:</strong>  {activeShows.rating.average}
                                    </div>
                                )}
                                {activeShows.officialSite && (
                                    <div className="show-info_site mb-1">
                                        <a href={activeShows.officialSite} target="_blank" rel="noreferrer">
                                            <strong>Offical Site</strong>
                                        </a>
                                    </div>
                                )}
                                {activeShows.summary && (
                                    < div className="show-info_about flex">
                                        <strong>Story :</strong>
                                        <span dangerouslySetInnerHTML={{ __html: activeShows.summary }}></span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section >
    )
}

export default withRouter(Show)
