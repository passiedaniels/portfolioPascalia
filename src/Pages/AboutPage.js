import React from "react";
import Me from "./Images/me.jpg";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="About">
      <div className="row">
        <div className="col">
          <h1>Hi I am Pascalia Aletia E.,</h1>
          <h4>A Front-End Developer based in Kenya</h4>
          <p>
            I’m currently seeking new opportunities in front-end development.
            I’m open to work remotely and have flexible hours. I’m highly
            skilled in JavaScript and React, I use toold and technologies like
            css, html and bootstrap.
          </p>
          <p>
            Ihave worked on several project on which i will list on my work
            page. Feel free to browse
          </p>
          <h5>Joke</h5>
          <p>I write code, fix bugs and occasionally create new ones lol😁</p>
          <a href="https/">See my projects</a>
        </div>
        <div className="col">
          <img src={Me} alt="ME" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
