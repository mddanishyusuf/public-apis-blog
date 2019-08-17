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

import './style/posts-style.scss';

function BlogPage({ data, pageContext }) {
    const postsList = data.blogPosts.nodes;
    const resourceList = data.resourcesPosts.nodes;
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <SEO title="Public APIs Blog" />
            <div className="section-head">
                <div className="heading-content">
                    <h2 style={{ fontSize: 24, fontWeight: 600, padding: '0px', margin: 0 }}>
                        <Link to="resources" style={{ color: '#203461' }}>
                            Tutorials & Collection
                        </Link>
                    </h2>
                    <div className="">Learn about how to build APIs and APIs collections</div>
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
            </Row>
        </Layout>
    );
}

export default BlogPage;

export const pageQuery = graphql`
    query BlogQuery($skip: Int, $limit: Int) {
        blogPosts: allBlogPosts(
            skip: $skip
            limit: $limit
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
