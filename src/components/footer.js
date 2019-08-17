import React from 'react';
import { Link } from 'gatsby';
import { Mail } from 'react-feather';

import NewsletterForm from './newsletter';
import './style/footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="wrap">
                    <p>
                        © Copyright 2008 - 2019 <a href="https://public-apis.xyz">Public APIs</a>.{' '}
                        <a href="https://www.iubenda.com/privacy-policy/85953554">Privacy Policy</a>.
                    </p>
                    <p className="footer-follow">
                        Follow to get updates about public APIs{' '}
                        <a href="http://twitter.com/public_apis" target="_blank">
                            Twitter
                        </a>
                        ,{' '}
                        <a href="https://t.me/joinchat/L6cjqhTz2bkQsxTRWKt_-A" target="_blank">
                            Telegram
                        </a>
                        , and{' '}
                        <a href="https://public-apis.xyz" target="_blank">
                            Website
                        </a>
                        .
                    </p>
                </div>
                <div className="footer-navigation">
                    <div className="newsletter">
                        Subscribe
                        <NewsletterForm />
                    </div>
                    <div className="navigation-menu">
                        <ul>
                            <li>
                                <Link to="/resources">Resources</Link>
                            </li>
                            <li>
                                <Link to="/articles">Articles</Link>
                            </li>
                            <li>
                                <Link to="/twitter-feeds">Twitter Feeds</Link>
                            </li>
                            <li>
                                <a href="/sitemap.xml">Sitemap</a>
                            </li>
                        </ul>
                        <br />
                        <br />
                        <ul>
                            <li>
                                <a href="mailto:hello@mohddanish.me">
                                    <Mail size={13} /> hello[at]mohddanish.me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
