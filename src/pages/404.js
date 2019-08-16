import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div style={{ textAlign: 'center' }}>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <div className="go-to-home">
                <Link to="/">
                    <span>Checkout Latest Resources about APIs</span>
                </Link>
            </div>
            <img src="https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif" alt="404 gif" />
        </div>
    </Layout>
);

export default NotFoundPage;
