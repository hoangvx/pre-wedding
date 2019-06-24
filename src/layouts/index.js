import React from "react";
// Example Header-Component (see below)
import NavBar from "../components/navbar";
import Footer from "../components/footer";

class Layout extends React.Component {
  render() {
    let { children } = this.props
    return (
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    )
  }
};

export default Layout;