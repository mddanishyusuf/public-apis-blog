const _ = require('lodash');

const POST_PER_PAGE = 16;

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const postTemplate = require.resolve('./src/templates/postTemplate.js');
    const postsTemplate = require.resolve('./src/templates/postsTemplate.js');

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        posts: allBlogPosts {
                            nodes {
                                blog
                                color
                                date
                                slug
                                title
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
                            path: `/`,
                            component: postsTemplate,
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
                        path: `/page/${index + 1}`,
                        component: postsTemplate,
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
                    createPage({
                        path: `/${x.slug}`,
                        component: postTemplate,
                        context: {
                            post_id: x.slug,
                        },
                    });
                });
            })
        );
    });
};
