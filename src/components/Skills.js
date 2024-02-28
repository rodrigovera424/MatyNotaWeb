import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import spotify from '../assets/img/spotify.svg';
import tiktok from '../assets/img/tiktok.svg';
import youtube from '../assets/img/youtube.svg';
import instagram from '../assets/img/instagram.svg';

export const Skills = () => {
  // Configuración del carrusel responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Estilo para los íconos
  const iconStyle = {
    width: '70px',
    height: '70px',
  };

  // Estilo para la sección con imagen de fondo
  const sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/redes.png)`, // Ruta de la imagen de fondo
    backgroundSize: 'cover', // Ajusta según tus preferencias
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="social-media" id="social-media" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="social-media-bx wow zoomIn text-center">
              <h2 className="mb-4">Social Media</h2>
              <p>¡Sígueme en mis redes sociales para estar al tanto de mis novedades musicales!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme social-media-slider">
                <div className="item">
                  <a href="https://open.spotify.com/intl-es/artist/7E0ndjejSGmN5FaktqsqEG?si=KBQOcxLdSFinBmLDecBXfA&nd=1" target="_blank" rel="noopener noreferrer">
                    <img src={spotify} alt="spotify" style={iconStyle} />
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.tiktok.com/@maty_nota" target="_blank" rel="noopener noreferrer">
                    <img src={tiktok} alt="TikTok" style={iconStyle} />
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.youtube.com/channel/UCR6kMjn3oLhmbhP5sqZuAhw" target="_blank" rel="noopener noreferrer">
                    <img src={youtube} alt="YouTube" style={iconStyle} />
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.instagram.com/maty_nota/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" style={iconStyle} />
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
