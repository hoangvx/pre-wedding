import React from "react"

const BreadCrumb = ({ root, page }) => {
  return (
    <section className={`hero is-medium ht-banner-bg-stories`}>
      <div className="ht-mask"/>
      <div className="hero-body">
        <div className="container is-widescreen ht-breadcrumb">
          <h1>Câu chuyện tình yêu</h1>
          { root && page ? (
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><a href={`/${root}`}>{root}</a></li>
                  <li className="is-active"><a href="#top" aria-current="page">{page}</a></li>
                </ul>
              </nav>
            ) : null
          }
        </div>
      </div>
    </section>
  )
}
export default BreadCrumb
