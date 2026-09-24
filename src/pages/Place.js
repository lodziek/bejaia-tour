import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Page from '../components/Page';
import PlaceCard from '../components/PlaceCard';
import Icon from '../components/Icon';
import NotFound from './NotFound';
import { CATEGORIES, findPlace, places } from '../data/places';
import './Place.css';

const Place = () => {
    const { slug } = useParams();

    // The first version used array indexes (/places/0); keep those links working.
    if (/^\d+$/.test(slug) && places[Number(slug)]) {
        return <Navigate to={`/places/${places[Number(slug)].slug}`} replace />;
    }

    const place = findPlace(slug);
    if (!place) return <NotFound />;

    const index = places.indexOf(place);
    const prev = places[(index - 1 + places.length) % places.length];
    const next = places[(index + 1) % places.length];
    const related = places.filter((p) => p.category === place.category && p !== place).slice(0, 3);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.title}, Béjaïa, Algeria`)}`;

    return (
        <Page title={place.title}>
            <header className="place-hero">
                <img src={place.image} alt="" className="place-hero-bg" />
                <div className="place-hero-shade" />
                <div className="container place-hero-content">
                    <Link to="/places" className="back-link">
                        <Icon name="arrowLeft" size={18} /> All places
                    </Link>
                    <span className="tag">{CATEGORIES.find((c) => c.id === place.category)?.label}</span>
                    <h1>{place.title}</h1>
                    <p>{place.excerpt}</p>
                </div>
            </header>

            <section className="container section place-body">
                <article className="place-text">
                    {place.description.map((para) => (
                        <p key={para.slice(0, 24)}>{para}</p>
                    ))}
                </article>

                <aside className="place-aside">
                    <figure>
                        <img src={place.image} alt={place.title} />
                    </figure>
                    <h2>At a glance</h2>
                    <dl>
                        {place.facts.map(([k, v]) => (
                            <div key={k}>
                                <dt>{k}</dt>
                                <dd>{v}</dd>
                            </div>
                        ))}
                    </dl>
                    <a href={mapUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                        <Icon name="pin" /> Open in Google Maps
                    </a>
                </aside>
            </section>

            <nav className="container place-pager" aria-label="Other places">
                <Link to={`/places/${prev.slug}`}>
                    <small><Icon name="arrowLeft" size={16} /> Previous</small>
                    <span>{prev.title}</span>
                </Link>
                <Link to={`/places/${next.slug}`} className="next">
                    <small>Next <Icon name="arrowRight" size={16} /></small>
                    <span>{next.title}</span>
                </Link>
            </nav>

            {related.length > 0 && (
                <section className="container section related">
                    <h2>You may also like</h2>
                    <div className="card-grid">
                        {related.map((p) => (
                            <PlaceCard key={p.slug} place={p} />
                        ))}
                    </div>
                </section>
            )}
        </Page>
    );
};

export default Place;
