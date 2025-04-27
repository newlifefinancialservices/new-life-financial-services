import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Call, Email, ArrowForward } from "@mui/icons-material";
import Offcanvas from "react-bootstrap/Offcanvas";

export function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const handleSelect = () => {
    setExpanded(false);
  };

  return (
    <>
      <Container className="mb-5">
        <Navbar
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
          expand="lg"
          fixed="top"
          className="navbar-light shadow-sm rounded-bottom-5"
          style={{ backgroundColor: " #e3f2fd" }}
        >
          <Row className="d-flex justify-content-between align-items-center w-100">
            <Col
              className="ms-5 ps-5 d-flex align-items-center justify-content-center"
              xs="auto"
            >
              <Navbar.Brand href="/">
                <img
                  src="../images/logo.png" // Replace with the actual path to your logo
                  alt="New Life Financial Services Logo"
                  width="100"
                  height="120"
                  className="d-inline-block align-top me-2"
                />
              </Navbar.Brand>
            </Col>

            <Col xs="auto">
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Row xs="ms-auto" className="d-md-block d-none">
                <div className="me-5 pe-5 d-flex justify-content-end">
                  <Navbar.Text className="me-3 d-md-block d-none">
                    <strong>
                      Call Us
                      <ArrowForward fontSize="inherit" color="primary" />
                    </strong>
                    +1-780-263-1366 / 780-522-8181
                  </Navbar.Text>
                  <Navbar.Text>
                    <strong>
                      Email Us
                      <ArrowForward fontSize="inherit" color="primary" />
                    </strong>
                    admin@newlifefinancialservices.ca
                  </Navbar.Text>
                </div>
              </Row>
              <Row>
                <div className="ms-5 ps-5 d-flex justify-content-center align-items-center">
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    className="w-100 justify-content-end pe-5 me-5"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id="offcanvasNavbarLabel">
                        Menu
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav
                        onSelect={handleSelect}
                        className="fw-bold justify-content-end flex-grow-1 pe-3"
                      >
                        <Nav.Link as={Link} to={"/"}>
                          Home
                        </Nav.Link>
                        <NavDropdown title="Insurance" id="basic-nav-dropdown">
                          <NavDropdown.Item href="/LifeInsurance">
                            Life Insurance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/SuperVisaInsurance">
                            Super Visa Insurance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/MortgageInsurance">
                            Mortgage Insurance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/travelInsurance">
                            Travel Insurance
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/criticalIllnessInsurance">
                            Critical Illness Insurance
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/rrsp"}>
                          RRSP
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/resp"}>
                          RESP
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/AboutUs"}>
                          About us
                        </Nav.Link>
                        <Nav.Link as={Link} to={"/ContactUs"}>
                          Contact us
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </div>
              </Row>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </>
  );
}
