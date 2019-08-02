module.exports = {
    siteMetadata: {
        title: `Talks about API`, // website name - required
        description: `Hey 👋, I'm Mohd Danish Yusuf and I'm 26y old Front-end Engineer, I build s public-apis.xyz, dailyhack.xyz, apiwithgithub.com, dynamic-template.xyz, react-index.com & Open Source Developer, Tech Writer, Foodie 🍳`, // cover letter - required
        author: `@mddanishyusuf`, // author name
        siteUrl: `https://blog.public-apis.xyz`,
        githubURL: `https://github.com/mddanishyusuf`, // your github url for photo - required
        social: [
            {
                name: `APIs`,
                tag: `apis`,
            },
            {
                name: `Tutorials`,
                tag: `tutorials`,
            },
            {
                name: `Resources`,
                tag: `resources`,
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
    ],
};
