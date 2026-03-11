import React from "react";
import "../Footer.css";
export default function Footer() {
  return (
    <div>
      <div>
        <p className="p1">Work Inquiry</p>
      </div>
      <div>
        <a href="https/">Contact Me</a>
      </div>
      <div>
        <p>Lets work together</p>
      </div>
      <div className="ContactInfo ">
        <div>
          <a
            href="https://www.instagram.com/ekiteles_pae"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bi bi-envelope-at">Pascaliaekiteles05@gmail.com</i>
          </a>
        </div>
        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-bootstrap"></i>
        </a>
        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>

        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
      </div>
      <p>
        This work was coded by
        <a href="https://github.com/passiedaniels">Pascalia A.</a> open sourced
        on
        <a href="https://github.com/passiedaniels/portfolioPascalia">Github</a>
        and hosted on
        <a href="https://pascaliaportfolio.netlify.app/">Netlify</a>
      </p>
    </div>
  );
}
