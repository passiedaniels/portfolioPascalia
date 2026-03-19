import React from "react";
import "../work.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import yoga from "../images/yoga.png";
import weather1 from "../images/waether1.png";
import weather2 from "../images/waether2.png";
import worldclock from "../images/worldclock.png";
import recipe from "../images/recipe.png";
import dic from "../images/dictionary.png";
import { useEffect } from "react";

export default function WorkPage() {
  useEffect(() => {
    document.title = "WorkPage| Pascalia portfolio";
  }, []);
  return (
    <div className="Container">
      <NavBar />
      <div className="work">
        <h1> Some Samples Of Work I Have Been Working On!!</h1>
        <div className="Photos">
          <div className="row">
            <div className="col-6 work-photo">
              <img
                src={dic}
                alt="dictionary"
                className="img-fluid work-img"
                title="Dictionary website"
              />
              <div>
                <h5>Dictionary Website</h5>
                <p>
                  This project is a web-based dictionary application designed to
                  help users quickly find word definitions and meanings. Users
                  can search for any word, and the application retrieves
                  relevant information from an external dictionary API in real
                  time. The interface displays definitions, phonetics, and
                  example usage in a structured and easy-to-read layout. The
                  goal of the project was to practice working with APIs and
                  dynamically displaying data on a webpage while maintaining a
                  clean and responsive user interface.
                </p>
                <h6>Technologies: HTML, CSS, JavaScript, API Integration</h6>
              </div>
            </div>
            <div className="col-6 work-photo">
              <img
                src={weather1}
                alt="weather1"
                className="img-fluid work-img"
                title="Static weather web"
              />
              <div>
                <h5>Static Weather</h5>
                <p>
                  This website was built using pure HTML, CSS, and JavaScript
                  without relying on frameworks or libraries. The project
                  demonstrates strong foundational web development skills and
                  focuses on building interactive features using vanilla
                  JavaScript. It also highlights the ability to structure
                  webpages, manage layouts, and implement dynamic behavior
                  directly with core web technologies.
                </p>
                <h6>
                  {" "}
                  <strong>Technologies:</strong> HTML, CSS, JavaScript
                </h6>
              </div>
            </div>
            <div className="col-6 ">
              <img
                src={yoga}
                alt="yoga"
                className="img-fluid work-img"
                title="Weight loss web"
              />
              <div>
                <h5>Weight Loss Website</h5>
                <p>
                  The Weight Loss Website is an informational platform designed
                  to share tips, guidance, and resources related to healthy
                  weight management. The website organizes content in a clear
                  and user-friendly layout to make it easy for visitors to
                  navigate different sections. The project focuses on building a
                  structured content-based website while maintaining a clean
                  design and responsive layout for different screen sizes.
                </p>
                <h6>
                  {" "}
                  <strong> Technologies:</strong> HTML, CSS, JavaScript
                </h6>
              </div>
            </div>
            <div className="col-6 ">
              <img
                src={weather2}
                alt="weather2"
                className="img-fluid work-img"
                title="react weather web"
              />
              <div>
                <h5>React Weather Website</h5>
                <p>
                  This project is a responsive web application developed using
                  React to demonstrate modern frontend development techniques.
                  It uses a component-based structure that allows different
                  parts of the interface to be built as reusable components. The
                  project focuses on efficient rendering, structured code
                  organization, and building interactive user interfaces using
                  React. It also highlights the advantages of using a modern
                  JavaScript framework for scalable web development.
                </p>
                <h6>
                  {" "}
                  <strong>Technologies: </strong> React, JavaScript, CSS
                </h6>
              </div>
            </div>
            <div className="col-6 ">
              <img
                src={worldclock}
                alt="worldclock"
                className="img-fluid work-img"
                title="Wordclock web"
              />
              <div>
                <h5>WorldClock</h5>
                <p>
                  This project is a global clock application that displays the
                  current time for multiple cities around the world. Users can
                  easily view and compare time zones through a simple and
                  intuitive interface. The project demonstrates the use of
                  JavaScript to handle date and time functions, as well as
                  dynamically updating information on the page. It also focuses
                  on building a functional and visually clear utility
                  application.
                </p>
                <h6>
                  {" "}
                  <strong>Technologies: </strong> HTML, CSS, JavaScript
                </h6>
              </div>
            </div>
            <div className="col-6 ">
              <img
                src={recipe}
                alt="recipe"
                className="img-fluid work-img"
                title=" Ai recipe generatow"
              />
              <div>
                <h5>AI Recipe Generator</h5>
                <p>
                  The AI Recipe Generator is a web application that helps users
                  discover creative meal ideas based on ingredients or dish
                  names they provide. When a user enters an ingredient or
                  cooking idea, the application sends the request to an AI API
                  which generates a unique recipe suggestion. The project
                  focuses on integrating AI technology into a web interface and
                  displaying generated content in a clear and organized format.
                  It also emphasizes user interaction and responsive design.
                </p>
                <h6>
                  {" "}
                  <strong>Technologies: </strong> HTML, CSS, JavaScript, AI API
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
