import React from 'react';
import { getHostname } from '../config/Functions';

import './style/link-card.scss';

function LinkCard({ data, showReadMore, fontSize, showTags }) {
    return (
        <div className="link-card">
            <div className="card-inner">
                <h2 style={{ fontSize: `${fontSize}rem` }}>
                    <a href={data.url}>{data.title}</a>
                </h2>
                <ul className="link-meta">
                    {showTags && (
                        <li className="tag-list">
                            {data.tags.map((tag, index) => (
                                <span key={index}>
                                    {tag} {index < data.tags.length - 1 && `,`}
                                </span>
                            ))}
                        </li>
                    )}
                    {showReadMore && (
                        <li className="read-more">
                            <a href={data.url}>Read @ {getHostname(data.domain_name)}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default LinkCard;
