import React from "react";
import "../Images.css";
import html from "../images/htmlimage.webp";
import css from "../images/cssimage.webp";
import bootstrap from "../images/bootstrap.webp";
import vscode from "../images/vscodeimage.webp";
import github from "../images/githubimage.webp";
import react from "../images/logo.svg";

export default function Images() {
  return (
    <div className=" Container mt-5">
      <div className="container-image">
        <main className="Main1">
          <h2>Tools & Technologies I know</h2>
          <div className="icons">
            <div className="row">
              <div className="col-6 col-md-4">
                <img src={css} alt="CSS" className="gallery-img" />
              </div>
              <div className=" col-6 col-md-4">
                <img src={bootstrap} alt="Bootstrap" className="gallery-img" />
              </div>
              <div className=" col-6 col-md-4">
                <img src={html} alt="HTML" className="gallery-img" />
              </div>
              <div className=" col-6 col-md-4">
                <img src={react} alt="React app" className="gallery-img" />
              </div>
              <div className=" col-6 col-md-4">
                <img src={vscode} alt="Vs code" className="gallery-img" />
              </div>
              <div className=" col-6 col-md-4">
                <img src={github} alt="Github" className="gallery-img" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
