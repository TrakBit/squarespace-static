import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../App.css'

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(FlexCol)`
  padding: 1rem;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout >
      <SEO 
        name={"Whatsapp Chat For Squarespace"}
        title={frontmatter.title}
        description={frontmatter.title}
        keywords={[`Squarespace`, `Whatsapp`]}
        url={'https://salesjump.xyz' + frontmatter.slug}
      />
      <Container>
          <div style={{fontSize: '45px', textAlign: 'center', lineHeight: "1.2", fontWeight: "600"}}>
            {frontmatter.title}
          </div>
          <div>
            {frontmatter.date}
          </div>
          <div
            style={{marginTop: "40px", padding: '2rem 11rem 5rem 11rem'}}
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </Container>
    </Layout>
  )
}

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
`