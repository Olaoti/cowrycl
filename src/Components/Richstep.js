import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Richstep() {
  const descriptionRef = useRef();
  const stepsRef = useRef();
  const barsRef = useRef();

  useEffect(() => {
    const element = descriptionRef.current;
    const barselement = barsRef.current;
    const stepselement = stepsRef.current;
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".bighead"),
      { x: "-50" },
      {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
        x: 0,
        duration: 0.2,
        delay: 0.3,
      }
    );
    gsap.fromTo(
      element.querySelector(".little"),
      { y: "50", x: "0", opacity: 0 },
      {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.3,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      element.querySelector("#desctexts"),
      { x: "40" },
      {
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom",
        },
        x: 0,
        duration: 0.6,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      barselement.querySelector("#bar1"),
      {
        transform:
          "matrix(1.2899999618530273,0,0,0,1.9583740234375,1128.6500244140625)",
        transformOrigin: "0px 0px",
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        transform:
          "matrix(1.2899999618530273,0,0,1,1.9583740234375,1128.6500244140625)",
        transformOrigin: "0px 0px",
        marginBottom: 0,
        duration: 0.9,
        ease: "ease",
        delay: 0.6,
      }
    );
    gsap.fromTo(
      barselement.querySelector("#bar2"),
      {
        transform:
          "matrix(1.2899999618530273,0,0,0,377.6028747558594,788.6500244140625)",
        transformOrigin: "0px 0px",
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        transform:
          "matrix(1.2899999618530273,0,0,1,377.6028747558594,788.6500244140625)",
        transformOrigin: "0px 0px",
        marginBottom: 0,
        duration: 0.9,
        ease: "ease",
        delay: 1,
      }
    );
    gsap.fromTo(
      barselement.querySelector("#bar3"),
      {
        transform:
          "matrix(1.2899999618530273,0,0,0,752.214111328125,448.6500244140625)",
        transformOrigin: "0px 0px",
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        transform:
          "matrix(1.2899999618530273,0,0,1,752.214111328125,448.6500244140625)",
        transformOrigin: "0px 0px",
        marginBottom: 0,
        duration: 0.9,
        ease: "ease",
        delay: 1.2,
      }
    );
    gsap.fromTo(
      stepselement.querySelector(".step1"),
      {
        opacity: 0,
        y: -30,
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "ease",
        delay: 1.2,
      }
    );
    gsap.fromTo(
      stepselement.querySelector(".step2"),
      {
        opacity: 0,
        y: -30,
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "ease",
        delay: 1.4,
      }
    );
    gsap.fromTo(
      stepselement.querySelector(".step3"),
      {
        opacity: 0,
        y: -30,
      },
      {
        scrollTrigger: {
          trigger: barsRef.current,
          start: "top center",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "ease",
        delay: 1.7,
      }
    );
  }, [descriptionRef, stepsRef, barsRef]);
  return (
    <div className="richstep">
      <div className="richstep__description" ref={descriptionRef}>
        <div className="bighead">
          Get a <div className="little">little </div> richer each day
        </div>
        <div className="richstep__description__texts" id="desctexts">
          One small step today, a giant leap for tomorrow.
        </div>
        <button className="btn">Start Your Financial Journey</button>
      </div>
      <div className="richstep__steps">
        <div className="stepsvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1270 1360"
            width="1270"
            height="1360"
            preserveAspectRatio="xMidYMid meet"
            ref={barsRef}
          >
            <defs>
              <clipPath>
                <rect width="1270" height="1360" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g>
              <g
                id="bar1"
                transform="matrix(1.2899999618530273,0,0,1,1.9583740234375,1128.6500244140625)"
                opacity="1"
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,199.46499633789062,115.19400024414062)"
                >
                  <path
                    fill="rgb(0,102,243)"
                    fillOpacity="1"
                    d=" M198.44000244140625,-477.52099609375 C198.44000244140625,-477.52099609375 0.6470000147819519,-362.5769958496094 0.6470000147819519,-362.5769958496094 C0.6470000147819519,-362.5769958496094 -198.43899536132812,-477.5190124511719 -198.43899536132812,-477.5190124511719 C-198.43899536132812,-477.5190124511719 -0.6470000147819519,-592.4639892578125 -0.6470000147819519,-592.4639892578125 C-0.6470000147819519,-592.4639892578125 198.44000244140625,-477.52099609375 198.44000244140625,-477.52099609375z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,298.78399658203125,252.02200317382812)"
                >
                  <path
                    fill="rgb(8,37,82)"
                    fillOpacity="1"
                    d=" M-98.6709976196289,-499.4049987792969 C-98.6709976196289,-499.4049987792969 -99.12200164794922,-15.977999687194824 -99.12200164794922,-15.977999687194824 C-99.12200164794922,-15.977999687194824 -33.29899978637695,-15.977999687194824 -33.29899978637695,-15.977999687194824 C-33.29899978637695,-15.977999687194824 98.34600067138672,-15.979999542236328 98.34600067138672,-15.979999542236328 C98.34600067138672,-15.979999542236328 99.12200164794922,-614.3489990234375 99.12200164794922,-614.3489990234375 C99.12200164794922,-614.3489990234375 -98.6709976196289,-499.4049987792969 -98.6709976196289,-499.4049987792969z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,100.18099975585938,252.02200317382812)"
                >
                  <path
                    fill="rgb(0,41,233)"
                    fillOpacity="1"
                    d=" M-99.93099975585938,-15.977999687194824 C-99.93099975585938,-15.977999687194824 99.48100280761719,-15.977999687194824 99.48100280761719,-15.977999687194824 C99.48100280761719,-15.977999687194824 99.93099975585938,-499.4049987792969 99.93099975585938,-499.4049987792969 C99.93099975585938,-499.4049987792969 -99.15499877929688,-614.3480224609375 -99.15499877929688,-614.3480224609375 C-99.15499877929688,-614.3480224609375 -99.93099975585938,-15.977999687194824 -99.93099975585938,-15.977999687194824z"
                  ></path>
                </g>
              </g>
              <g
                id="bar2"
                transform="matrix(1.2899999618530273,0,0,1,377.6028747558594,788.6500244140625)"
                opacity="1"
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,200.4290008544922,115.19400024414062)"
                >
                  <path
                    fill="rgb(0,102,243)"
                    fillOpacity="1"
                    d=" M198.44000244140625,-477.52099609375 C198.44000244140625,-477.52099609375 0.6470000147819519,-362.5769958496094 0.6470000147819519,-362.5769958496094 C0.6470000147819519,-362.5769958496094 -198.44000244140625,-477.5190124511719 -198.44000244140625,-477.5190124511719 C-198.44000244140625,-477.5190124511719 -0.6470000147819519,-592.4639892578125 -0.6470000147819519,-592.4639892578125 C-0.6470000147819519,-592.4639892578125 198.44000244140625,-477.52099609375 198.44000244140625,-477.52099609375z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,299.2650146484375,422.0220031738281)"
                >
                  <path
                    fill="rgb(8,37,82)"
                    fillOpacity="1"
                    d=" M-98.18900299072266,-669.4039916992188 C-98.18900299072266,-669.4039916992188 -99.60299682617188,154.01800537109375 -99.60299682617188,154.01800537109375 C-99.60299682617188,154.01800537109375 97.86299896240234,154.02099609375 97.86299896240234,154.02099609375 C97.86299896240234,154.02099609375 99.60299682617188,-784.3480224609375 99.60299682617188,-784.3480224609375 C99.60299682617188,-784.3480224609375 -98.18900299072266,-669.4039916992188 -98.18900299072266,-669.4039916992188z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,100.66300201416016,422.02301025390625)"
                >
                  <path
                    fill="rgb(0,41,233)"
                    fillOpacity="1"
                    d=" M-100.41300201416016,154.02099609375 C-100.41300201416016,154.02099609375 98.9990005493164,154.02099609375 98.9990005493164,154.02099609375 C98.9990005493164,154.02099609375 100.41300201416016,-669.405029296875 100.41300201416016,-669.405029296875 C100.41300201416016,-669.405029296875 -98.6729965209961,-784.3480224609375 -98.6729965209961,-784.3480224609375 C-98.6729965209961,-784.3480224609375 -100.41300201416016,154.02099609375 -100.41300201416016,154.02099609375z"
                  ></path>
                </g>
              </g>
              <g
                id="bar3"
                transform="matrix(1.2899999618530273,0,0,1,752.214111328125,448.6500244140625)"
                opacity="1"
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,201.42100524902344,115.19400024414062)"
                >
                  <path
                    fill="rgb(0,102,243)"
                    fillOpacity="1"
                    d=" M198.43899536132812,-432.52099609375 C198.43899536132812,-432.52099609375 0.6470000147819519,-317.5769958496094 0.6470000147819519,-317.5769958496094 C0.6470000147819519,-317.5769958496094 -198.44000244140625,-432.5190124511719 -198.44000244140625,-432.5190124511719 C-198.44000244140625,-432.5190124511719 -0.6470000147819519,-547.4639892578125 -0.6470000147819519,-547.4639892578125 C-0.6470000147819519,-547.4639892578125 198.43899536132812,-432.52099609375 198.43899536132812,-432.52099609375z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,299.5780029296875,597.02197265625)"
                >
                  <path
                    fill="rgb(8,37,82)"
                    fillOpacity="1"
                    d=" M-97.51000213623047,-799.405029296875 C-97.51000213623047,-799.405029296875 -100.28299713134766,319.47198486328125 -100.28299713134766,319.47198486328125 C-100.28299713134766,319.47198486328125 97.5510025024414,319.47198486328125 97.5510025024414,319.47198486328125 C97.5510025024414,319.47198486328125 100.28299713134766,-914.3489990234375 100.28299713134766,-914.3489990234375 C100.28299713134766,-914.3489990234375 -97.51000213623047,-799.405029296875 -97.51000213623047,-799.405029296875z"
                  ></path>
                </g>
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,101.15899658203125,597.0230102539062)"
                >
                  <path
                    fill="rgb(0,41,233)"
                    fillOpacity="1"
                    d=" M-100.90899658203125,319.468994140625 C-100.90899658203125,319.468994140625 98.50299835205078,319.4700012207031 98.50299835205078,319.4700012207031 C98.50299835205078,319.4700012207031 100.90899658203125,-799.406005859375 100.90899658203125,-799.406005859375 C100.90899658203125,-799.406005859375 -98.177001953125,-914.3480224609375 -98.177001953125,-914.3480224609375 C-98.177001953125,-914.3480224609375 -100.90899658203125,319.468994140625 -100.90899658203125,319.468994140625z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="richstep__steps__eachstep" ref={stepsRef}>
          <div className="step1">
            <div className="stepdesc">
              <div className="heading">Build your savings</div>
              <div className="texts">
                Consistently automate your savings while setting realistic
                goals.
              </div>
            </div>
            <span>1</span>
          </div>
          <div className="step2">
            <div className="stepdesc">
              <div className="heading">Invest deliberately</div>
              <div className="texts">
                Invest in our diverse range of assets that grow in value over
                time.
              </div>
            </div>
            <span>2</span>
          </div>
          <div className="step3">
            <div className="stepdesc">
              <div className="heading">Stay rich ✨</div>
              <div className="texts">
                Protect your wealth by managing risk, seeking advice and making
                smart financial decisions.
              </div>
            </div>
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Richstep;
