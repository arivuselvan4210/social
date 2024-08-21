import React from "react";
import "./sidebar.css";
import { MdOutlineRssFeed } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";
import { MdOutlineEvent } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import second from "../../assets/person/2.jpeg";
import { Users } from "../../dummyData";
const SideBar = () => {
  return (
    <div className="stic">
      <div className="seccontainer">
        <div className="sideBarContainer">
          <ul className="sildbarlistitem">
            <li className="sidebarlist">
              <MdOutlineRssFeed className="feedicon" />
              <span className="feedname"> Feed</span>
            </li>
            <li className="sidebarlist">
              <IoIosChatboxes className="feedicon" />
              <span className="feedname"> Chat</span>
            </li>
            <li className="sidebarlist">
              <FaVideo className="feedicon" />
              <span className="feedname"> Video</span>
            </li>
            <li className="sidebarlist">
              <MdGroups className="feedicon" />
              <span className="feedname"> Group</span>
            </li>
            <li className="sidebarlist">
              <FaBookmark className="feedicon" />
              <span className="feedname"> Bookmark</span>
            </li>
            <li className="sidebarlist">
              <MdOutlineWorkOutline className="feedicon" />
              <span className="feedname"> Work</span>
            </li>
            <li className="sidebarlist">
              <IoMdHelp className="feedicon" />
              <span className="feedname"> Help</span>
            </li>
            <li className="sidebarlist">
              <MdOutlineEvent className="feedicon" />
              <span className="feedname"> Event</span>
            </li>
            <li className="sidebarlist">
              <FaSchool className="feedicon" />
              <span className="feedname"> School</span>
            </li>
          </ul>
          <hr className="hor" />
          <button className="sidebarbutton">show More</button>
          <ul className="sidebarfrd">
            {Users.map((user) => (
              <li key={user.id} className="sidebarfrdlist">
                <img
                  className="sidebarfrdimg"
                  src={user.profilePicture}
                  alt="name"
                />
                <span className="sidebarfrdname">{user.username}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
