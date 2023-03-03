import React, { useState, useEffect, useRef } from "react";
import plan from "../Assets/navbar/plan.svg";
import save from "../Assets/navbar/save.svg";
import invest from "../Assets/navbar/invest.svg";
import stash from "../Assets/navbar/stash.svg";
import sprout from "../Assets/navbar/sprout.svg";
import embed from "../Assets/navbar/embed.svg";
import docs from "../Assets/navbar/docs.svg";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { ReactComponent as Expand } from "../Assets/navbar/expand.svg";
import { ReactComponent as Expandbig } from "../Assets/navbar/expandbig.svg";
import gsap from "gsap";

//import Link from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

  const [personal, setPersonal] = useState(false);
  const [business, setBusiness] = useState(false);
  const [dev, setDev] = useState(false);

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
  const personalClicked = () => {
    setPersonal(!personal);
    setBusiness(false);
    setDev(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  const menubarClicked = () => {
    setShowMenu(!showMenu);
  };

  /*declaration of refs*/
  const animatedPersonalRef1 = useRef(null);
  const animatedPersonalRef2 = useRef(null);
  const animatedheadRef = useRef(null);
  const personalRef = useRef(null);
  const businessRef = useRef(null);
  const devRef = useRef(null);
  /* for personal animation*/

  useEffect(() => {
    const personalElement = personalRef.current;
    gsap.fromTo(
      personalElement.querySelector(".animated0"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.1,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      personalElement.querySelector(".animated1"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.25,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      personalElement.querySelector(".animated2"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.4,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      personalElement.querySelector(".animated3"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.55,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      animatedheadRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.85,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      animatedPersonalRef1.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 1,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      animatedPersonalRef2.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.25,
        delay: 1.2,
      }
    );
  }, [
    personal,
    personalRef,
    animatedheadRef,
    animatedPersonalRef1,
    animatedPersonalRef2,
  ]);

  /* for business animation*/
  useEffect(() => {
    const businessElement = businessRef.current;
    gsap.fromTo(
      businessElement.querySelector(".animated4"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.1,
        y: 0,
        duration: 0.4,
      }
    );
  }, [business, businessRef]);

  /* for business animation*/
  useEffect(() => {
    const devElement = devRef.current;
    gsap.fromTo(
      devElement.querySelector(".animated5"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.1,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      devElement.querySelector(".animated6"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.3,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      devElement.querySelector(".connect-embed"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.5,
        y: 0,
        duration: 0.25,
      }
    );
    gsap.fromTo(
      devElement.querySelector(".join-embed"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        delay: 0.7,
        y: 0,
        duration: 0.25,
      }
    );
  }, [dev, devRef]);

  /* navbar animation */

  const menuRef = useRef();
  useEffect(() => {
    const menuEm = menuRef.current;
    gsap.fromTo(
      menuEm.querySelector(".nav-anim1"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 0.5, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim2"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 0.65, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim3"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 0.8, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim4"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 0.85, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim5"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 1, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim6"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 1.1, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim7"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 1.25, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim8"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 1.4, duration: 0.2 }
    );
    gsap.fromTo(
      menuEm.querySelector(".nav-anim9"),
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, delay: 1.5, duration: 0.2 }
    );
  }, [showMenu, menuRef]);

  return (
    <div className={`navbar ${show && "showing"}`}>
      <div className="navbar__section">
        <div className="mobile-nav">
          <div className="logo">
            <Logo fill="#0067F5" />
          </div>
          <div
            onClick={menubarClicked}
            className={`menu ${showMenu ? "cancelicon" : "showicon"}`}
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`nav ${showMenu ? "showing" : "hiding"}`} ref={menuRef}>
          <div className="personal link" ref={personalRef}>
            <div
              className="personalhead link-head nav-anim1"
              onClick={personalClicked} 
            >
              <span className={`${personal && "black"}`}>Personal</span>
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
                      <div
                        className={`link-to-page animated${link?.id}`}
                        key={link.id}
                      >
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
                <div className="right__texts__head" ref={animatedheadRef}>
                  Growth Tools
                </div>
                <div className="right__texts__body" ref={animatedPersonalRef1}>
                  Estimate your interests
                </div>
                <div className="right__texts__body" ref={animatedPersonalRef2}>
                  Know your risk appetite
                </div>
              </div>
            </div>
          </div>
          <div className="business link" ref={businessRef}>
            <div
              className="businesshead link-head nav-anim2"
              onClick={businessClicked}
            >
              <span className={`${business && "black"}`}>Business</span>
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
                    <div
                      className={`link-to-page animated${link?.id}`}
                      key={link.id}
                    >
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
            <div
              className="developerhead link-head nav-anim3"
              onClick={devClicked}
            >
              {" "}
              <span className={`${dev && "black"}`}>Developer</span>
              <span className="dropicon">
                <Expand className={`desktop ${dev ? "less" : "more"}`} />
                <Expandbig
                  className={`mobile ${dev ? "less" : "more"}`}
                  fill="white"
                />
              </span>
            </div>
            <div
              ref={devRef}
              className={`link__section ${dev ? "showsection" : "hidesection"}`}
            >
              <div className="link__section__left">
                {links
                  ?.filter((list) => list.id > 4)
                  .map((link) => {
                    return (
                      <div
                        className={`link-to-page animated${link?.id}`}
                        key={link.id}
                      >
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
                <div className="right__texts__head connect-embed">Connect</div>
                <div className="right__texts__body join-embed">
                  Join Embed on Slack
                </div>
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
          <div
            className={`mobile otherlinks ${
              personal || business || dev ? "noshow" : ""
            }`}
          >
            <div className="nav-anim4">Sign Up</div>
            <div className="nav-anim5">Log In </div>
            <div className="nav-anim6">About</div>
            <div className="nav-anim7">FAQs</div>
            <div className="nav-anim8">Security</div>
            <div className="nav-anim9">Learn</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
