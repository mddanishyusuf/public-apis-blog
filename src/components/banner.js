import React from 'react';
import { Link } from 'gatsby';

import './style/header.scss';

const Banner = () => (
    <div className="banner-container">
        <div className="banner">
            <div className="tag-line h2-bold">
                <h2>Find. Learn. Build.</h2>
            </div>
            <div className="under-tag-line">Fuel up your apps and business with powerful 1000+ public apis.</div>
            <div className="action-buttons">
                <a href="https://public-apis.xyz">
                    <div className="action-btn primary-btn">Find API</div>
                </a>
                <Link to="/resources">
                    <div className="action-btn outline-btn">Learn API</div>
                </Link>
            </div>
        </div>
    </div>
);

export default Banner;
