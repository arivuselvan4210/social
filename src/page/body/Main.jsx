import React from "react";
import "./body.css";
import SideBar from "../../componet/sidebor/SideBar";
import Feed from "../../componet/feed/Feed";
import Rightbat from "../../componet/rightbar/Rightbat";

const body = () => {
  return (
    <div className="mainCintainer">
      <SideBar />
      <Feed />
      <Rightbat />
    </div>
  );
};

export default body;
