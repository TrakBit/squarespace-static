module.exports = {
    siteMetadata: {
        title: 'SalesJump - Add WhatsApp Chat To Squarespace',
        description: 'Integrate WhatsApp Live Chat Widget With Squarespace',
        author: '@SalesJump',
        siteUrl: 'https://salesjump.xyz',
        image: 'https://firebasestorage.googleapis.com/v0/b/squarespace-chat.appspot.com/o/images%2Fcover-min.png?alt=media&token=744d3e0d-7045-4fed-876e-09800b543d07'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 700,
                            withWebp: true,
                            quality: 100
                        }
                    },
                    {
                        resolve: 'gatsby-remark-embed-video-lite',
                        options: {
                            width: 300,
                            height: 150
                        }
                    },
                    'gatsby-remark-responsive-iframe'
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#00b7c2',
                theme_color: '#00b7c2',
                display: 'minimal-ui',
                icon: 'src/images/arrow.png' // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'markdown-pages',
                path: `${__dirname}/src/markdown-pages`
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://salesjump.xyz',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        {
            resolve: 'gatsby-plugin-canonical-urls',
            options: {
                siteUrl: 'https://salesjump.xyz'
            }
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-T7WGG97ZQH'
            }
        }
    ]
};
