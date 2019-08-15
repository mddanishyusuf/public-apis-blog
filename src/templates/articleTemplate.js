import React from 'react';
import { graphql, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import { User, Tag, Calendar, Share2 } from 'react-feather';
import Markdown from 'markdown-to-jsx';

import Layout from '../components/layout';
import SEO from '../components/seo';
import APICard from '../components/apiCard';

import './style/post-style.scss';

function createMarkup(content) {
    return { __html: content };
}

function ArticlePostPage({ data, pageContext }) {
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
                                <span>{postObj.created_at.split('T')[0]}</span>
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
                        <div className="description">
                            <Markdown>{postObj.body}</Markdown>
                        </div>
                    </Col>
                </Row>
                <div className="end-of-article">
                    <h3>Thanks for reading!!!</h3>
                    <p>
                        I hope you like this article. <br />
                        So, your suggestions and feedback will make this website more powerful.
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default ArticlePostPage;

export const pageQuery = graphql`
    query ArticlePostQuery($post_id: Int) {
        blogPost: allGithubIssue(filter: { number: { eq: $post_id } }) {
            nodes {
                id
                number
                body
                html_url
                title
                updated_at
                url
                created_at
            }
        }
    }
`;
