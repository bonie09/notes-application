import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./LandingPage.css";
import LottieDisplay from "../../Components/LottieDisplay/LottieDisplay";
import notesPerson from "../../assets/lottie/notesPerson";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
            <div className="lottieConatiner">
              <LottieDisplay lottieFile={notesPerson} />
            </div>
          </Col>
          <Col>
            <div className="intro-text">
              <div>
                <h1 className="title">Welcome to Notes Tracking Application</h1>
                <h3> Capture what's on your mind</h3>
                <p className="subtitle">
                  Quickly capture precious ideas when inspiration strikes in
                  Notes, add to-do lists and more.
                </p>
              </div>
              <div className="buttonContainer">
                <Link to="/login">
                  <Button size="lg" className="landingbutton">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="landingbutton"
                  >
                    Signup
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
