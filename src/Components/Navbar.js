import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.svg";
//import Link from "react-router-dom";

function Navbar() {
  const links = [
    {
      id: 0,
      img: "",
      head: "Plan",
      text: "Access financial tools and guides",
    },
    {
      id: 1,
      img: "",
      head: "Save",
      text: "Earn better interests than your bank",
    },
    {
      id: 2,
      img: "",
      head: "Invest",
      text: "Build a global portfolio in one app",
    },
    {
      id: 3,
      img: "",
      head: "Get stash",
      text: "A digital wallet for everything",
    },
    {
      id: 4,
      img: "",
      head: "Sprout",
      text: "Put your business idle cash to work",
    },
    {
      id: 5,
      img: "",
      head: "Embed",
      text: "Offer investment services in your app",
    },
    {
      id: 6,
      img: "",
      head: "Docs",
      text: "Read how to integrate the Embed Api",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [personal, setPersonal] = useState(true);
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
  return (
    <div class="navbar">
      <div className="navbar__section">
        <div className="logo">
          <img src={logo} alt="cowrywise logo" />
        </div>
        <div className="menu">
          <span></span>
          <span></span>
        </div>
        <div className="nav">
          <div className="personal link">
            <div className="personalhead link-head">
              <span onClick={personalClicked} class={`${personal && "black"}`}>
                Personal
              </span>
              <span></span>
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
              <span onClick={businessClicked} class={`${business && "black"}`}>
                Business
              </span>
              <span></span>
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
              <span onClick={devClicked} class={`${dev && "black"}`}>
                Developer
              </span>
              <span></span>
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
          <div className="link">
            <div className="link-head">Learn</div>
          </div>
          <div className="redirects">
            <div className="login">Log In</div>
            <div className="btn signup">Sign Up For Free</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
