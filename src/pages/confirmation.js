import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../UserContext";

import { ToWords } from "to-words";

const Confirmation: React.FC<any> = () => {
  const userData = useContext(UserContext);

  const AmountNumber = parseInt(userData?.Amount);

  console.log(AmountNumber);

  const toWords = new ToWords({
    localeCode: "en-US",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    },
  });

  let AmountToWords = toWords.convert(AmountNumber, { currency: true });

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
                  <p className="panel__body-text">
                    Pay to<strong>{userData.FullName}</strong>
                  </p>
                </div>
                <div className="panel__footer">
                  <p className="panel__footer-text">
                    Amount in words <strong>{AmountToWords}</strong>
                  </p>
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
