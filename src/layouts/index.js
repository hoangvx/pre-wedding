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
        {/* <iframe title="audio" className="ht-audio" src={cnd} allow="autoplay" id="iframeAudio"/> */}
        <audio
          ref={audio => this.audio = audio}
          id="audio"
          className="ht-audio"
          controls={true}
          autoPlay={true}>
          <source src={cnd} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <NavBar />
        {children}
        <Footer />
      </div>
    )
  }
};

export default Layout;