const _ = require('lodash');

const POST_PER_PAGE = 40;

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const postTemplate = require.resolve('./src/templates/postTemplate.js');
    const articlesTemplate = require.resolve('./src/templates/articlesTemplate.js');
    const articleTemplate = require.resolve('./src/templates/articleTemplate.js');

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        posts: allBlogPosts(filter: { slug: { ne: null } }) {
                            nodes {
                                blog
                                color
                                date
                                slug
                                title
                                description
                                issueLink
                            }
                        }
                    }
                `
            ).then(results => {
                if (results.error) {
                    reject(results.error);
                }

                const chunks = _.chunk(results.data.posts.nodes, POST_PER_PAGE);
                const TOTAL_OBJECT = results.data.posts.nodes.length;

                chunks.forEach((chunk, index) => {
                    if (index === 0) {
                        createPage({
                            path: `/articles`,
                            component: articlesTemplate,
                            context: {
                                first: POST_PER_PAGE / 2,
                                skip: POST_PER_PAGE * index,
                                limit: POST_PER_PAGE,
                                pageNumber: index + 1,
                                hasNextPage: index !== chunks.length - 1,
                                hasPreviousPage: index !== 0,
                                total: TOTAL_OBJECT,
                            },
                        });
                    }
                    createPage({
                        path: `/articles/page/${index + 1}`,
                        component: articlesTemplate,
                        context: {
                            first: POST_PER_PAGE / 2,
                            skip: POST_PER_PAGE * index,
                            limit: POST_PER_PAGE,
                            pageNumber: index + 1,
                            hasNextPage: index !== chunks.length - 1,
                            hasPreviousPage: index !== 0,
                            total: TOTAL_OBJECT,
                        },
                    });
                });

                results.data.posts.nodes.forEach(x => {
                    // loop over split pages
                    if (x.blog === 'Yes') {
                        const postId = x.issueLink.split('/issues/')[1];
                        createPage({
                            path: `/${x.slug}`,
                            component: articleTemplate,
                            context: {
                                post_id: parseInt(postId),
                                description: x.description,
                            },
                        });
                    } else {
                        createPage({
                            path: `/${x.slug}`,
                            component: postTemplate,
                            context: {
                                post_id: x.slug,
                            },
                        });
                    }
                });
            })
        );
    });
};
