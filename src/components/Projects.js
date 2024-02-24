import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2024-02-08 232354.png";
import projImg2 from "../assets/img/web 2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/web3.png";
import projImg5 from "../assets/img/web4.png";
import projImg6 from "../assets/img/web5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup 1 blogs-laravel ",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://github.com/mosayed4/blogs-laravel",
    },

    {
      link: "https://mosayed4.github.io/AmitFront-end/",
      title: "Business  for front-end  2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      link: "https://mosayed4.github.io/crud/",
      title: "Business CRUD  3",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      link: "https://mosayed4.github.io/new-to-do/",
      title: " Do to List ",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      link: "https://mosayed4.github.io/hangman/",
      title: "hangman Game ",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      link: "#",
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Hi there! I'm a passionate developer with a knack for
                    building front-end . My latest project is AmitFront app ,
                    for E-commerce website Driven by , I utilized React to
                    create a user-friendly and engaging interface. On the
                    backend, I leveraged php laravel to ensure smooth data
                    handling and performance.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
