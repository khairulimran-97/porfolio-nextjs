import React, { useState, useEffect } from "react";

const Address = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://cp.khairulimran.com/wp-json/acf/v3/options/options");
        const data = await response.json();
        setContactInfo(data.acf.details_contact);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs only once, similar to componentDidMount

  return (
    <>
      {contactInfo && (
        <>
          <p className="open-sans-font custom-span-contact position-relative">
            <i className="fa fa-map position-absolute"></i>
            <span className="d-block">Address Point</span>
            {contactInfo.addrress}
          </p>
          {/* End .custom-span-contact */}

          <p className="open-sans-font custom-span-contact position-relative">
            <i className="fa fa-envelope-open position-absolute"></i>
            <span className="d-block">mail me</span>{" "}
            <a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a>
          </p>
          {/* End .custom-span-contact */}

          <p className="open-sans-font custom-span-contact position-relative">
            <i className="fa fa-phone-square position-absolute"></i>
            <span className="d-block">call me</span>{" "}
            <a href={`tel:${contactInfo.phone_no}`}>{contactInfo.phone_no}</a>
          </p>
          {/* End .custom-span-contact */}
        </>
      )}
    </>
  );
};

export default Address;
