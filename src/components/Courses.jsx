import React from "react";
import CourseData from "../api/CourseData.json";
import SingleCourses from "./SingleCourses";

const Courses = () => {
  return (
    <section className="container py-5">
      <div className="row cont-head">
        <h3>All of Our Courses</h3>
      </div>
      <div className="row">
        {CourseData.map((curElem) => (
          <SingleCourses key={curElem.id} nwData={curElem} />
        ))}
      </div>
    </section>
  );
};

export default Courses;
