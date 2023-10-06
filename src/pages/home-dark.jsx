import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Blog from "../components/blog/Blog";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  //{ icon: "fa-comments", menuName: "Blog" },
  { icon: "fa-external-link", menuName: "Blog", externalLink: "https://thedailyinfowp.com" },
];

const HomeDark = () => {
  const [contactDescription, setContactDescription] = useState(null);
  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);
  useEffect(() => {
    const fetchContactDescription = async () => {
      try {
        const response = await fetch("https://cp.khairulimran.com/wp-json/acf/v3/options/options");
        const data = await response.json();
        setContactDescription(data.acf.description);
      } catch (error) {
        console.error("Error fetching contact description:", error);
      }
    };

    fetchContactDescription();
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Home Dark"} />

      <div className="yellow">
        <SwitchDark />
        {/* End Switcher */}
        <Tabs>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i} onClick={() => handleExternalLink(item.externalLink)}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>
          {/* End Menu Content */}

          <div className="tab-panel_list">
            {/* Hero Content Starts */}
            <TabPanel className="home">
              <div
                className="container-fluid main-container container-home p-0 g-0"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </div>
            </TabPanel>
            {/* Hero Content Ends */}

            {/* About Content Starts */}
            <TabPanel className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-start text-sm-center">
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className="title-bg">Resume</span>
                </div>
                {/* End title */}
                <AboutMain />
              </div>
            </TabPanel>
            {/* About Content Ends */}

            {/* Portfolio Content Starts */}
            <TabPanel className="portfolio professional">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
              </div>
              {/* End title */}
              <Portfolio />
            </TabPanel>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <TabPanel className="contact">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  {/*  Left Side Starts */}
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      {contactDescription && contactDescription.heading}
                    </h3>
                    <p className="open-sans-font mb-4">
                    {contactDescription && contactDescription.simple_description}
                    </p>
                    <Address />
                    {/* End Address */}

                    <Social />
                    {/* End Social */}
                  </div>
                  {/* Left Side Ends */}

                  {/*  Contact Form Starts  */}
                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
              {/* End .container */}
            </TabPanel>
            {/* Contact Content Ends */}

            {/* Blog Content Starts */}
            
            <TabPanel className="blog">
              <div
                className="title-section text-start text-sm-center "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>blog</span>
                </h1>
                <span className="title-bg">posts</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {/*  Articles Starts  */}
                <div className="row pb-50">
                  <Blog />
                </div>
                {/* Articles Ends */}
              </div>
            </TabPanel>

            {/* Blog Content Ends */}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

const handleExternalLink = (externalLink) => {
  if (externalLink) {
    window.location.href = externalLink;
  }
};



export default HomeDark;
