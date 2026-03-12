import React from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="Container">
      <div className="Contact">
        <div>
          <h1>Lets Get In Touch!!👩‍💻</h1>
          <h4>Your Email Address:</h4>
          <form>
            <input type="search" />
          </form>
          <h4>Your Message:</h4>
          <form>
            <input type="search" />
          </form>
        </div>
        <div>
          <h3>Email</h3>
          <a href="https/" rel="noreferrer">
            Pascaliaekiteles05@gmail.com
          </a>
          <h3>instagram</h3>
          <a href="https/" rel="noreferrer">
            Ekiteles_pae
          </a>
          <h3>Linkedn</h3>
          <a href="htttps/" rel="noreferrer">
            Linkedn
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
