import React from "react";

function Signup() {
  return (
    <div className="signup-section">
      <div className="signup-section__info">
        <div>Sign up for free.</div>
        <div>Start investing today.</div>
      </div>
      <form className="signup-form">
        <div className="email-field">
          <input type="email" placeholder="Your email..." required />
        </div>
        <button className="btn" type="submit">
          Sign Up For Free
        </button>
      </form>
    </div>
  );
}

export default Signup;
