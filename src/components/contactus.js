import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { LocationOn, Call, Email } from "@mui/icons-material";
import { Input } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import emailjs from "@emailjs/browser";
import PrivacyPolicy from "./PrivacyPolicy"; // Import the PrivacyPolicy component

export default function ContactUs() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  emailjs.init("Hflw6eMkt3sXHnTQb");

  const submitFn = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    const serviceId = "service_45d0mun";
    const templateId = "template_4wqy62c";

    console.log(formData);
    emailjs
      .send(serviceId, templateId, formData)
      .then((response) => console.log(response))
      .then((error) => console.log(error));
  };

  const chngFn = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="text-start container mt-3">
      <img
        src="../images/contact-us-header.jpg"
        alt="Contact Us"
        className="img-fluid mb-4"
        style={{ width: "100%", height: "700px" }}
      />
      <h1>Contact Us</h1>
      <div className="row align-items-center mt-2 p-2 rounded">
        <Container>
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-xl-7">
                <div className="row row-cols-md-2 g-4">
                  <div
                    className="aos-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="aos-item__inner">
                      <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                        <div className="d-flex justify-content-start">
                          <Email fontSize="medium" className="me-3" />

                          <span className="h5">Email</span>
                        </div>
                        <span>admin@newlifefinancialservices.ca</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="aos-item"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="aos-item__inner">
                      <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                        <div className="d-flex justify-content-start">
                          <Call fontSize="medium" className="me-3" />
                          <span className="h5">Phone</span>
                        </div>
                        <span>+1-780-245-0500 , 780-522-8181</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="aos-item mt-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3 rounded">
                      <div className="d-flex justify-content-start">
                        <LocationOn fontSize="medium" className="me-3" />
                        <span className="h5">Office location</span>
                      </div>
                      <span># 9868A 33AVE NW, EDMONTON, AB T6N 1C6</span>
                    </div>
                  </div>
                </div>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <div className="mt-4 w-100 aos-item__inner">
                    <iframe
                      className="hvr-shadow rounded"
                      width="100%"
                      height="345"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.1333657770647!2d-113.48650812273038!3d53.46607657232429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f29c6bbbfd5%3A0xffb16bce23e71b13!2s9868A%2033%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6N%201C6!5e0!3m2!1sen!2sca!4v1745443526803!5m2!1sen!2sca"
                    >
                      <a href="https://www.maps.ie/distance-area-calculator.html">
                        measure acres/hectares on map
                      </a>
                    </iframe>
                  </div>
                </div>
              </div>

              <div className="col-xl-5">
                <h2 className="pb-4">Leave a message</h2>

                <Row className="justify-content-md-center">
                  <Col>
                    <Form noValidate validated={validated} onSubmit={submitFn}>
                      <Form.Group controlId="formName">
                        <Form.Label className="mt-2">Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={chngFn}
                          pattern="^[A-Za-z\s]+$"
                          required
                          isInvalid={
                            validated && !/^[A-Za-z\s]+$/.test(formData.name)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid name.
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formPhone">
                        <Form.Label className="mt-2">Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={chngFn}
                          pattern="^\d{10}$"
                          required
                          isInvalid={
                            validated && !/^\d{10}$/.test(formData.phone)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid 10-digit phone number
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formEmail">
                        <Form.Label className="mt-2">Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={chngFn}
                          required
                          isInvalid={
                            validated && !/^\S+@\S+\.\S+$/.test(formData.email)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid email address
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formMessage">
                        <Form.Label className="mt-2">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Enter your message"
                          value={formData.message}
                          onChange={chngFn}
                          pattern="^[a-zA-Z0-9\s]+$"
                          required
                          isInvalid={
                            validated &&
                            !/^[a-zA-Z0-9 ]+$/.test(formData.message)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a message
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formCheckbox" className="mt-2">
                        <Form.Check
                          type="checkbox"
                          name="policy"
                          required
                          label={
                            <>
                              By checking this box, I consent to receive
                              transactional messages related to my account,
                              orders, or services I have requested. These
                              messages may include appointments, confirmations,
                              updates, and other important information. I
                              understand that I can withdraw my consent at any
                              time by contacting New Life Financial Services at
                              reminders, order confirmations, and account
                              notifications amond others. Message frequency may
                              vary may vary. Message & data rate may apply.
                              Reply HELP for help or STOP to opt-outs.
                            </>
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formCheckbox" className="mt-2">
                        <Form.Check
                          type="checkbox"
                          name="policy"
                          required
                          label={
                            <>
                              By checking this box, I consent to receive
                              marketing and promotional messages, including
                              special offers, discounts, new product updates
                              among others. Message frequency may vary may vary.
                              Message & data rate may apply. Reply HELP for help
                              or STOP to opt-outs.
                            </>
                          }
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit" className="mt-3">
                        Submit
                      </Button>
                      <hr></hr>
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowPrivacyPolicy(true)}
                      >
                        Privacy Policy
                      </span>
                    </Form>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        show={showPrivacyPolicy}
        onHide={() => setShowPrivacyPolicy(false)}
        centered
        scrollable
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PrivacyPolicy />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowPrivacyPolicy(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
