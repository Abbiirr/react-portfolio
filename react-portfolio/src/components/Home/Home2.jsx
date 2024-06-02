import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import '../../css/Home2.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Home2() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    //your code
    
    navigate("/projects")
  }

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="home-about-description">
            <h1 className="home-about-title">
              Hi, I'm <span className="highlight">Abir Hossain</span>
            </h1>
            <p className="home-about-body">
              I'm a passionate developer with experience in building web applications using
              <i>
                <b className="highlight"> C++, Javascript, and Java.</b>
              </i>
              <br /><br />
              I specialize in creating modern web technologies and products, with a keen interest in
              <i>
                <b className="highlight"> Game Development, AI and Distributed Systems.</b>
              </i>
              <br /><br />
              I love working with <b className="highlight">Java Spring, Node.js</b> and modern JavaScript frameworks like
              <i>
                <b className="highlight"> React.js</b>
              </i>
              <br /><br />
              Feel free to explore my work and connect with me on social media.
            </p>
            
          <Button className="explore-button" onClick={handleSubmit}>
            Explore My Work
          </Button>
          </Col>
          <Col md={6} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="home-about-social">
          <Col className="text-center">
            <h2 className="social-title">Connect with me</h2>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abbiirr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abir-hossain-b6717b214/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* Add more social links here if needed */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
