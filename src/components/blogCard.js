import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import { ArrowRight } from 'react-feather';

import './style/blog-card.scss';

function PostCard({ data }) {
    return (
        <div className="post-card">
            <div className="card-head">
                <div className="blob-image">
                    <svg width="60" height="60" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(300,300)">
                            <path
                                d="M137.5,-104.3C183.8,-51.6,230.8,5.9,221.7,52.5C212.6,99,147.3,134.7,90.1,146.8C32.8,158.9,-16.3,147.5,-77.1,129.8C-137.9,112.2,-210.3,88.4,-236.2,36.4C-262,-15.6,-241.2,-95.7,-194.1,-148.6C-147,-201.5,-73.5,-227.3,-13.9,-216.2C45.6,-205,91.2,-157.1,137.5,-104.3Z"
                                fill={data.color}
                            />
                        </g>
                    </svg>
                </div>
                <div className="published-date">{moment(data.date).format('DD MMM')}</div>
            </div>
            <div className="card-content">
                <div className="title">
                    <Link to={`/${data.slug}`}>
                        <h2>{data.title}</h2>
                    </Link>
                </div>
                <div className="description">
                    {data.description.length > 150 ? `${data.description.substr(0, 150)}...` : data.description}
                </div>
                <Link to={`/${data.slug}`} className="read-more-btn">
                    <span>
                        <span>Read More</span> <ArrowRight size={12} />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default PostCard;
