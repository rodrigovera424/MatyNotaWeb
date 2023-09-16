import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const videoStyles = {
  width: '100%', // Ancho del componente
  aspectRatio: '16/9', // Relación de aspecto 16:9 para mantener la proporción original
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first'); // Estado para la pestaña activa

  // Función para cambiar la pestaña activa
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="project" id="project">
      <Container style={{ height: '120vh' }}>
        <Row style={{ height: '100%' }}>
          <Col size={12} style={{ display: 'flex', flexDirection: 'column' }}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Mi Musica </h2>
                  <p>Escucha algunas de mis canciones más populares aquí:</p>
                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={handleTabChange}
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">O2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Cupido</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Finde</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}
                      style={{ flex: '1' }}
                    >
                      <Tab.Pane eventKey="first">
                        {activeTab === 'first' && ( // Carga el iframe solo si la pestaña está activa
                          <Row style={{ height: '100%' }}>
                            <div className="project-card" style={videoStyles}>
                              <iframe
                                width="560" // Ancho original del video
                                height="315" // Altura original del video
                                src="https://www.youtube.com/embed/Q2aelxe07VQ"
                                frameBorder="0"
                                allowFullScreen
                                title="O2 Video"
                              ></iframe>
                            </div>
                          </Row>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {activeTab === 'second' && (
                          <Row style={{ height: '100%' }}>
                            <div className="project-card" style={videoStyles}>
                              <iframe
                                width="560" // Ancho original del video
                                height="315" // Altura original del video
                                src="https://www.youtube.com/embed/32xjnG0lHnY"
                                frameBorder="0"
                                allowFullScreen
                                title="Cupido Video"
                              ></iframe>
                            </div>
                          </Row>
                        )}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {activeTab === 'third' && (
                          <Row style={{ height: '100%' }}>
                            <div className="project-card" style={videoStyles}>
                              <iframe
                                width="560" // Ancho original del video
                                height="315" // Altura original del video
                                src="https://www.youtube.com/embed/2y6_wSRF3XQ"
                                frameBorder="0"
                                allowFullScreen
                                title="Finde Video"
                              ></iframe>
                            </div>
                          </Row>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* Agrega cualquier otro contenido necesario aquí */}
    </section>
  );
};
