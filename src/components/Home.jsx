import React from "react";
import { Link } from "react-router-dom";
import SingleCourses from "./SingleCourses";
import CourseData from "../api/CourseData.json";

const Home = () => {
  const topThreeCourses = CourseData.slice(0, 6);
  return (
    <>
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1>Welcome to Our Learning Platform</h1>
          <p className="lead">
            Empowering you with knowledge and skills for the future.
          </p>
          <Link to="/courses" className="btn btn-light mt-3">
            Explore Courses
          </Link>
        </div>
      </div>

      <div className="py-5 bg-light" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="./Images/cardNew.webp"
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                We are committed to providing high-quality education and
                practical learning through our expertly designed online courses.
                Join a community of learners and start your journey today.
              </p>
              <Link to="/about" className="btn btn-primary mt-2">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5" id="courses">
        <div className="container">
          <h2 className="text-center mb-4">Our Popular Courses</h2>
          <div className="row">
            {topThreeCourses.map((curElem) => (
              <SingleCourses key={curElem.id} nwData={curElem} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-5 bg-light" id="wordcounter">
        <div className="container text-center">
          <h2 className="mb-4">Word Counter Tool</h2>
          <p className="mb-3">
            Try our simple online word counter tool to count your text length &
            many other things in real-time.
          </p>
          <Link to="/word-counter" className="btn btn-success btn-lg">
            Try Word Counter
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
