module.exports = {
    siteMetadata: {
        title: `Talks about Public API`,
        description: `Top free APIs, alternative APIs & Public APIs collections. Learn how to build REST APIs and deploy on free hosting.`, // cover letter - required
        author: `@mddanishyusuf`,
        image: '/images/featured-image.png',
        siteUrl: `https://blog.public-apis.xyz`,
        twitterUsername: '@public_apis',
        githubURL: `https://github.com/mddanishyusuf`,
        social: [
            {
                name: `Articles`,
                tag: `articles`,
            },
            {
                name: `Twitter Feeds`,
                tag: `twitter-feeds`,
            },
            {
                name: `Resources`,
                tag: `resources`,
            },
            // {
            //     name: `APIs`,
            //     tag: `apis`,
            // },
            // {
            //     name: `Alternative`,
            //     tag: `alternative-apis`,
            // },
        ],
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'blog__',
                url: `https://public-apis-server.glitch.me/blogs/list`,
                method: 'get',
                auth: false,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {},
                name: `posts`,
                entityLevel: `docs`,
            },
        },
        {
            resolve: 'gatsby-source-apiserver',
            options: {
                typePrefix: 'resources__',
                url: `https://public-apis-server.glitch.me/resources/list`,
                method: 'get',
                auth: false,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {},
                name: `posts`,
                entityLevel: `docs`,
            },
        },
        {
            resolve: `gatsby-source-github-issue`,
            options: {
                owner: 'mddanishyusuf',
                repo: 'public-apis-blog',
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Poppins`,
                        variants: [`400`, `500`, `600`, `700`, `900`],
                    },
                    {
                        family: `Inconsolata`,
                        variants: [`400`, `700`],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-simple-analytics',
            options: {
                domain: 'sa.blog.public-apis.xyz',
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint:
                    'https://iamnewbie.us10.list-manage.com/subscribe/post?u=d6aa14d1db1acb93b8125a0e1&id=a494ca665f', // add your MC list endpoint here; see instructions below
            },
        },
        `gatsby-plugin-sitemap`,
    ],
};
