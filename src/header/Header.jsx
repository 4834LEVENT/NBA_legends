import React from "react";
import logo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <div className="text-center my-4">
      <img src={logo} alt="" width="100px" />
    </div>
  );
};

export default Header;
