import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from "@fortawesome/free-solid-svg-icons"

const Banner = () => (
  <StaticQuery
    query={pageQuery}
    render={data => (
      <section className={`hero is-dark`}>
        <div className="hero-body">
          <nav className="navbar">
            <div className="navbar-brand">
              <Img fixed={ data.logo.childImageSharp.fixed } /> 
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <p>
                    <span>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />
                    <span> 2019 </span>
                    <span>Võ Xuân Hoàng</span>
                    <span> & </span>
                    <span>Đào Thị Khánh Trang</span>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    )}
  />
)

export default Banner

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo3.png" }) {
      childImageSharp {
        fixed(width: 300, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`