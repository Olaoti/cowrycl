import React from "react";
import Navbar from "../Components/Navbar.js";
import Header from "../Components/Header.js";
import Richstep from "../Components/Richstep.js";
import Invest from "../Components/Invest.js";
import AppInfo from "../Components/AppInfo.js";
import Security from "../Components/Security.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Richstep />
      <Invest />
      <AppInfo />
      <Security />
    </div>
  );
}

export default Home;
