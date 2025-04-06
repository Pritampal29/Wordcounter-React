import React from "react";

const SingleCourses = (props) => {
  const {
    coursename,
    description,
    class_time,
    duration,
    amount_in_inr,
    image,
  } = props.nwData;

  const crsClr = amount_in_inr >= 50000 ? "badge-violet" : "badge-green";
  return (
    <div className="col-md-4 py-4">
      <div className="card">
        <span className={`badge ${crsClr}`}>₹ {amount_in_inr}</span>
        <h2 className="title">{coursename}</h2>
        <p className="description">{description}</p>
        <p className="class-time">
          {class_time.join(", ")}
          {/* {Array.isArray(class_time) ? class_time.join(", ") : class_time} */}
        </p>
        <div className="stats">
          <div className="stat">
            <img className="w-100" src={image} alt={coursename} />
          </div>
          <div className="stat">
            <div className="stat-value">{duration}</div>
            <div className="stat-label">Duration</div>
          </div>
          <div className="stat">
            <div className="stat-value">₹ {amount_in_inr}</div>
            <div className="stat-label">Course Fee</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourses;
