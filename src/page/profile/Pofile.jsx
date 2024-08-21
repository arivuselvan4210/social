import React from "react";
import Toolbar from "../../componet/toolbar/Toolbar";
import Main from "../body/Main";
import SideBar from "../../componet/sidebor/SideBar";
import Feed from "../../componet/feed/Feed";
import Rightbat from "../../componet/rightbar/Rightbat";
import "./profile.css";
import two from "../../../public/assets/post/4.jpeg";
import three from "../../../public/assets/person/4.jpeg";
const Pofile = () => {
  return (
    <div>
      <Toolbar />
      <div className="profileMains">
        <SideBar />
        <div className="profilesub">
          <div className="profileTop">
            <div className="profileImgCon">
              <img src={two} alt="" className="profileBackImg" />
              <img src={three} alt="" className="profilefrontImg" />
            </div>
            <div className="profileinfo">
              <div className="profileName">Arivuselvan</div>
              <div className="profilrdisc">Hi friends</div>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbat pofile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pofile;
