import React from "react";

function Footergrid() {
  return (
    <div className="footergrid">
      <div className="footergrid__item">
        <div className="head">Company</div>
        <ul>
          <li>About Us</li>
          <li>Press</li>
          <li>Careers</li>
          <li>Ambassadors</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footergrid__item">
        <div className="head">Product</div>
        <ul>
          <li>Saving Plans</li>
          <li>Investment Plans</li>
          <li>Mutual Funds</li>
          <li>Stash</li>
          <li>Embed API</li>
          <li>Sprout</li>
          <li>Circles</li>
          <li>Halal</li>
          <li>Got a suggestion?</li>
        </ul>
      </div>
      <div className="footergrid__item">
        <div className="head">Resources</div>
        <ul>
          <li>Customer Stories</li>
          <li>Media</li>
          <li>FAQs</li>
          <li>Security</li>
          <li>Estimate your Interest</li>
          <li>Plan Education</li>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="footergrid__item">
        <div className="head">Contact</div>
        <ul>
          <li>support@cowrywise.com</li>
          <li>WhatsApp ↗</li>
        </ul>
      </div>
    </div>
  );
}

export default Footergrid;
