import React, { useEffect, useState, useRef } from "react";
import reviewimg from "../Assets/reviews.svg";
import appstore from "../Assets/header/appstore.svg";
import playstore from "../Assets/header/playstore.svg";
import { gsap } from "gsap";

function Reviews() {
  const questionsobj = [
    {
      id: 0,
      question: "Got SEC licence?",
      answer: "Yup!",
      qcolor: "",
      acolor: "",
    },
    {
      id: 1,
      question: "Saving Charges?",
      answer: "Nope!",
      qcolor: "",
      acolor: "",
    },
    {
      id: 2,
      question: "Great Interest Rates?",
      answer: "Confam!",
      qcolor: "",
      acolor: "",
    },
    {
      id: 3,
      question: "Maintenance Fees?",
      answer: "No.",
      qcolor: "",
      acolor: "",
    },
    {
      id: 4,
      question: "Convinced?",
      answer: "Sign up now!",
      qcolor: "",
      acolor: "",
    },
  ];
  var [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (number < questionsobj.length - 1) {
        setNumber(number + 1);
      } else {
        setNumber(0);
      }
    }, 3500);
    return () => clearInterval(timer);
  }, [number, questionsobj.length]);

  const questionRef = useRef(null);
  const answerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
    gsap.fromTo(
      answerRef.current,
      { opacity: 0, marginLeft: "1rem", y: 50 },
      { opacity: 1, marginLeft: "2rem", x: 0, y: 0, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      sectionRef.current,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -20, duration: 0.5, delay: 2.5 }
    );
  }, [number, questionRef, answerRef, sectionRef]);

  return (
    <div className="reviews">
      <div className="reviews__reason">WHY COWRYWISE ?</div>
      <div className="questions-section" ref={sectionRef}>
        <div className="questions-section__question" ref={questionRef}>
          {questionsobj[number].question}
        </div>
        <div className="questions-section__answer" ref={answerRef}>
          {questionsobj[number].answer}
        </div>
      </div>
      <div className="reviews__section">
        <div className="review-card">
          <div className="review-card__top">
            <div className="review-stars">
              <div className="review-average">
                <span>4.4</span>/5
              </div>
              <div className="review-img">
                <img src={reviewimg} alt="" />
              </div>
            </div>
            <div className="img">
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className="availability">Available on the Play Store</div>
          <div className="review-card__info">
            “User interface is fantastic, deposits and withdrawals flawless and
            fast. I wish I had discovered this years ago, would have been a
            millionaire by now” - Obiora, Nov 2021
          </div>
          <div className="downloadbtn">
            Download Now{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                svg-inline=""
                role="presentation"
                focusable="false"
                tabIndex="-1"
                fill="#0066f5"
              >
                <path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="review-card">
          <div className="review-card__top">
            <div className="review-stars">
              <div className="review-average">
                <span>4.5</span>/5
              </div>
              <div className="review-img">
                <img src={reviewimg} alt="" />
              </div>
            </div>
            <div className="img">
              <img src={appstore} alt="" />
            </div>
          </div>
          <div className="availability">Available on the App Store</div>
          <div className="review-card__info">
            “I just don't know what to say about this app all i know is that
            it's awesome, it's been 2 years plus and I haven't had a reason to
            complain.” - Henrietta, December 2021
          </div>
          <div className="downloadbtn">
            Download Now{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
                svg-inline=""
                role="presentation"
                focusable="false"
                tabIndex="-1"
                fill="#0066f5"
              >
                <path d="M21.31 14.484L9.602 26.808a.627.627 0 01-.912-.009.71.71 0 01-.007-.96L19.93 14 8.683 2.16a.71.71 0 01.007-.96.627.627 0 01.912-.008L21.31 13.516a.71.71 0 010 .968z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
