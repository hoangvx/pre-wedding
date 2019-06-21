import React from "react"

const Banner = ({ children, bgClass, sizeClass, ...props }) => (
  <section className={`hero ${sizeClass ? sizeClass : 'is-fullheight'} ${bgClass}`}
    {...props}
  >
    {children}
  </section>
)

export default Banner
