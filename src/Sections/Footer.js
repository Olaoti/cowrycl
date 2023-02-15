import React from "react";
import Reviews from "../Components/Reviews.js";
import Signup from "../Components/Signup.js";
import Footergrid from "../Components/Footergrid.js";
import Footeraddress from "../Components/Footeraddress.js";
import Footerterms from "../Components/Footerterms.js";

function Footer() {
  return (
    <div className="footer-section">
      <Reviews />
      <Signup />
      <Footergrid />
      <Footeraddress />
      <Footerterms />
    </div>
  );
}

export default Footer;
