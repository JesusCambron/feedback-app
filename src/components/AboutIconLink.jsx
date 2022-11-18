import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <section className="container about">
      {/* <a href="/about">
        <FaQuestion size={30} />
      </a> */}
      <Link to={{ pathname: "/about" }}>
        <FaQuestion fontSize={24} />
      </Link>
    </section>
  );
};

export default AboutIconLink;
