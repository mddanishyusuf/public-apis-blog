module.exports = {
    siteMetadata: {
        title: `Talks about API`, // website name - required
        description: `Hey 👋, I'm Mohd Danish Yusuf and I'm 26y old Front-end Engineer, I build s public-apis.xyz, dailyhack.xyz, apiwithgithub.com, dynamic-template.xyz, react-index.com & Open Source Developer, Tech Writer, Foodie 🍳`, // cover letter - required
        author: `@mddanishyusuf`, // author name
        siteUrl: `https://blog.public-apis.xyz`,
        githubURL: `https://github.com/mddanishyusuf`, // your github url for photo - required
        social: [
            {
                name: `Resources`,
                tag: `resources`,
            },
            {
                name: `Tutorials`,
                tag: `tutorials`,
            },
            {
                name: `APIs`,
                tag: `apis`,
            },
            {
                name: `Alternative`,
                tag: `alternative-apis`,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-sass`,
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
