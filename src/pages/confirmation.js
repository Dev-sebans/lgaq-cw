import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Confirmation: React.FC<any> = () => {
  return (
    <main>
        <section className="section section--dashboard">
      <Container>
      <Row>
            <Col>
              <h2 className="section__title">Confirmation</h2>
            </Col>
          </Row>
        <Row>
            <Col>
        <div className="panel panel--success">
        <div className="panel__header">
            <h5 className="panel__header-title">Cheque Issued</h5>
            </div>
              <div className="panel__body">
                <p className="panel__body-text">Pay to<strong>Name</strong></p>
              </div>
              <div className="panel__footer">
              <p className="panel__footer-text">Amount in words <strong>Amount in words</strong></p>
              </div>
            </div>
            </Col>
        </Row>{" "}
      </Container>
      </section>
    </main>
  );
};

export default Confirmation;
