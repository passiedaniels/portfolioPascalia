import React from "react";
import html from "./images/htmlimage.webp";
import css from "./images/cssimage.webp";
import bootstrap from "./images/bootstrap.webp";
import vscode from "./images/vscodeimage.webp";
import github from "./images/githubimage.webp";
import react from "./images/logo.svg";

export default function Images() {
  return (
    <div className="Images">
      <main className="Main1">
        <h2>Tools & Technologies I know</h2>
        <div className="icons">
          <div className="row">
            <div className="col">
              <img src={css} alt="CSS" />
            </div>
            <div className="col">
              <img src={bootstrap} alt="Bootstrap" />
            </div>
            <div className="col">
              <img src={html} alt="HTML" />
            </div>
            <div className="col">
              <img src={react} alt="React app" />
            </div>
            <div className="col">
              <img src={vscode} alt="Vs code" />
            </div>
            <div className="col">
              <img src={github} alt="Github" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
