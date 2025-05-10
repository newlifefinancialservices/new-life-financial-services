import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    <div className="text-start container mt-3 lh-lg">
      <hr />
      <div className="row bg-light p-4 rounded bg-dark text-white">
        <br />
        <div className="col-md-4 text-start">
          <h6 className="text-warning">Contact:</h6>
          <hr></hr>
          9868A 33AVE NW <br />
          Edmonton <br />
          Alberta
          <br />
          T6N 1C6
          <br />
          <b>Phone:</b>
          +1-780-263-1366 / 780-522-8181
          {/* <Nav.Link as={Link} to={"/ContactUs"}>
            Contact us
          </Nav.Link> */}
        </div>

        <div className="col-md-4">
          <h6 className="text-warning">Insurance:</h6>
          <hr />

          <Link
            className="d-flex text-white text-decoration-none"
            to="/LifeInsurance"
          >
            Life Insurance
          </Link>
          <Link
            className="d-flex text-white text-decoration-none"
            to="/SuperVisaInsurance"
          >
            Super Visa Insurance
          </Link>
          <Link
            className="d-flex text-white text-decoration-none"
            to="/MortgageInsurance"
          >
            Mortgage Insurance
          </Link>
          <Link
            className="d-flex text-white text-decoration-none"
            to="/TravelInsurance"
          >
            Travel Insurance
          </Link>
          <Link
            className="d-flex text-white text-decoration-none"
            to="/CriticalIllnessInsurance"
          >
            Critical Illness Insurance
          </Link>
          <Link
            className="d-flex text-white text-decoration-none"
            to="/disabilityInsurance"
          >
            Disability Insurance
          </Link>
          <h6 className="mt-5 text-warning">Investement:</h6>
          <hr />
          <Link className="d-flex text-white text-decoration-none" to="/rrsp">
            Registered Retirement Savings Plan
          </Link>
          <Link className="d-flex text-white text-decoration-none" to="/rsep">
            Registered Education Savings Plan
          </Link>
        </div>
        <div className="col-md-4">
          <h6 className="text-warning">Follow us:</h6>
          <hr></hr>

          <IconButton href="£" target="_blank">
            <Facebook fontSize="large" color="primary" />
          </IconButton>
          <IconButton href="£" target="_blank">
            <Instagram fontSize="large" color="primary" />
          </IconButton>
          <IconButton href="£" target="_blank">
            <Twitter fontSize="large" color="primary" />
          </IconButton>
          <IconButton href="£" target="_blank">
            <YouTube fontSize="large" color="primary" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
