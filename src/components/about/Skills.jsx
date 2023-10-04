import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "Wordpress" },
  { skillClass: "p40", skillPercent: "40", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p30", skillPercent: "30", skillName: "PHP" },
  { skillClass: "p10", skillPercent: "10", skillName: "REACT & NEXTJS" },
  { skillClass: "p20", skillPercent: "20", skillName: "JQUERY" },
  { skillClass: "p65", skillPercent: "65", skillName: "FIGMA" },
  { skillClass: "p45", skillPercent: "45", skillName: "LINUX SERVER" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
