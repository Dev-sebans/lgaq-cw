import React, { useContext } from "react";
import { Container, Row, Col, Button, FormLabel } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaUser, FaDollarSign } from "react-icons/fa";
import { UserContext } from "../UserContext";

import { useHistory } from "react-router-dom";

const FormSection: React.FC<any> = () => {
  let history = useHistory();

  const userData = useContext(UserContext);

  console.log("Data from context", userData);

  function onSubmit(obj) {
    userData.FullName = obj.FullName;

    userData.Amount = obj.Amount;

    history.push("/confirmation");
  }

  const validationSchema = Yup.object().shape({
    FullName: Yup.string().required("Please enter Full Name"),
    Amount: Yup.string().required("Please enter Amount"),
  });

  const initialValues = {
    FullName: "",
    Amount: "",
  };

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
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={onSubmit}
                  >
                    {({
                      values,
                      errors,
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      setFieldValue,
                      touched,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <div className="col-5">
                            <FormLabel>Pay to</FormLabel>
                            <div className="form-input-block">
                              <FaUser size="20" />
                              <Field
                                className={`form-control ${
                                  errors.FullName && touched.FullName
                                    ? "is-invalid"
                                    : ""
                                }`}
                                type="text"
                                name="FullName"
                                id="FullName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.FullName}
                                placeholder="Pay to (Name of the Person)"
                              />

                              {errors.FullName && touched.FullName ? (
                                <div className="invalid-feedback">
                                  {errors.FullName}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="col-5">
                            <FormLabel>Amount in Figure</FormLabel>
                            <div className="form-input-block">
                              <FaDollarSign size="20" />
                              <Field
                                className={`form-control ${
                                  errors.Amount && touched.Amount
                                    ? "is-invalid"
                                    : ""
                                }`}
                                type="number"
                                name="Amount"
                                id="Amount"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Amount}
                                placeholder="Amount in Figure"
                              />
                              {errors.Amount && touched.Amount ? (
                                <div className="invalid-feedback">
                                  {errors.Amount}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>

                        <Col className="text-center mt-5">
                          <Button type="submit" variant="primary">
                            Submit
                          </Button>
                        </Col>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </Col>{" "}
          </Row>{" "}
        </Container>
      </section>
    </main>
  );
};

export default FormSection;
