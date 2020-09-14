import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import LogoWhiteTwittor from "../../assests/png/logo-white.png";
import LogoTwittor from "../../assests/png/logo.png";
import "./SignInSignUp.scss";

export default function SignInsignUp() {
  return (
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RightComponent />
      </Row>
    </Container>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={LogoTwittor} alt="Twittor" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Entérate de que está hablando la gente
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Únete a la conversación
        </h2>
      </div>
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhiteTwittor} alt="Twittor" />
        <h2> Mira lo que está pasando en el mundo en este momento</h2>
        <h3> Únete a Twittor hoy mismo</h3>
        <Button variant="primary">Regístrate</Button>
        <Button variant="outline-primary">Iniciar Sesión</Button>
      </div>
    </Col>
  );
}
