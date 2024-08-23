import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaBriefcase } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterBelow = () => {
    return (
      <footer className="bg-dark text-white py-3" style={{ position: 'fixed', bottom: '0', width: '100%' }}>
      <Container>
        <Row className="text-center">
          <Col md="6" className="mb-3 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} Joy Pal & DEV Community</p>
          </Col>
          <Col md="6">
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/joy.pal.hazard" className="text-white mx-3">
                <FaFacebook size={24} />
              </a>
              <a href=" https://twitter.com/JoyPal_hazard" className="text-white mx-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/joy-pal-hazard/" className="text-white mx-3">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.github.com" className="text-white mx-3">
                <FaGithub size={24} />
              </a>
              <a href="https://joypal-hazard.web.app/" className="text-white mx-3">
                <FaBriefcase size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  };
  
  
export default FooterBelow