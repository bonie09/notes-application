import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import MainScreen from "../../Components/MainScreen/MainScreen";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import loginPerson from "../../assets/lottie/loginPerson";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Actions/userAction";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { error, userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  useEffect(() => {
    console.log(userInfo);
    if (userInfo) {
      navigate("/mynotes");
      console.log("UserInfo");
    }
  }, [navigate, userInfo]);

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
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
