import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Masonry from 'react-masonry-css';

import './style/twitter-feed.scss';

const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 2,
    500: 1,
};

function TwitterFeeds() {
    const [twitFeedList, setTwitFeedList] = useState([]);

    useEffect(() => {
        axios.get(`https://twiter-apis-feeds.glitch.me/search?tag=%23api&limit=8`).then(res => {
            setTwitFeedList(res.data.statuses);
        });
    }, []);
    return (
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
    );
}

export default TwitterFeeds;
