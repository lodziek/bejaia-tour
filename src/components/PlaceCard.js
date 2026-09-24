import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { CATEGORIES } from '../data/places';

const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label;

const PlaceCard = ({ place }) => (
    <Link to={`/places/${place.slug}`} className="place-card">
        <div className="place-card-media">
            <img src={place.image} alt={place.title} loading="lazy" />
            <span className="tag">{categoryLabel(place.category)}</span>
        </div>
        <div className="place-card-body">
            <h3>{place.title}</h3>
            <p>{place.excerpt}</p>
            <span className="place-card-link">
                Discover <Icon name="arrowRight" />
            </span>
        </div>
    </Link>
);

export default PlaceCard;
