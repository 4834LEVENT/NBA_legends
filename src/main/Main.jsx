import React from "react";
import Card from "../card/Card";
import "../helpers/data";
import { data } from "../helpers/data";
import "./main.css";

const Main = () => {
  return (
    <div className="container p-3 w-75 ">
      <h1>Header</h1>
      <div className="row g-3 justify-content-center p-3 ">
        {data.map((item, i) => (
          <Card card={item} key={item.i} />
        ))}
      </div>
    </div>
  );
};

export default Main;
