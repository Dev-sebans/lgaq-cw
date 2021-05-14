import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Form: React.FC<any> = () => {
  return (
    <main>
      <section className="section section--dashboard">
        <Container>
          <Row>
            <Col>
              <h2 className="section__title">Add information</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="panel">
                <div className="panel__body">
                  <div className="panel__body-inner"></div>
                  <div className="panel__body-inner"></div>
                </div>
              </div>
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <Button variant="primary" href="/confirmation">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Form;
