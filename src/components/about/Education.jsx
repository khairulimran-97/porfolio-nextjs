import React from "react";

const educationContent = [
  {
    year: "2016 - 2020",
    degree: "BACHELOR DEGREE",
    institute: "UNIVERSITI TUN HUSSEIN ONN MALAYSIA",
    details: `I'm diving into the programming world, learning HTML, CSS, C#, Java, PHP, and more at UTHM for a Computer Science degree in Web Technology. The excitement? A final year project—creating an app with Android Studio. It all started with a challenge, and now I'm hooked on programming!`,
  },
  {
    year: "2015 - 2016",
    degree: "MATRICULATION ",
    institute: "PENANG MATRICULATION COLLEGE",
    details: `I kicked off my journey by enrolling in a one-year matriculation program at Penang Matriculation College (KMPP). Little did I know, this was the gateway to my first encounter with computer science, diving into the world of C++. The result? A newfound passion for programming sparked during that transformative year of learning.`,
  }, 

];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
