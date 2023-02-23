import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Invest() {
  const investRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      investRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: investRef.current,
          start: "top bottom",
        },
      }
    );
  }, [investRef]);
  return (
    <div className="invest">
      <div className="invest__head">You name it, we've figured it out.</div>
      <div className="invest__section" ref={investRef}>
        <div className="invest__section__quote">
          <span>"</span>
          Automate and build my savings
        </div>
        <div className="invest__section__quote">
          <span>"</span>
          Diversified long-term investing
        </div>
        <div className="invest__section__quote">
          <span>"</span>
          Get better returns on my money
        </div>
        <div className="invest__section__quote">
          <span>"</span>
          Invest my business' cash
        </div>
        <div className="invest__section__quote">
          <span>"</span>
          Invest in mutual funds easily
        </div>
        <div className="invest__section__quote">
          <span>"</span>
          Invest with very low fees
        </div>
      </div>
    </div>
  );
}

export default Invest;
