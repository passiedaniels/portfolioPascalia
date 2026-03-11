import React from "react";
export default function Images() {
  return (
    <div className="Images">
      <main className="Main1">
        <h2>Tools & Technologies I know</h2>
        <div className="icons">
          <div className="row">
            <div className="col">
              <img src="cssimage.webp" alt="css" />
            </div>
            <div className="col">
              <img src="bootstrap.webp" alt="boostrap" />
            </div>
            <div className="col">
              <img src="images/htmlimage.webp" alt="HTML" />
            </div>
            <div className="col">
              <img src="logo.svg" alt="React app" />
            </div>
            <div className="col">
              <img src="vscodeimage.webp" alt="Vs code" />
            </div>
            <div className="col">
              <img src="githubimage.webp" alt="Github" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
