import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostCard from '../components/blogCard';
import Pagination from '../components/pagination';
import Banner from '../components/banner';

function BlogPage({ data, pageContext }) {
    console.log(data);
    const postsList = data.blogPosts.nodes;
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <Banner />
            <SEO title="Public APIs Blog" />
            <Row>
                {postsList.map((item, index) => (
                    <Col md={4} key={index}>
                        <PostCard data={item} />
                    </Col>
                ))}
            </Row>
        </Layout>
    );
}

export default BlogPage;

export const pageQuery = graphql`
    query BlogQuery($skip: Int, $limit: Int) {
        blogPosts: allBlogPosts(skip: $skip, limit: $limit, filter: { slug: { ne: null }, blog: { eq: "No" } }) {
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
    }
`;
