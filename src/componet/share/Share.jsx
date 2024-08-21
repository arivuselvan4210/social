import React from "react";
import one from "../../assets/person/1.jpeg";
import { FaFolder } from "react-icons/fa";
import { BiSolidTagAlt } from "react-icons/bi";
import { MdRoom } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import "./share.css";

const share = () => {
  return (
    <div className="sharecontainer">
      <div className="shareInput">
        <img className="shareInputImg" src={one} />
        <input placeholder="what is in mind?" className="shareinp" />
      </div>
      <hr className="shareHr" />
      <div className="buttomShare">
        <ul className="shareOptions">
          <li className="shareOption">
            <FaFolder color="red" className="shareIcon" />
            <span className="shareName">Photo or Videos</span>
          </li>
          <li className="shareOption">
            <BiSolidTagAlt color="blue" className="shareIcon" />
            <span className="shareName">Tag</span>
          </li>
          <li className="shareOption">
            <MdRoom color="green" className="shareIcon" />
            <span className="shareName">Rooms</span>
          </li>
          <li className="shareOption">
            <MdEmojiEmotions color="gold" className="shareIcon" />
            <span className="shareName">Feeling</span>
          </li>
        </ul>
        <button className="share">Share</button>
      </div>
    </div>
  );
};

export default share;
