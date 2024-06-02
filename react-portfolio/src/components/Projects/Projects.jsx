import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1Img from "../../assets/Projects/project1.png";
import project2Img from "../../assets/Projects/project2.png";
import project3Img from "../../assets/Projects/project3.png";
import project4Img from "../../assets/Projects/project4.png";
// import project5Img from "../../assets/Projects/project5.png";
// import project6Img from "../../assets/Projects/project6.png";
import '../../css/Projects.css'; // Assuming you'll add styles in a separate CSS file

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1Img}
              isBlog={false}
              title=" UCBL Internet Banking(Unet)"
              role="Backend Developer"

              description=" Developed new features for the project and solved produc
              tion issues."
              // ghLink="https://github.com/yourusername/project1"
              demoLink="https://project1-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2Img}
              isBlog={false}
              title="ABBL Internet Banking (ABDirect)"
              role="Backend Developer"

              description="Revamped the legacy project with brand new technologies."
              // ghLink="https://github.com/yourusername/project2"
              demoLink="https://project2-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3Img}
              isBlog={false}
              title="Medaid"
              // role="Frontend Developer"

              description=" Built With React, NodeJs, Express, MongoDB. Website where patients can input
              their symptoms and get doctor recommendations."
              ghLink="https://github.com/yourusername/project3"
              demoLink="https://project3-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4Img}
              isBlog={false}
              title=" Angry Spartan"
              // role="Frontend Developer"
              description="A C++SFML 2D Platformer Game. Multi-level game built without any frame
              works only using SFML library."
              ghLink="https://github.com/yourusername/project4"
              demoLink="https://project4-demo-link.com"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5Img}
              isBlog={false}
              title="Project 5"
              description="Description of project 5..."
              ghLink="https://github.com/yourusername/project5"
              demoLink="https://project5-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project6Img}
              isBlog={false}
              title="Project 6"
              description="Description of project 6..."
              ghLink="https://github.com/yourusername/project6"
              demoLink="https://project6-demo-link.com"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
