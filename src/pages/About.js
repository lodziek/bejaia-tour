import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Icon from '../components/Icon';
import kayak from '../assets/img/kayak.webp';
import coast from '../assets/img/coast-cliffs.webp';
import './About.css';

const VALUES = [
    { title: 'Local knowledge', text: 'We were born here. We know the coves you reach by boat, the best time to climb Gouraya and where to eat fresh fish.' },
    { title: 'Tailor-made', text: 'A family weekend at the beach or ten days of hiking: every trip is built around your dates, budget and pace.' },
    { title: 'Respect for the land', text: 'Small groups, local guides and a simple rule on the trails — leave nothing behind but footprints.' },
];

const About = () => (
    <Page title="About us" className="page">
        <section className="container section about">
            <div className="about-text">
                <span className="eyebrow">About us</span>
                <h1>The trip organiser that makes your journey unforgettable</h1>
                <p>
                    Béjaïa Tour was born from a simple idea: the gulf of Béjaïa deserves to be known far beyond Algeria. We
                    help travellers discover its capes, its beaches and its history, with the people who live there.
                </p>
                <Link to="/contact" className="btn btn-primary">
                    Plan a trip with us <Icon name="arrowRight" />
                </Link>
            </div>
            <div className="about-images">
                <img src={coast} alt="Cliffs and turquoise water on the coast of Béjaïa" />
                <img src={kayak} alt="Two people in a kayak on clear water" loading="lazy" />
            </div>
        </section>

        <section className="section values">
            <div className="container">
                <div className="section-head">
                    <span className="eyebrow">What we care about</span>
                    <h2>Three promises</h2>
                </div>
                <ol className="values-list">
                    {VALUES.map((v, i) => (
                        <li key={v.title}>
                            <span className="values-num">0{i + 1}</span>
                            <h3>{v.title}</h3>
                            <p>{v.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    </Page>
);

export default About;
