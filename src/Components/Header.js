import React, { useState, useRef, useEffect } from "react";
import wande from "../Assets/header/wande.jpg";
import wura from "../Assets/header/wura.jpg";
import mayokun from "../Assets/header/mayokun.jpg";
import wuravid from "../Assets/header/videos/wuravid.mp4";
import mayokunvid from "../Assets/header/videos/mayokun.mp4";

import { ReactComponent as Play } from "../Assets/header/play.svg";
import { ReactComponent as Pause } from "../Assets/header/pause.svg";

import { ReactComponent as Playstore } from "../Assets/header/playstore.svg";
import { ReactComponent as Appstore } from "../Assets/header/appstore.svg";

import gsap from "gsap";

function Header() {
  const [number, setNumber] = useState(0);
  const headerInfo = [
    {
      id: 0,
      hname: "Wuraola F",
      img: wura,
      texts:
        "I've become more conscious of how I spend my money and also about investing. Now, I feel comfortable spending knowing my Cowrywise account is there.",
      handle: "@wuwu",
      background: "pink",
      video: wuravid,
      playing: false,
      nowplaying: false,
    },
    {
      id: 1,
      hname: "Mayokun A",
      img: mayokun,
      texts:
        "Cowrywise makes saving quite interesting and fun. My best part would be the fact that I can seamlessly invest my naira in dollars.",
      handle: "@mhay",
      background: "green",
      video: mayokunvid,
      playing: false,
      nowplaying: false,
    },
    {
      id: 2,
      hname: "Olaitan O",
      img: wande,
      texts:
        "I love how Cowrywise has made me think of saving part of any income I get. I immediately think of investing any money I get now.",
      handle: "@thevideopilot",
      background: "blue",
      playing: false,
      nowplaying: false,
    },
  ];
  const [HeaderInfo, setHeaderinfo] = useState(headerInfo);
  const videoRef = useRef(null);
  useEffect(() => {
    if (HeaderInfo[number]?.playing && HeaderInfo[number]?.nowplaying) {
      videoRef.current.play();
    }
  }, [HeaderInfo, number]);
  const playClicked = () => {
    if (!HeaderInfo[number]?.playing) {
      const newheader = { ...HeaderInfo };
      newheader[number].playing = true;
      newheader[number].nowplaying = true;
      setHeaderinfo(newheader);
    } else if (HeaderInfo[number].playing) {
      const newheader = { ...HeaderInfo };
      newheader[number].nowplaying = true;
      setHeaderinfo(newheader);
      videoRef.current.play();
    }
  };
  const pauseClicked = () => {
    const newheader = { ...HeaderInfo };
    newheader[number].nowplaying = false;
    setHeaderinfo(newheader);
    videoRef.current.pause();
  };

  const imageRef = useRef();
  const overlayRef = useRef();
  const descRef = useRef();
  const backRef = useRef();
  useEffect(() => {
    gsap.fromTo(videoRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    if (window.innerWidth > 550) {
      gsap.fromTo(
        imageRef.current,
        { transform: "rotate(4deg)", height: "20vh", marginTop: "30vh" },
        { transform: "rotate(0)", height: "85vh", duration: 0.8, marginTop: 0 }
      );
      gsap.fromTo(
        descRef.current,
        { scale: 1.2, marginTop: "3.2rem" },
        { scale: 1, marginTop: 0, duration: 0.8 }
      );
    } else {
      gsap.fromTo(descRef.current, { x: -25 }, { x: 0, duration: 0.8 });
      gsap.fromTo(
        overlayRef.current,
        { width: "100%" },
        { width: 0, duration: 0.8 }
      );
      gsap.fromTo(
        imageRef.current,
        { scale: 1.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "ease",
        }
      );
      gsap.fromTo(
        backRef.current,
        { height: 0, opacity: 0 },
        {
          height: "100%",
          opacity: 0.5,
          duration: 0.8,
          ease: "ease",
        }
      );
    }
  }, [number, imageRef]);

  return (
    <div className="header">
      <div className="header__section">
        <div className="header__section__personas">
          <div
            className={`background ${headerInfo[number].background}`}
            ref={backRef}
          ></div>
          <div className="header__section__personas__image">
            <div
              className="header__section__personas__description"
              ref={descRef}
            >
              <div className="texts">{headerInfo[number].texts}</div>
              <div className="persona_info">
                <div className="name">{headerInfo[number].hname}</div>
                <div className="handle">{headerInfo[number].handle}</div>
              </div>
            </div>
            {headerInfo[number].video && (
              <div className="play__section">
                {HeaderInfo[number]?.nowplaying ? (
                  <Pause onClick={pauseClicked} />
                ) : (
                  <Play onClick={playClicked} />
                )}
              </div>
            )}
            <div>
              {HeaderInfo[number]?.playing ? (
                <div className="video">
                  <video
                    src={headerInfo[number]?.video}
                    loop
                    autoPlay
                    ref={videoRef}
                    muted="muted"
                  ></video>
                </div>
              ) : (
                <div className="imageCard">
                  <div className="overlay" ref={overlayRef}></div>
                  <img
                    ref={imageRef}
                    src={headerInfo[number].img}
                    alt={headerInfo[number].hname}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="select_info">
            {headerInfo.map((info) => {
              return (
                <div key={info.id}>
                  <img
                    src={info.img}
                    onClick={() => setNumber(info.id)}
                    alt={info.hname}
                    className={`${info.id === number ? "lighten" : "darken"}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="header__section__info">
          <div className="header__section__info__head bighead">
            Put your <br /> money to work
          </div>
          <div className="header__section__info__text">
            Invest wisely. Manage risk. <br />
            Grow wealth.
          </div>
          <div className="header__section__info__form desktopheader">
            <form>
              <input type="email" placeholder="Your email ..." required />
              <button className="submit btn">Start Investing</button>
            </form>
          </div>
          <div className="mobileheader download-section">
            <div className="playstore">
              <Playstore />
            </div>
            <div className="appstore">
              <Appstore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
