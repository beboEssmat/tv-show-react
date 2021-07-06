import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import onImg from '../../assets/images/no-img.png';
import { ShowsContext } from '../../context/ShowContext';
const ShowsItem = ({ show }) => {

    return (
        <Link to={`/shows/${show.id}`} className="show-item">
            <div className="show-item_img">
                <img src={show.image && show.image.medium ? show.image.medium : onImg}
                    alt={show.name ? show.name : "Show Image"} />
                <div className="show-item_img-hover">
                    <div className="rating">
                        <span>⭐</span>{show.rating.average ? show.rating.average : ".."}
                    </div>
                    <div className="title">{show.name}</div>
                </div>
            </div>
        </Link>
    )
}

export default ShowsItem
