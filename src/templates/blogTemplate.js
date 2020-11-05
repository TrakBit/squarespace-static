import React, {useEffect, useState} from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../../App.css';

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexCol)`
  padding: 2rem 11rem 5rem 11rem;
  align-items: center;
  justify-content: space-between;
`;

const MobileContainer = styled(FlexCol)`
  padding: 2rem 2rem 2rem 2rem;
  align-items: center;
  justify-content: space-between;
`;

export default function Template({
    data // this prop will be injected by the GraphQL query below.
}) {
    const {markdownRemark} = data; // data.markdownRemark holds your post data
    const {frontmatter, html} = markdownRemark;
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const start = html.lastIndexOf('<h1>') + 4;
    const end = html.lastIndexOf('</h1>');
    const description = (html.substring(start, end));

    return (
        <Layout >
            <SEO
                name={'Add WhatsApp Chat To Squaresp'}
                keywords={['Squarespace', 'Whatsapp', 'Support']}
                title={'SalesJump - ' + frontmatter.title}
                description={description}
                url={'https://salesjump.xyz/blog' + frontmatter.slug}
            />
            <Content
                windowWidth={windowWidth}
                frontmatter={frontmatter}
                html={html}
            />
        </Layout>
    );
}

const Content = ({windowWidth, frontmatter, html}) => {
    if (windowWidth > 480) {
        return (
            <Container>
                <h1 style={{fontSize: '45px', textAlign: 'center', lineHeight: '1.2', fontWeight: '600'}}>
                    {frontmatter.title}
                </h1>
                <div>
                    {frontmatter.date}
                </div>
                <div
                    style={{marginTop: '80px'}}
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </Container>
        );
    } else {
        return (
            <MobileContainer>
                <h1 style={{fontSize: '30px', textAlign: 'center', lineHeight: '1.2', fontWeight: '600'}}>
                    {frontmatter.title}
                </h1>
                <div>
                    {frontmatter.date}
                </div>
                <div
                    style={{marginTop: '80px'}}
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </MobileContainer>
        );
    }
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;