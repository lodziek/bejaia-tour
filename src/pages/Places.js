import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Page from '../components/Page';
import PlaceCard from '../components/PlaceCard';
import { CATEGORIES, places } from '../data/places';
import './Places.css';

const Places = () => {
    // The filter lives in the URL so a filtered list can be shared or bookmarked.
    const [params, setParams] = useSearchParams();
    const active = CATEGORIES.some((c) => c.id === params.get('c')) ? params.get('c') : 'all';
    const list = active === 'all' ? places : places.filter((p) => p.category === active);

    const select = (id) => setParams(id === 'all' ? {} : { c: id }, { replace: true });

    return (
        <Page title="Places" className="page">
            <section className="container section places-page">
                <div className="section-head">
                    <span className="eyebrow">Places to visit</span>
                    <h1>Find the most beautiful places of Béjaïa</h1>
                    <p>Capes and coves, hiking trails, caves and a medina a thousand years old — pick what you love.</p>
                </div>

                <div className="filters" role="group" aria-label="Filter by category">
                    {CATEGORIES.map((c) => (
                        <button
                            key={c.id}
                            type="button"
                            className={`chip${active === c.id ? ' is-active' : ''}`}
                            aria-pressed={active === c.id}
                            onClick={() => select(c.id)}
                        >
                            {c.label}
                            <span className="chip-count">
                                {c.id === 'all' ? places.length : places.filter((p) => p.category === c.id).length}
                            </span>
                        </button>
                    ))}
                </div>

                <div className="card-grid">
                    {list.map((p) => (
                        <PlaceCard key={p.slug} place={p} />
                    ))}
                </div>
            </section>
        </Page>
    );
};

export default Places;
