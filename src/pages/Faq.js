import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Icon from '../components/Icon';
import { faq } from '../data/faq';
import './Faq.css';

const Faq = () => (
    <Page title="FAQ" className="page">
        <section className="container section faq">
            <div className="section-head">
                <span className="eyebrow">FAQ</span>
                <h1>Good to know before you go</h1>
                <p>
                    Can't find your answer? <Link to="/contact">Write to us</Link>.
                </p>
            </div>

            <div className="faq-list">
                {faq.map((item, i) => (
                    <details key={item.q} open={i === 0}>
                        <summary>
                            {item.q}
                            <Icon name="plus" className="faq-icon" />
                        </summary>
                        <p>{item.a}</p>
                    </details>
                ))}
            </div>
        </section>
    </Page>
);

export default Faq;
