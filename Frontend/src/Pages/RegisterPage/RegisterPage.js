import React from "react";
import MainScreen from "../../Components/MainScreen/MainScreen";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import registerPerson from "../../assets/lottie/registerPerson";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container>
      <MainScreen MainScreen title="SIGN UP">
        <Row>
          <Col>
            <div className="lottieConatiner">
              <LottieDisplay lottieFile={registerPerson} />
            </div>
          </Col>
          <Col>
            <div className="registerContainer">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your full name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label> Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pic">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control type="file" label="Upload Profile Picture" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              Have an Account ?<Link to="/login">Login Here</Link>
            </div>
          </Col>
        </Row>
      </MainScreen>
    </Container>
  );
};

export default RegisterPage;
