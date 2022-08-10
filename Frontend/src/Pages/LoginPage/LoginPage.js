import React from "react";
import "./LoginPage.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen/MainScreen";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import loginPerson from "../../assets/lottie/loginPerson";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <MainScreen MainScreen title="LOGIN">
        <Row>
          <Col>
            <div className="lottieConatiner">
              <LottieDisplay lottieFile={loginPerson} />
            </div>
          </Col>
          <Col>
            <div className="loginContainer">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              New Customer ?<Link to="/register">Register Here</Link>
            </div>
          </Col>
        </Row>
      </MainScreen>
    </Container>
  );
};

export default LoginPage;
