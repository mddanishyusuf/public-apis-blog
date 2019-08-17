import React from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-css';

import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkCard from '../components/linkCard';

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
                <h2>Curated Links</h2>
                <div className="tag-line">
                    Awesome List of articles and tutorials about APIs written by expert developers
                </div>
                <div className="action-buttons">
                    <a href="https://airtable.com/shr00JTiWLs11CzX7" target="_blank" rel="noopener noreferrer">
                        <div className="action-btn outline-btn">Suggest Good Links</div>
                    </a>
                </div>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {postsList.map((item, index) => (
                    <LinkCard key={index} data={item} showReadMore showTags={false} fontSize={1} />
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
