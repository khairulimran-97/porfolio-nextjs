import React from "react";

const calculate = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return `${currentYear - birthYear}`;
};

const achievementsContent = [
  { title: calculate(2020), subTitle1: "years of", subTitle2: "experience" },
  { title: "25", subTitle1: "completed", subTitle2: "website" },
  { title: "50", subTitle1: "Mockup", subTitle2: "Design" },
  { title: "5", subTitle1: "Custom", subTitle2: "Plugin" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
