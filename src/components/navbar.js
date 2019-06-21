import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import "../styles/custom-navbar.scss"

class NavBar extends React.Component {
  state = {
    activeMenu: false,
  };

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };

  render() {
    return (
      <StaticQuery
        query={pageQuery}
        render={data => (
          <nav className="navbar is-fixed-top ht-navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand ht-logo">
              <a className="navbar-item ht-brand" href="/">
                <Img className="ht-brand-img" fluid={ data.logo.childImageSharp.fluid } /> 
              </a>
              <a role="button" href="#top" onClick={this.toggleMenu} className={`navbar-burger burger ${this.state.activeMenu ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="ht-navbar-mobile">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            
            <div className={`navbar-menu ht-navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`} id="ht-navbar-mobile">
              <div className="navbar-end">
                <div className="navbar-item">
                  <Link className="navbar-item" to={`/`}>
                    H&T
                  </Link>
                  <Link className="navbar-item" to={`/stories`}>
                    Love Stories
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
      />
    )
  }
}

export default NavBar

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "logo1.png" }) {
      childImageSharp {
        fixed(width: 300, height: 70) {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`