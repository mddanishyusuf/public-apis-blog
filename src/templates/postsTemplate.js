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

function BlogPage({ data, pageContext }) {
    console.log(data);
    const postsList = data.blogPosts.nodes;
    const resourceList = data.resourcesPosts.nodes;
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <Banner />
            <SEO title="Public APIs Blog" />
            <Row>
                <Col md={9}>
                    <Row>
                        {postsList.map((item, index) => (
                            <Col md={4} key={index}>
                                <PostCard data={item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={3}>
                    <h2 style={{ fontSize: 20, fontWeight: 600, padding: '7px 0px' }}>
                        <Link to="resources" style={{ color: '#203461' }}>
                            {getIcon('Resources', 20)} Resources
                        </Link>
                    </h2>
                    {resourceList.map((item, index) => (
                        <LinkCard data={item} key={index} showReadMore={false} fontSize={1} showTags={false} />
                    ))}
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
        resourcesPosts: allResourcesPosts(limit: 5, sort: { fields: added_date, order: DESC }) {
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
