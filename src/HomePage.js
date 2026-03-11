import React from "react";
import Header from "./Header";
import Images from "./Images";
import Footer from "./Footer";

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
