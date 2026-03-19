import React from "react";
import Footer from "../components/Footer";
import "../Contact.css";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "ContactPage| Pascalia portfolio";
  }, []);
  return (
    <div className="Container">
      <NavBar />
      <div className="container-contact  ">
        <h1 className="text-center">Lets Get In Touch!!👩‍💻</h1>
        <div className="Contact d-flex justify-content-evenly mt-5">
          <div className="border p-5 rounded ">
            <h4>Your Email Address:</h4>

            <form>
              <input type="search" className="Search" />
            </form>
            <h4>Your Message:</h4>
            <form>
              <input type="search" className="Search" />
            </form>
          </div>
          <div className="contactinfo">
            <h3>Email</h3>
            <a href="mailto:pascaliaekiteles05@gmail.com" rel="noreferrer">
              Pascaliaekiteles05@gmail.com
            </a>
            <h3>instagram</h3>
            <a href="https://www.instagram.com/ekiteles_pae" rel="noreferrer">
              Ekiteles_pae
            </a>
            <h3>Linkedn</h3>
            <a
              href="https://www.linkedin.com/in/pascalia-ekiteles-69b19a2a7"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
