import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { NavigationBar } from "./components/navigationBar";
import { AppBar, CssBaseline } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import AboutUs from "./components/aboutus";
import LifeInsurance from "./components/life-insurance";
import SuperVisaInsurance from "./components/supervisa-insurance";
import CriticalIllnessInsurance from "./components/critical-illness-insurance";
import TravelInsurance from "./components/travel-insurance";
import MortgageInsurance from "./components/mortgage-insurance";
import React, { useLayoutEffect } from "react";
import RRSP from "./components/rrsp";
import RESP from "./components/resp";
import DisabilityInsurance from "./components/disability-insurance";
import PrivacyPolicy from "./components/PrivacyPolicy";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Wrapper>
          <NavigationBar />
          {/* Add a wrapper div with padding-top to account for the navbar */}
          <div style={{ paddingTop: "80px" }}>
            {" "}
            {/* Adjust the value based on your navbar height */}
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/contactus" element={<ContactUs />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/lifeinsurance" element={<LifeInsurance />} />
              <Route
                exact
                path="/supervisainsurance"
                element={<SuperVisaInsurance />}
              />
              <Route
                exact
                path="/criticalillnessinsurance"
                element={<CriticalIllnessInsurance />}
              />
              <Route
                exact
                path="/travelinsurance"
                element={<TravelInsurance />}
              />
              <Route
                exact
                path="/mortgageinsurance"
                element={<MortgageInsurance />}
              />
              <Route
                exact
                path="/disabilityinsurance"
                element={<DisabilityInsurance />}
              />
              <Route exact path="/rrsp" element={<RRSP />} />
              <Route exact path="/resp" element={<RESP />} />
              <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
