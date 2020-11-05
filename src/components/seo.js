/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';
import {JsonLd} from './jsonld';

function SEO({lang, meta, keywords, title, description}) {
    const {site} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
    );

    const metaDescription = site.siteMetadata.description;
    const defaultTitle = site.siteMetadata.title;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            meta={[
                {
                    name: 'description',
                    content: description
                },
                {
                    name: 'robots',
                    content: site.siteMetadata.siteUrl
                },
                {
                    name: 'image',
                    content: site.siteMetadata.image
                },
                {
                    property: 'og:url',
                    content: site.siteMetadata.siteUrl
                },
                {
                    property: 'og:title',
                    content: defaultTitle
                },
                {
                    property: 'og:description',
                    content: metaDescription
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:image',
                    content: site.siteMetadata.image
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata?.author || ''
                },
                {
                    name: 'twitter:title',
                    content: defaultTitle
                },
                {
                    name: 'twitter:image',
                    content: site.siteMetadata.image
                },
                {
                    name: 'twitter:description',
                    content: metaDescription
                }
            ].
                concat(
                    keywords.length > 0 ?
                        {
                            name: 'keywords',
                            content: keywords.join(', ')
                        } :
                        []
                ).
                concat(meta)}
        >
            <JsonLd>
                {{
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    url: 'https://salesjump.xyz/',
                    name: 'SalesJump',
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '91-9315368036',
                        contactType: 'Customer service'
                    }
                }}
            </JsonLd>
        </Helmet>
    );
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    keywords: [],
    title: '',
    description: ''
};

SEO.propTypes = {
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    description: PropTypes.string
};

export default SEO;
