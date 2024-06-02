import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import '../../css/AboutCard.css'; // Assuming you'll add styles in a separate CSS file

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abir Hossain </span>
            from <span className="purple">Dhaka, Bangladesh.</span>
            <br />
            I am currently employed as an Associate Software Engineer at Brain Station 23.
            <br />
            I am pursuing my studies in Software Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "var(--primary-color)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abir Hossain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
