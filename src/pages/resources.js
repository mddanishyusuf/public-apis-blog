import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import Masonry from 'react-masonry-css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkCard from '../components/linkCard';
import Pagination from '../components/pagination';

import '../components/style/resources.scss';

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
};

function ResourcesPage({ data, pageContext }) {
    const postsList = data.resourcesPosts.nodes;
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <SEO title="Good Resources to learn API" />
            <div className="page-heading">
                <h2>API Resources</h2>
                <div className="tag-line">
                    Curated List of articles and tutorials about APIs written by expert developers
                </div>
                <div className="action-buttons">
                    <div className="action-btn outline-btn">Suggest Good Links</div>
                </div>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {postsList.map((item, index) => (
                    <LinkCard key={index} data={item} showReadMore showTags fontSize={1.3} />
                ))}
            </Masonry>
        </Layout>
    );
}

export default ResourcesPage;

export const pageQuery = graphql`
    query ResourcesQuery($skip: Int, $limit: Int) {
        resourcesPosts: allResourcesPosts(skip: $skip, limit: $limit, sort: { fields: added_date, order: DESC }) {
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
