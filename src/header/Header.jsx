import React from "react";
import logo from "../assets/nba-logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="text-center my-4">
      <img src={logo} alt="" width="100px" />
      <h1 className="text-center">NBA Legends</h1>
      <form action="">
        <input
          className="w-75 rounded "
          type="search"
          name=""
          id=""
          placeholder="search"
        />
      </form>
    </div>
  );
};

export default Header;
