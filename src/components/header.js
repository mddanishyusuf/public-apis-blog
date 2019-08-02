import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { getIcon } from '../config/Functions';
import logo from '../images/public-apis-logo.png';

import './style/banner.scss';

const Header = ({ siteMetaData, isHomepage, username }) => (
    <>
        <header>
            <div className="navbar">
                <Link to="/">
                    <h2>
                        <span className="talks-about">
                            <img src={logo} alt="public apis logo" width="20" />
                            Talks About{' '}
                        </span>
                        <span className="apis">APIs</span>
                    </h2>
                </Link>
                <div className="social">
                    <ul>
                        {siteMetaData.social.map((item, key) => (
                            <li key={key}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    {getIcon(item.name)} <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    </>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
