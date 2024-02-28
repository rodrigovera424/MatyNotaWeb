import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/header-img.svg';
import navIcon1 from '../assets/img/1tik.svg';
import navIcon2 from '../assets/img/1inst.svg';
import navIcon3 from '../assets/img/1spot.svg';

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
              {/* Agrega el atributo target="_blank" para abrir en una nueva pestaña */}
              <a href="https://www.tiktok.com/@maty_nota" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://www.instagram.com/maty_nota" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://open.spotify.com/intl-es/artist/7E0ndjejSGmN5FaktqsqEG" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>contacto:https://www.instagram.com/ceromprint/</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
