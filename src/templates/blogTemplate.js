import React, {useEffect, useState} from 'react';
import {graphql, Link} from 'gatsby';
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

const OutlineButton = styled.button`
  height: 42px;
  width: 150px;
  background-color: #FFFFFF;
  color: #00b7c2;
  border-color: #00b7c2;
  border-width: 4px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 0.25rem;
  line-height: 1.5;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
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

    return (
        <Layout >
            <SEO
                name={'Add WhatsApp Chat To Squaresp'}
                keywords={[
                    'How To Add Whatsapp Chat To Squarespace',
                    'Add WhatsApp Chat To Squarespace',
                    'Add WhatsApp To Squarespace',
                    'Whatsapp Chat Squarespace',
                    'Squarespace WhatsApp Integration'
                ]}
                title={'SalesJump - ' + frontmatter.title}
                description={frontmatter.description}
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
                <Link to={'/blog'}>
                    <OutlineButton> Read More Blogs</OutlineButton>
                </Link>
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
                <Link to={'/blog'}>
                    <OutlineButton> Read More Blogs</OutlineButton>
                </Link>
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
        description
      }
    }
  }
`;