import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Page from '../components/Page';
import PlaceCard from '../components/PlaceCard';
import Icon from '../components/Icon';
import { places } from '../data/places';
import heroCoast from '../assets/img/hero-coast.webp';
import heroSea from '../assets/img/hero-sea.webp';
import heroCity from '../assets/img/hero-city.webp';
import stairs from '../assets/img/stairs.webp';
import arch from '../assets/img/arch.webp';
import './Home.css';

const SLIDES = [
    { image: heroCoast, caption: 'The coast west of the city' },
    { image: heroSea, caption: 'The gulf and the Babor mountains' },
    { image: heroCity, caption: 'Béjaïa seen from the heights' },
];

const STATS = [
    { value: '220 m', label: 'Cap Carbon lighthouse, one of the highest in the Mediterranean' },
    { value: '660 m', label: 'Yemma Gouraya, the peak that watches over the city' },
    { value: '11th c.', label: 'Béjaïa becomes the Hammadid capital' },
];

const FEATURED = ['cap-carbon', 'yemma-gouraya', 'aokas-grotto'];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const reduceMotion = useReducedMotion();

    const go = useCallback((step) => setIndex((i) => (i + step + SLIDES.length) % SLIDES.length), []);

    useEffect(() => {
        if (paused || reduceMotion) return undefined;
        const id = setInterval(() => go(1), 6500);
        return () => clearInterval(id);
    }, [paused, reduceMotion, go]);

    return (
        <section
            className="hero"
            aria-roledescription="carousel"
            aria-label="Views of Béjaïa"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <AnimatePresence initial={false}>
                <motion.img
                    key={index}
                    src={SLIDES[index].image}
                    alt=""
                    className="hero-bg"
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
                />
            </AnimatePresence>
            <div className="hero-shade" />

            <div className="container hero-content">
                <span className="eyebrow">Kabylia · Algeria</span>
                <h1>
                    Béjaïa, where the mountains <em>dive into the sea</em>
                </h1>
                <p>
                    Wild capes, turquoise coves, a thousand-year-old medina and the forests of Gouraya — discover the pearl of
                    the Algerian coast.
                </p>
                <div className="hero-actions">
                    <Link to="/places" className="btn btn-primary">
                        Explore the places <Icon name="arrowRight" />
                    </Link>
                    <Link to="/videos" className="btn btn-ghost">
                        <Icon name="play" /> Watch the film
                    </Link>
                </div>
            </div>

            <div className="container hero-controls">
                <p className="hero-caption" aria-live="polite">
                    <Icon name="pin" size={16} /> {SLIDES[index].caption}
                </p>
                <div className="hero-dots">
                    <button type="button" className="hero-arrow" onClick={() => go(-1)} aria-label="Previous view">
                        <Icon name="chevronLeft" />
                    </button>
                    {SLIDES.map((s, i) => (
                        <button
                            key={s.caption}
                            type="button"
                            className={`hero-dot${i === index ? ' is-active' : ''}`}
                            onClick={() => setIndex(i)}
                            aria-label={`View ${i + 1}: ${s.caption}`}
                            aria-current={i === index}
                        />
                    ))}
                    <button type="button" className="hero-arrow" onClick={() => go(1)} aria-label="Next view">
                        <Icon name="chevronRight" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const Home = () => (
    <Page>
        <Hero />

        <section className="section container intro">
            <div className="section-head">
                <span className="eyebrow">Why Béjaïa</span>
                <h2>Sea, summits and centuries of history in a single gulf</h2>
                <p>
                    Once called Saldae, Béjaïa was a capital of the Hammadids and a crossroads of Mediterranean knowledge.
                    Today it is the gateway to some of the most beautiful landscapes of Algeria.
                </p>
            </div>
            <ul className="stats">
                {STATS.map((s) => (
                    <li key={s.value}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                    </li>
                ))}
            </ul>
        </section>

        <section className="section featured">
            <div className="container">
                <div className="featured-head">
                    <div className="section-head">
                        <span className="eyebrow">Must-see</span>
                        <h2>Start with these</h2>
                    </div>
                    <Link to="/places" className="btn btn-ghost">
                        All {places.length} places <Icon name="arrowRight" />
                    </Link>
                </div>
                <div className="card-grid">
                    {FEATURED.map((slug) => (
                        <PlaceCard key={slug} place={places.find((p) => p.slug === slug)} />
                    ))}
                </div>
            </div>
        </section>

        <section className="section container story">
            <div className="story-images">
                <img src={stairs} alt="Stone stairs climbing a ridge above the sea" loading="lazy" />
                <img src={arch} alt="A rock arch on the coast of Béjaïa" loading="lazy" />
            </div>
            <div>
                <span className="eyebrow">A city of scholars</span>
                <h2>The city that gave Europe its numbers</h2>
                <p>
                    In the Middle Ages, the young Leonardo Fibonacci lived in Béjaïa, where his father worked for the merchants
                    of Pisa. There he learned the Arabic numerals that he would later popularise in Europe.
                </p>
                <p>
                    Ibn Khaldun and Raymond Lull also stayed in the city — and its beeswax candles were so famous that the
                    French still call a candle « une bougie ».
                </p>
                <Link to="/places/old-town" className="btn btn-primary">
                    Visit the old town <Icon name="arrowRight" />
                </Link>
            </div>
        </section>

        <section className="section cta">
            <div className="container cta-inner">
                <div>
                    <h2>Ready to plan your trip?</h2>
                    <p>Tell us your dates and what you love — we'll answer with ideas for your stay.</p>
                </div>
                <Link to="/contact" className="btn btn-light">
                    Contact us <Icon name="mail" />
                </Link>
            </div>
        </section>
    </Page>
);

export default Home;
