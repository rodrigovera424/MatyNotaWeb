import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Cantante Urbano", "Compositor", "Innovador de Sonidos Urbanos" ];
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner-content">
              <span className="tagline">:)</span>
              <h1>{`Maty Nota`} <span className="txt-rotate" dataPeriod="100" data-rotate='[ ":Cantante Urbano", ":Artista Multifacético", ":Innovador de Sonidos Urbanos" ]'><span className="wrap">{text}</span></span></h1>
              <div className="blurred-background">
                <p style={{ color: '#fff' }}>
                  ¡Hola a todos! Soy Maty Nota, un apasionado cantante y compositor de música urbana de Buenos Aires, Argentina. Mi música es una fusión de ritmos vibrantes y letras emotivas que cuentan
                  historias auténticas de la vida en la ciudad. Únete a mí en este emocionante viaje musical mientras exploramos las calles de Buenos Aires a través de mis canciones. ¡Bienvenidos a mi mundo musical!
                </p>
              </div>
              <button className="contact-button" onClick={() => console.log('connect')}>Contáctame! <ArrowRightCircle size={25} /></button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
