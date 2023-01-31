import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.svg";
import plan from "../Assets/navbar/plan.svg";
import save from "../Assets/navbar/save.svg";
import invest from "../Assets/navbar/invest.svg";
import stash from "../Assets/navbar/stash.svg";
import sprout from "../Assets/navbar/sprout.svg";
import embed from "../Assets/navbar/embed.svg";
import docs from "../Assets/navbar/docs.svg";
import { ReactComponent as Expand } from "../Assets/navbar/expand.svg";
import { ReactComponent as Expandbig } from "../Assets/navbar/expandbig.svg";

//import Link from "react-router-dom";

function Navbar() {
  const links = [
    {
      id: 0,
      img: plan,
      head: "Plan",
      text: "Access financial tools and guides",
    },
    {
      id: 1,
      img: save,
      head: "Save",
      text: "Earn better interests than your bank",
    },
    {
      id: 2,
      img: invest,
      head: "Invest",
      text: "Build a global portfolio in one app",
    },
    {
      id: 3,
      img: stash,
      head: "Get stash",
      text: "A digital wallet for everything",
    },
    {
      id: 4,
      img: sprout,
      head: "Sprout",
      text: "Put your business idle cash to work",
    },
    {
      id: 5,
      img: embed,
      head: "Embed",
      text: "Offer investment services in your app",
    },
    {
      id: 6,
      img: docs,
      head: "Docs",
      text: "Read how to integrate the Embed Api",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [personal, setPersonal] = useState(false);
  const [business, setBusiness] = useState(false);
  const [dev, setDev] = useState(false);

  const personalClicked = () => {
    setPersonal(!personal);
    setBusiness(false);
    setDev(false);
  };
  const businessClicked = () => {
    setBusiness(!business);
    setPersonal(false);
    setDev(false);
  };
  const devClicked = () => {
    setDev(!dev);
    setBusiness(false);
    setPersonal(false);
  };
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__section">
        <div className="mobile-nav">
          <div className="logo">
            <img src={logo} alt="cowrywise logo" />
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className={`menu ${showMenu ? "cancelicon" : "showicon"}`}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`nav ${showMenu ? "showing" : "hiding"}`}>
          <div className="personal link">
            <div className="personalhead link-head">
              <span
                onClick={personalClicked}
                className={`${personal && "black"}`}
              >
                Personal
              </span>
              <span className="dropicon">
                <Expand className={`desktop ${personal ? "less" : "more"}`} />
                <Expandbig
                  className={`mobile ${personal ? "less" : "more"}`}
                  fill="white"
                />
              </span>
            </div>
            <div
              className={`link__section ${
                personal ? "showsection" : "hidesection"
              }`}
            >
              <div className="link__section__left">
                {links
                  ?.filter((list) => list.id <= 3)
                  .map((link) => {
                    return (
                      <div className="link-to-page" key={link.id}>
                        <div className="image">
                          <img src={link.img} alt="" />
                        </div>
                        <div className="link__texts">
                          <div className="link__texts__head">{link.head}</div>
                          <div className="link__texts__body">{link.text}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="link__section__right">
                <div className="right__texts__head">Growth Tools</div>
                <div className="right__texts__body">
                  Estimate your interests
                </div>
                <div className="right__texts__body">
                  Know your risk appetite
                </div>
              </div>
            </div>
          </div>
          <div className="business link">
            <div className="businesshead link-head">
              <span
                onClick={businessClicked}
                className={`${business && "black"}`}
              >
                Business
              </span>
              <span className="dropicon">
                <Expand className={`desktop ${business ? "less" : "more"}`} />
                <Expandbig
                  className={`mobile ${business ? "less" : "more"}`}
                  fill="white"
                />
              </span>
            </div>
            <div
              className={`link__section ${
                business ? "showsection" : "hidesection"
              }`}
            >
              {links
                ?.filter((list) => list.id === 4)
                .map((link) => {
                  return (
                    <div className="link-to-page" key={link.id}>
                      <div className="image">
                        <img src={link.img} alt="" />
                      </div>
                      <div className="link__texts">
                        <div className="link__texts__head">{link.head}</div>
                        <div className="link__texts__body">{link.text}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="developer link">
            <div className="developerhead link-head">
              <span onClick={devClicked} className={`${dev && "black"}`}>
                Developer
              </span>
              <span className="dropicon">
                <Expand className={`desktop ${dev ? "less" : "more"}`} />
                <Expandbig
                  className={`mobile ${dev ? "less" : "more"}`}
                  fill="white"
                />
              </span>
            </div>
            <div
              className={`link__section ${dev ? "showsection" : "hidesection"}`}
            >
              <div className="link__section__left">
                {links
                  ?.filter((list) => list.id > 4)
                  .map((link) => {
                    return (
                      <div className="link-to-page" key={link.id}>
                        <div className="image">
                          <img src={link.img} alt="" />
                        </div>
                        <div className="link__texts">
                          <div className="link__texts__head">{link.head}</div>
                          <div className="link__texts__body">{link.text}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="link__section__right">
                <div className="right__texts__head">Connect</div>
                <div className="right__texts__body">Join Embed on Slack</div>
              </div>
            </div>
          </div>
          <div className="link desktop">
            <div className="link-head">Learn</div>
          </div>
          <div className="redirects desktop">
            <div className="login">Log In</div>
            <div className="btn signup">Sign Up For Free</div>
          </div>
          <div className="mobile otherlinks">
            <div>Sign Up</div>
            <div>Log In </div>
            <div>About</div>
            <div>FAQs</div>
            <div>Security</div>
            <div>Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
