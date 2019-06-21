import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../layouts"
import Banner from "../components/banner";
import BreadCrumb from "../components/breadcrumb";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const headding = this.props.data.headding.childImageSharp.fixed
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BreadCrumb root="stories" page={post.frontmatter.title} />
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile ht-card-title">
                <h1>{post.frontmatter.title}</h1>
              </div>
              <div className="tile ht-card-title">
                <Img fixed={headding} />
              </div>
              <div className="tile is-vertical">
                <div className="ht-blog">
                  <p className="ht-story-date">
                    {post.frontmatter.date}
                  </p>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
                <hr
                  style={{
                  }}
                />

                <ul
                  style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                  }}
                >
                  <li>
                    {previous && (
                      <Link to={`/stories${previous.fields.slug}`} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                  <li>
                    {next && (
                      <Link to={`/stories${next.fields.slug}`} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query StoryPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    headding: file(relativePath: { eq: "headding.png" }) {
      childImageSharp {
        fixed(width: 177, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
