import React from "react";
// Example Header-Component (see below)
import NavBar from "../components/navbar";
import Footer from "../components/footer";

class Layout extends React.Component {

  componentDidMount() {
    var audio = new Audio('./cuoi_nhau_di.mp3');
    audio.play();
  }

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