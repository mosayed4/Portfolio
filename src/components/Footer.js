import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/accelerate-svgrepo-com (2).svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-sayed02m">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/mohmmaed.sayed?mibextid=2JQ9oc">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/zp_rg">
                <img src={navIcon3} alt="Icon" />
              </a>

              <a href="https://github.com/mosayed4">
                <FaGithub color="white" />
              </a>
            </div>
            <p> Copyright 2024. Mohammed Sayed All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
