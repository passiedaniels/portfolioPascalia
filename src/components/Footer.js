import React from "react";
import "../Footer.css";
export default function Footer() {
  return (
    <div className=" Container footer">
      <div className="container-footer">
        <div className="contact-box justify-content-evenly mb-5  d-md-flex">
          <div>
            <h3>Work Inquiry</h3>
            <p className="text-muted">Lets work together</p>
          </div>
          <div>
            <a href="https/" className="contact-Button mt-5 me-10">
              Contact Me
            </a>
          </div>
        </div>

        <div className="ContactInfo  ">
          <div>
            <a
              href="https://www.instagram.com/ekiteles_pae"
              target="_blank"
              rel="noreferrer"
            >
              <i class=" email bi bi-envelope-at  ">
                {" "}
                Pascaliaekiteles05@gmail.com
              </i>
            </a>
          </div>
          <div className="social-Media  ">
            <a
              href="https://www.instagram.com/ekiteles_pae"
              target="_blank"
              rel="noreferrer"
            >
              <i class="  bi bi-bootstrap"></i>
            </a>
            <a
              href="https://www.instagram.com/ekiteles_pae"
              target="_blank"
              rel="noreferrer"
            >
              <i className=" ms-3 bi bi-instagram"></i>
            </a>

            <a
              href="https://www.instagram.com/ekiteles_pae"
              target="_blank"
              rel="noreferrer"
            >
              <i class=" ms-3 bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <p>
          This work was coded by
          <a href="https://github.com/passiedaniels"> Pascalia A.</a> open
          sourced on
          <a href="https://github.com/passiedaniels/portfolioPascalia">
            {" "}
            Github
          </a>
          and hosted on
          <a href="https://pascaliaportfolio.netlify.app/"> Netlify</a>
        </p>
      </div>
    </div>
  );
}
