import React from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Homepage() {
  return (
    <div className="Container">
      <NavBar />
      <div className="App">
        <Header />
        <Images />
        <Footer />
      </div>
    </div>
  );
}
