import React from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="Container">
      <div className="App">
        <Header />
        <Images />
        <Footer />
      </div>
    </div>
  );
}
