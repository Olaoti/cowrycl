import React from "react";
import { ReactComponent as Twitter } from "../Assets/socials/twitter.svg";
import { ReactComponent as Facebook } from "../Assets/socials/facebook.svg";
import { ReactComponent as Whatsapp } from "../Assets/socials/whatsapp.svg";
import { ReactComponent as Telegram } from "../Assets/socials/telegram.svg";
import { ReactComponent as Instagram } from "../Assets/socials/instagram.svg";
import { ReactComponent as Youtube } from "../Assets/socials/youtube.svg";
import licenseimg from "../Assets/license.png";

function Footeraddress() {
  return (
    <div className="address">
      <div className="socials">
        <Twitter />
        <Facebook />
        <Whatsapp />
        <Telegram />
        <Instagram />
        <Youtube />
      </div>
      <div className="physical-address">
        <div className="office-address">
          <p>
            🇳🇬 &nbsp; 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.
          </p>
          <p>🇺🇸 &nbsp; 2261 Market Street #4817 San Francisco, CA 94114</p>
        </div>
        <div className="license">
          <img src={licenseimg} alt="license" />
          <div className="license__info">
            <h5>Licensed by the Sec</h5>
            <h6>Fund Manager</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footeraddress;
