import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-5 bg-white">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="./Images/cardNew.webp"
            alt="About Us Image"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>About Us</h2>
          <p className="text-muted">
            We are a passionate team dedicated to creating high-quality digital
            experiences. With years of experience and a love for innovation, we
            bring your ideas to life with powerful design and clean code.
          </p>
          <p>
            Our mission is to deliver user-friendly, responsive, and impactful
            websites that meet your needs and exceed expectations. Whether
            you’re a startup or a growing business, we’re here to help you stand
            out.
          </p>
          <Link to="/courses" className="btn btn-primary mt-3">
            Our Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
