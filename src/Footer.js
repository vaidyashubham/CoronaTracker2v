import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="lab_social_icon_footer">
      <hr />
      <div className="text-center center-block">
        &copy; 2020 Copyright:{" "}
        <a
          href="https://shubhamvaidya.netlify.app"
          className="profile-link"
        >
          Shubham Vaidya
        </a>
        <span> v2.0.0</span>
      </div>
    </section>
  );
};

export default Footer;
