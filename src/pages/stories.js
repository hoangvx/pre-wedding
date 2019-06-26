import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../layouts"
import SEO from "../components/seo"
import Banner from "../components/banner";
import BreadCrumb from "../components/breadcrumb";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from "@fortawesome/free-solid-svg-icons"

class Stories extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO title="Stories" />
        <BreadCrumb />
        <Banner bgClass="ht-pattern-bg1">
          <div className="hero-body ht-card">
            <div className="container is-widescreen">
              <div className="tile ht-card-title">
                <h1>Ký Sự</h1>
              </div>
              <div className="tile ht-card-title">
                <Img fixed={data.headding.childImageSharp.fixed} />
              </div>
              <div className="tile is-vertical">
                {posts.map(({ node }, idx) => {
                  const isOdd = idx % 2 !== 0
                  return (
                    <div key={node.fields.slug} className="ht-stories-item">
                      <div className={ isOdd ? 'ht-story-left' : 'ht-story-right' }>
                        <Img className="ht-story-img" fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                      </div>
                      <div className={ isOdd ? 'ht-story-right' : 'ht-story-left' }>
                        <Link to={`/stories${node.fields.slug}`}>
                          <h1>{node.frontmatter.title}</h1>
                        </Link>
                        <h3><FontAwesomeIcon icon={faCalendar} />{node.frontmatter.date}</h3>
                        <p>{node.excerpt}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </Banner>
      </Layout>
    )
  }
}

export default Stories

export const pageQuery = graphql`
  query {
    headding: file(relativePath: { eq: "headding.png" }) {
      childImageSharp {
        fixed(width: 177, height: 22) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              id
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
