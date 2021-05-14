import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import lgaq from "./assets/images/lgaq-logo.png";

const Footer: React.FC<any> = () => {
  return (
  <footer>
    <Container>
      <Row>
        <Col>
          <div className="foot-block">
            <Link to="https://www.lgaq.asn.au/" className="foot-block__logo">
              <img src={lgaq} alt="LGAQ Logo" />{" "}
            </Link>{" "}
            <p className="foot-block__copy">PoC by Sebastian</p>
          </div>{" "}
        </Col>{" "}
      </Row>{" "}
    </Container>
    </footer>
  );
};

export default Footer;
