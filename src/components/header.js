import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import { getIcon } from '../config/Functions';
import logo from '../images/public-apis-logo.png';

import './style/banner.scss';

const Header = ({ siteMetaData, isHomepage, username }) => (
    <header>
        <Navbar className="navbar" collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand>
                <Link to="/">
                    <h2>
                        <span className="talks-about">
                            <img src={logo} alt="public apis logo" width="20" />
                            Talks About{' '}
                        </span>
                        <span className="apis">APIs</span>
                    </h2>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    {siteMetaData.social.map((item, key) => (
                        <Link to={`/${item.tag}`} key={key}>
                            {getIcon(item.name, 14)} <span>{item.name}</span>
                        </Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
