import React from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    document.title = "Homepage| Pascalia portfolio";
  }, []);
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
