import React from "react";
import { Link } from "react-router-dom";
const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: " New York, USA."
  },
  {
    iconName: "icofont-phone",
    text: " +880 123 456 789"
  },
  {
    iconName: "icofont-envelope",
    text: " info@shopcart.com"
  }
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook"
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter"
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin"
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram"
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest"
  }
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop"
  },
  {
    text: "Shop",
    link: "/shop"
  },
  {
    text: "Blog",
    link: "/blog"
  },
  {
    text: "About",
    link: "/about"
  },
  {
    text: "Policy",
    link: "#"
  },
  {
    text: "FAQs",
    link: "/about"
  }
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "#"
  },
  {
    text: "Events",
    link: "#"
  },
  {
    text: "Gallery",
    link: "#"
  },
  {
    text: "Forums",
    link: "#"
  },
  {
    text: "Privacy Policy",
    link: "#"
  },
  {
    text: "Terms of Use",
    link: "#"
  }
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Aminur islam <a href="#">@ShopCart Greetings! #HTML_Template</a> Grab
        your item, 50% Big Sale Offer !!
      </p>
    )
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your
        item, 50% Big Sale Offer !!
      </p>
    )
  }
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#"
  },
  {
    text: "Staff",
    link: "#"
  },
  {
    text: "Students",
    link: "#"
  },
  {
    text: "Alumni",
    link: "#"
  }
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb ">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            {/* col */}
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>
                        {title}
                      </h4>
                    </div>
                    <div className="content">
                      <p>
                        {desc}
                      </p>
                      <ul className="lab-ul office-address">
                        {addressList.map((value, index) =>
                          <li key={index}>
                            <i className={value.iconName}>
                              {value.text}
                            </i>
                          </li>
                        )}
                      </ul>

                      {/* social */}
                      <ul className="lab-ul social-icons">
                        {socialList.map((val, index) =>
                          <li key={index}>
                            <a href="#" className={val.className}>
                              <i className={val.iconName}>
                                {val.text}
                              </i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col */}
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>
                        {quickTitle}
                      </h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((value, index) =>
                          <li key={index}>
                            <a href="#">
                              {value.text}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col */}
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>
                        {ItemTitle}
                      </h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {ItemList.map((value, index) =>
                          <li key={index}>
                            <a href="#">
                              {value.text}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col */}
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>
                        {tweetTitle}
                      </h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((value, index) =>
                          <li key={index}>
                            <i className={value.iconName} />
                            {value.desc}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}

      <p className="text-center p-3" style={{ backgroundColor: "yellow", color:"black" }}>
          &copy; 2024 React Js Ecommerce Project Designed by{" "}
          <Link to="https://wenareebainnocent.com">Wandie Innocent</Link>
     
      </p>
      
    
    </footer>
  );
};

export default Footer;
