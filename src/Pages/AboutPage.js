import React from "react";
import Me from "../images/me.jpg";
import Footer from "../components/Footer";
import "../About.css";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "AboutPage| Pascalia portfolio";
  }, []);
  return (
    <div className=" Container ">
      <NavBar />
      <div className="content-container">
        <div className="row">
          <div className="col-6">
            <h1>Hi I am Pascalia Aletia E.,</h1>
            <h4>A Front-End Developer based in Kenya</h4>
            <p className="About-p">
              I’m currently seeking new opportunities in front-end development.
              I’m open to work remotely and have flexible hours. I’m highly
              skilled in JavaScript and React, I use toold and technologies like
              css, html and bootstrap. I have worked on several project on which
              i will list on my work page. Feel free to browse
            </p>
            <h5>Joke</h5>
            <p className="joke-p">
              I write code, fix bugs and occasionally create new ones lol😁
            </p>
            <a href="https/" className="Button-About">
              See my projects
            </a>
          </div>
          <div className="col-6 img-fluid">
            <img src={Me} alt="ME" className=" About-img" />
          </div>
        </div>
        <div className="Footer-About">
          <Footer />
        </div>
      </div>
    </div>
  );
}
