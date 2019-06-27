import React from "react";
// Example Header-Component (see below)
import NavBar from "../components/navbar";
import Footer from "../components/footer";

import cnd from './cuoi_nhau_di.mp3';

class Layout extends React.Component {

  render() {
    let { children } = this.props
    return (
      <div>
        <iframe title="audio" className="ht-audio" src={cnd} allow="autoplay" id="iframeAudio"/>
        <NavBar />
        {children}
        <Footer />
      </div>
    )
  }
};

export default Layout;