import React from "react";

const calculateAge = (birthYear) => {
  const currentYear = new Date().getFullYear();
  return `${currentYear - birthYear} Years`;
};

const personalInfoContent = [
  { meta: "Name", metaInfo: "Khairul Imran", hasColor: "" },
  { meta: "Age", metaInfo: calculateAge(1997), hasColor: "" },
  { meta: "Nationality", metaInfo: "Malaysia", hasColor: "" },
  { meta: "Employment", metaInfo: "Full Time", hasColor: "green" },
  { meta: "City", metaInfo: "Kota Bharu,Kelantan", hasColor: "" },
  { meta: "phone", metaInfo: "+6017-9789 587", hasColor: "" },
  { meta: "Email", metaInfo: "info@khairulimran.com", hasColor: "" },
  { meta: "Degree", metaInfo: " Web Technology", hasColor: "" },
  { meta: "Language", metaInfo: "Malay, English", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
