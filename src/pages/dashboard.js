import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Dashboard: React.FC<any> = () => {
  return (
    <main>
      <section className="section section--dashboard">
        <Container>
          <Row>
            <Col>
              <h2 className="section__title">Dashboard</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="panel">
                <div className="panel__body">
                  <p>Currently no records added. Click on the button below.</p>
                </div>
              </div>
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <Button variant="primary" href="/form">
                Issue Cheque
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Dashboard;
