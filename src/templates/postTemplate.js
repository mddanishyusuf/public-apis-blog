import React from 'react';
import { graphql, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import { User, Tag, Calendar, Share2 } from 'react-feather';

import Layout from '../components/layout';
import SEO from '../components/seo';
import APICard from '../components/apiCard';

import './style/post-style.scss';

function createMarkup(content) {
    return { __html: content };
}

function BlogPostPage({ data, pageContext }) {
    const postObj = data.blogPost.nodes[0];
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <SEO title="Public APIs Blog" />
            <div className="reader-content">
                <div className="reader-header">
                    <h2 className="title">{postObj.title}</h2>
                    <div className="post-meta">
                        <div className="author">
                            <span>
                                <User size={14} />
                                <span>Mohd Danish</span>
                            </span>
                        </div>
                        <div className="published-date">
                            <span>
                                <Calendar size={14} />
                                <span>{postObj.date}</span>
                            </span>
                        </div>
                        <div className="share">
                            <span>
                                <Share2 size={14} />
                                <ul>
                                    <li>
                                        <a
                                            href={`https://twitter.com/intent/tweet/?text=${encodeURI(
                                                postObj.title
                                            )}&url=https://blog.public-apis.xyz/${postObj.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            tweet
                                        </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <Row>
                    <Col md={8}>
                        <div className="description" dangerouslySetInnerHTML={createMarkup(postObj.description)} />
                        {postObj.links.map((link, index) => (
                            <APICard key={index} data={link} />
                        ))}
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}

export default BlogPostPage;

export const pageQuery = graphql`
    query BlogPostQuery($post_id: String) {
        blogPost: allBlogPosts(filter: { slug: { eq: $post_id } }) {
            nodes {
                blog
                color
                date
                slug
                description
                title
                _id
                id
                links {
                    title
                    _id
                    link
                    color
                    description
                    category
                    published_at
                    auth
                    cat_id
                    slug
                    cors
                    date
                    featured
                    featured_date
                }
            }
        }
    }
`;
