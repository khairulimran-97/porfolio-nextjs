import React from "react";

const experienceContent = [
  {
    year: "DEC 2020 - Present",
    position: "JUNIOR WEB DESIGNER",
    compnayName: "LOCAL COMPANY IN KOTA BHARU",
    details: `The genesis of my career led me to the captivating realm of web design, where I found my calling in offering expert assistance and maintenance for WordPress websites. It was during this chapter that my comprehension of WordPress deepened, allowing me to weave my creativity into a myriad of website designs that consistently brought joy to our satisfied clientele.`,
  },
  {
    year: "JUN 2020 - OKT 2020",
    position: " IT ASSISTANT",
    compnayName: "RICH JEWELLERY",
    details: `Immersed in the world of gold jewelry business, I absorbed fresh insights into the intricate market dynamics of gold. Surprisingly, amidst the gleaming gold, I embarked on my maiden voyage into the realm of WordPress. It was here that I not only encountered WordPress for the first time but also flexed my newfound skills to construct my inaugural ecommerce website, powered by the dynamic duo of WordPress and WooCommerce.`,
  },
  {
    year: "JAN 2020 - APRIL 2020",
    position: "IT ASSISTANT",
    compnayName: "FUEL RICH SDN BHD",
    details: `Venturing into the exciting realm of digital marketing, my aim is to absorb knowledge like a sponge and gather a treasure trove of new experiences. In this endeavor, I'm gearing up to wear multiple hats—from crafting a stellar website for the company to designing eye-catching posters. But that's not all—I'll also be diving into the intricacies of stock management, ensuring smooth operations in this dynamic digital landscape. Exciting times ahead!`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
