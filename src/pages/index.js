import React from 'react';
import { graphql, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import { getIcon } from '../config/Functions';
import SEO from '../components/seo';
import PostCard from '../components/blogCard';
import Pagination from '../components/pagination';
import Banner from '../components/banner';
import LinkCard from '../components/linkCard';
import TwitterFeeds from '../components/twitterFeeds';

import '../templates/style/posts-style.scss';

function HomePage({ data, pageContext }) {
    const postsList = data.blogPosts.nodes;
    const resourceList = data.resourcesPosts.nodes;
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <Banner />
            <SEO title="Public APIs Blog" />
            <div className="section-head">
                <div className="heading-content">
                    <h2 style={{ fontSize: 24, fontWeight: 600, padding: '0px', margin: 0 }}>
                        <Link to="/articles" style={{ color: '#203461' }}>
                            Tutorials & Collection
                        </Link>
                    </h2>
                    <div className="">Learn about how to build APIs and APIs collections</div>
                </div>
                <div className="see-all">
                    <Link to="/articles">See all →</Link>
                </div>
            </div>
            <Row>
                <Col md={12}>
                    <Row>
                        {postsList.map((item, index) => (
                            <Col md={3} key={index}>
                                <PostCard data={item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={12}>
                    <div className="section-head">
                        <div className="heading-content">
                            <h2 style={{ fontSize: 24, fontWeight: 600, padding: '0px', margin: 0 }}>
                                <Link to="/twitter-feeds" style={{ color: '#203461' }}>
                                    Twitter Feeds
                                </Link>
                            </h2>
                            <div className="">Real time latest twitter feeds about #API</div>
                        </div>
                        <Link to="/twitter-feeds">See all →</Link>
                    </div>
                    <TwitterFeeds />
                    <div className="section-head">
                        <div className="heading-content">
                            <h2 style={{ fontSize: 24, fontWeight: 600, padding: '0px', margin: 0 }}>
                                <Link to="/resources" style={{ color: '#203461' }}>
                                    Awesome Links
                                </Link>
                            </h2>
                            <div className="">Curated list of articles, tutorials about APIs</div>
                        </div>
                        <div className="see-all">
                            <Link to="/resources">See all →</Link>
                        </div>
                    </div>
                    <Row>
                        {resourceList.map((item, index) => (
                            <Col md={3} key={index}>
                                <LinkCard data={item} key={index} showReadMore fontSize={1} showTags={false} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Layout>
    );
}

export default HomePage;

export const pageQuery = graphql`
    query HomeQuery($skip: Int) {
        blogPosts: allBlogPosts(
            skip: $skip
            limit: 8
            filter: { slug: { ne: null } }
            sort: { fields: published_at, order: DESC }
        ) {
            nodes {
                blog
                color
                date
                slug
                title
                published_at
                description
            }
        }
        resourcesPosts: allResourcesPosts(limit: 8, sort: { fields: added_date, order: DESC }) {
            nodes {
                id
                added_date
                domain_name
                slug
                summary
                tags
                title
                url
            }
        }
    }
`;
