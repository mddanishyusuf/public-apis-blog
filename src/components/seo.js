/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, keywords }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        image
                        twitterUsername
                        siteUrl
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const { image } = site.siteMetadata;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `title`,
                    content: title,
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `keywords`,
                    content: keywords,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: image,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: `twitter:image`,
                    content: image,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    twitterUsername: ``,
    siteUrl: `https://blog.public-apis.xyz`,
    keywords: `public, apis, blog, learn, what, api, build, python, nodejs, mongodb, resources, list, movie, free, open, APIs, github, collective, list, IoT, github, knowledge`,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    keywords: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    twitterUsername: PropTypes.string,
    siteUrl: PropTypes.string,
};

export default SEO;
