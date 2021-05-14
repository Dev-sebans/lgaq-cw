import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import cheque from "./assets/images/cheque.svg";

const Header: React.FC<any> = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__img">
                  {" "}
                  CWa 
                </span>{" "}
                <img src={cheque} alt="Logo" />{" "}
              </Link>{" "}
            </div>{" "}
          </Col>{" "}
          <Col>
            {" "}
            <ul className="navbar d-flex justify-content-end">
              <li>
                <Link to="/" className="navbar__link">
                  {" "}
                  Profile{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/" className="navbar__link">
                  {" "}
                  Logout{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>{" "}
    </header>
  );
};

export default Header;
