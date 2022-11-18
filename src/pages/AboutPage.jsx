import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";
import "./aboutPage.css";

const AboutPage = () => {
  return (
    <section className="container about-page">
      <Card>
        <h2>About</h2>
        <p>This is an app to post feedbacks about any product or service</p>
        <Link to="/">
          <FaHome fontSize={24}></FaHome>
        </Link>
      </Card>
    </section>
  );
};

export default AboutPage;
