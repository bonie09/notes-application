import React, { useEffect } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Actions/userAction";

const Header = ({ setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {userInfo ? (
          <Navbar.Brand>
            <Link id="RouterNavLink" as={Link} to="/mynotes">
              Notes Tracking
            </Link>
          </Navbar.Brand>
        ) : (
          <Navbar.Brand>
            <Link id="RouterNavLink" as={Link} to="/">
              Notes Tracking
            </Link>
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="navbarScroll" />
        {userInfo ? (
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            </Nav>
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link id="RouterNavLink" as={Link} to="/mynotes">
                  Home
                </Link>
              </Nav.Link>
              <NavDropdown title={userInfo.name} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        ) : (
          <></>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
