import React from "react";
import "./Footer.css";
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
        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Pascaliaekiteles05@gmail.com
        </a>
        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram" title="instagram"></i>
        </a>

        <a
          href="https://www.instagram.com/ekiteles_pae"
          target="_blank"
          rel="noreferrer"
        >
          Linkdin
        </a>
      </div>
    </div>
  );
}
