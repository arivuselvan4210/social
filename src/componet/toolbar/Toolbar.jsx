import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import imf from "../../assets/person/1.jpeg";
import "./toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolcontainer">
      <div className="toolleft">
        <span className="toolname">Arivu</span>
      </div>
      <div className="toolcenter">
        <div className="searchIcon">
          <FaSearch />
        </div>
        <input type="text" />
      </div>
      <div className="toolright">
        <div className="link">
          <span>Home Page</span>
          <span>Time Line</span>
        </div>
        <div className="notification">
          <div className=" noticon">
            <IoPerson />
            <span>1</span>
          </div>

          <div className=" noticon">
            <IoPerson />
            <span>1</span>
          </div>

          <div className=" noticon">
            <IoPerson />
            <span>1</span>
          </div>
        </div>

        <div className="imgs">
          <img src={imf} alt="imge" height="50px" width="50px" />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
