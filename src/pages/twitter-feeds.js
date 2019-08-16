import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Masonry from 'react-masonry-css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkCard from '../components/linkCard';
import Pagination from '../components/pagination';

import '../components/style/twitter-feed.scss';

const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 2,
    500: 1,
};

function TwitterFeeds() {
    const [twitFeedList, setTwitFeedList] = useState([]);
    const [maxId, setMaxId] = useState('');

    useEffect(() => {
        axios.get(`https://twiter-apis-feeds.glitch.me/search?tag=%23api`).then(res => {
            setTwitFeedList(res.data.statuses);
            const searchMeta = res.data.search_metadata.next_results.split('=');
            setMaxId(searchMeta[1].split('&')[0]);
        });
    }, []);

    const loadMoreTweet = e => {
        e.preventDefault();
        axios.get(`https://twiter-apis-feeds.glitch.me/search?tag=%23api&next_id=${maxId}`).then(res => {
            setTwitFeedList([...twitFeedList, ...res.data.statuses]);
            const searchMeta = res.data.search_metadata.next_results.split('=');
            setMaxId(searchMeta[1].split('&')[0]);
        });
    };

    return (
        <Layout>
            <SEO title="Good Resources to learn API" />
            <div className="page-heading">
                <h2>Twitter Feeds</h2>
                <div className="tag-line">
                    Real time tweets by expert developer, Resources and their thoughts about the apis
                </div>
            </div>
            <div className="twitter-feeds">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {twitFeedList.map((list, index) => (
                        <div className="feed-list" key={index}>
                            <TwitterTweetEmbed className="twitter-card" tweetId={list.id_str} />
                        </div>
                    ))}
                </Masonry>
            </div>
            <div className="load-more-tweets">
                <div className="action-btn primary-btn" onClick={loadMoreTweet}>
                    Feed Me More
                </div>
            </div>
        </Layout>
    );
}

export default TwitterFeeds;
