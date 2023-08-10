import React from 'react';
import './Places.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="box fade-in-2 fade-in-2-mobile">
            <Link to={`/places/${props.id}`}>
                <div className="place-img">
                    <img src={props.img} alt="Cap Carbon" />
                </div>
                <div className="place-text">
                    <h3>{props.title}</h3>
                </div>
                <i className='bx bx-right-arrow-alt place-icon'></i>
            </Link>
        </div>
    )
}

export default Card