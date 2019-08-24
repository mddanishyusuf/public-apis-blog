import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Masonry from 'react-masonry-css';

import Layout from '../components/layout';
import SEO from '../components/seo';

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
    const [tweetsLoading, setTweetsLoading] = useState(true);
    const [loadingMsg, setLoadingMsg] = useState('Loading Feeds!!!');

    useEffect(() => {
        axios.get(`https://twiter-apis-feeds.glitch.me/search?tag=%23api`).then(res => {
            setTwitFeedList(res.data.statuses);
            const searchMeta = res.data.search_metadata.next_results.split('=');
            setMaxId(searchMeta[1].split('&')[0]);
            setTweetsLoading(false);
            setLoadingMsg('Feed Me More');
        });
    }, []);

    const loadMoreTweet = e => {
        e.preventDefault();
        setTweetsLoading(true);
        setLoadingMsg('Loading Feeds!!!');
        axios.get(`https://twiter-apis-feeds.glitch.me/search?tag=%23api&next_id=${maxId}`).then(res => {
            setTwitFeedList([...twitFeedList, ...res.data.statuses]);
            const searchMeta = res.data.search_metadata.next_results.split('=');
            setMaxId(searchMeta[1].split('&')[0]);
            setTweetsLoading(false);
            setLoadingMsg('Feed Me More');
        });
    };

    return (
        <Layout>
            <SEO
                title="Twitter Feeds about #api on real time"
                description="Real time streaming tweet direct from twitter about the #api"
            />
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
                <div className="action-btn primary-btn" onClick={!tweetsLoading ? loadMoreTweet : undefined}>
                    {loadingMsg}
                </div>
            </div>
        </Layout>
    );
}

export default TwitterFeeds;
