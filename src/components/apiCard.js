import React from 'react';
import { ExternalLink, Key, Lock } from 'react-feather';
import Img from 'react-image';

import { getHostname } from '../config/Functions';
import './style/api-card.scss';

function APICard({ data }) {
    return (
        <div className="api-card">
            <div className="api-info">
                <div className="title">
                    <h3>{data.title}</h3>
                </div>
                <div className="description">{data.description}</div>
                <ul className="api-meta">
                    <li>
                        <Key size={15} /> auth: {data.auth}
                    </li>
                    <li>
                        <Lock size={15} /> http: Yes
                    </li>
                    <li>
                        <ExternalLink size={15} /> visit:{' '}
                        <a href={data.link} target="_blank" rel="noopener noreferrer">
                            link
                        </a>
                    </li>
                </ul>
            </div>
            <div className="link-logo">
                <Img
                    className="card-image"
                    alt={data.title}
                    src={`https://logo.clearbit.com/${getHostname(data.link)}`}
                />
            </div>
        </div>
    );
}

export default APICard;
