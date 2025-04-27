import React, { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  Home,
  Security,
  HealthAndSafety,
  Accessibility,
  Work,
  Flight,
  Groups,
} from "@mui/icons-material"; // Import MUI icons
import "./home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const cardData = [
    {
      title: "Life Insurance",
      description:
        "Get lowest life insurance quotes from New Life Financial Services Ltd.. We will provide you customized policies as per your requirements.",
      icon: <Security fontSize="large" color="primary" />, // MUI Icon
      link: "/LifeInsurance",
    },
    {
      title: "SuperVisa Insurance",
      description:
        "Compare and save using our quick online comparison tool for super visa insurance. Click here to compare the rates",
      icon: <Home fontSize="large" color="primary" />, // MUI Icon
      link: "/SuperVisaInsurance",
    },
    {
      title: "Critical Illness Insurance",
      description:
        "Critical illness insurance provides a lump-sum benefit to help support you financially...",
      icon: <HealthAndSafety fontSize="large" color="primary" />, // MUI Icon
      link: "/CriticalIllnessInsurance",
    },
    {
      title: "RESP",
      description:
        "RESP is a tax-deferred savings account designed for Canadians to save for qualified post-secondary education expenses for eligible students.",
      icon: <Accessibility fontSize="large" color="primary" />, // MUI Icon
      link: "/resp",
    },
    {
      title: "RRSP",
      description:
        "RRSP is an excellent tool for retirement planning. It’s a tax-advantaged account that grows, tax-free, until you retire.",
      icon: <Work fontSize="large" color="primary" />, // MUI Icon
      link: "/rrsp",
    },
    {
      title: "Mortgage Insurance",
      description:
        "Mortgage Insurance is that life insurance in which you can cover your mortgage in the major event of your death.",
      icon: <Work fontSize="large" color="primary" />, // MUI Icon
      link: "/MortgageInsurance",
    },
    {
      title: "Travel Insurance",
      description:
        "A Travel Insurance Plan can protect and cover you against medical and other financial emergencies that may occur during your travel.",
      icon: <Flight fontSize="large" color="primary" />, // MUI Icon
      link: "/TravelInsurance",
    },
    {
      title: "Visitor Insurance",
      description:
        "At New Life Fainancial Services you get guaranteed Lowest Rate Comparison for the Canadian Visitor Insurance.",
      icon: <Groups fontSize="large" color="primary" />, // MUI Icon
      link: "/VisitorInsurance",
    },
  ];

  return (
    <>
      {/* Hero Section with Banner */}
      <div
        className="banner"
        style={{
          backgroundImage: "url('../images/banner-financial.png')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="h-100">
          <div className="row h-100 align-items-center">
            {/* Text Card on the Left */}
            <div className="col-md-4 ms-auto">
              <div
                className="p-5 m-5 bg-light shadow rounded text-start"
                style={{ opacity: 0.7 }}
              >
                <h2 className="text-primary">
                  <strong>
                    Welcome to <br />
                    New Life Financial Services
                  </strong>
                </h2>
                <br />
                <br />
                <p>
                  Protect your loved ones with our customized insurance
                  policies. We provide a wide range of financial services
                  tailored to your needs.
                  <br />
                  <br />
                  <Link className="btn btn-primary hover" to="/AboutUs">
                    Get to Know Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-start container mt-3">
        <h1 className="text-primary">Our Services</h1>
        <div className="row mt-5">
          {cardData.map((card, index) => (
            <div
              className="col-md-3 mb-4 card-container"
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  ":hover": {
                    boxShadow: 20,
                    border: "1px solid #1976d2",
                  },
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  {card.icon}
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
                <div className="d-flex justify-content-center mb-3">
                  <Link className="btn btn-primary hover" to={card.link}>
                    Learn More
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
