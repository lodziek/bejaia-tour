import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Icon from '../components/Icon';

const NotFound = () => (
    <Page title="Page not found" className="page">
        <section className="container section section-head center">
            <span className="eyebrow">Error 404</span>
            <h1>Lost at sea</h1>
            <p>This page doesn't exist — but the coast of Béjaïa does.</p>
            <p>
                <Link to="/places" className="btn btn-primary">
                    See the places <Icon name="arrowRight" />
                </Link>
            </p>
        </section>
    </Page>
);

export default NotFound;
