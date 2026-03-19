import React from "react";
import "../Homepage.css";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    document.title = "Homepage| Pascalia portfolio";
  }, []);
  return (
    <div>
      <div>
        <header className="Header1 " title="homepage">
          <h3>👩‍💻 Hello i am </h3>
          <h1>Pascalia Aletia</h1>
          <h4 className="mb-5">
            A Junior Front-End Developer Based in Nairobi Kenya
          </h4>
          <a className="link " href="/contact">
            Contact me
          </a>
        </header>
      </div>
    </div>
  );
}
