import React from "react"

const BreadCrumb = ({ root, page }) => {
  return (
    <section className={`hero is-medium ht-banner-bg-stories`}>
      <div className="hero-body">
        <div className="container is-widescreen ht-breadcrumb">
          <h1 className="is-size-1">Câu Chuyện Của Chúng Tớ</h1>
          { root && page ? (
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><a href={`/${root}`}>{root}</a></li>
                  <li className="is-active"><a href="#" aria-current="page">{page}</a></li>
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
