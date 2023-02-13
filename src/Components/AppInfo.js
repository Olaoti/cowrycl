import React from "react";
import appscreenshot from "../Assets/app-screenshot.png";

function AppInfo() {
  return (
    <div className="appinfo">
      <div className="appinfo__screenshot">
        <img src={appscreenshot} alt="App view" />
      </div>
      <div className="appinfo__description">
        <div className="appinfo__description__head">
          It only takes 5 minutes
        </div>
        <div className="appinfo__description__steps">
          <div className="appinfo-step">
            <div className="stepcount">
              <div className="stepcount__number">01</div>
              <div className="stepcount__countline"></div>
            </div>
            <div className="stepinfo">
              <div className="stepinfo__head">Create an account</div>
              <div className="stepinfo__details">
                Sign up for an account with your name, email and phone number.
              </div>
            </div>
          </div>
          <div className="appinfo-step">
            <div className="stepcount">
              <div className="stepcount__number">02</div>
              <div className="stepcount__countline"></div>
            </div>
            <div className="appinfostepinfo">
              <div className="stepinfo__head">Add a payment method</div>
              <div className="stepinfo__details">
                Using your debit card or a bank transfer, setup your first plan.
              </div>
            </div>
          </div>
          <div className="appinfo-step">
            <div className="stepcount">
              <div className="stepcount__number">03</div>
            </div>
            <div className="appinfostepinfo">
              <div className="stepinfo__head">Watch your money grow</div>
              <div className="stepinfo__details">
                Sit back, relax & let your money work for you all day, everyday.
              </div>
            </div>
          </div>
        </div>
        <div className="signup">
          <button className="btn">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
