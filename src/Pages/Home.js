import React from "react";
import Navbar from "../Components/Navbar.js";
import Header from "../Components/Header.js";
import Richstep from "../Components/Richstep.js";
import Invest from "../Components/Invest.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Richstep />
      <Invest />
    </div>
  );
}

export default Home;
