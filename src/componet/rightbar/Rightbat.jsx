import React from "react";
import "./rightbar.css";
import one from "../../assets/gift.png";
import two from "../../assets/ad.png";
import Online from "./Online";
import { Users } from "../../dummyData";
const Rightbat = ({ pofile }) => {
  const ProfileNot = () => {
    return (
      <>
        <div className="rightbirthcontainer">
          <img src={one} alt="" className="rightbirthimg" />
          <span className="rightbirthwish">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <div className="birthimgcon">
          <img src={two} className="birthimg" />
        </div>
        <Online />
      </>
    );
  };
  const ProfileIn = () => {
    return (
      <div className="friendcon">
        <h4>User Informaetion</h4>
        <div className="friendBio">
          <span className="lable">City:</span>
          <span className="lableValue">Ariyalur</span>
        </div>
        <div className="friendBio">
          <span className="lable">From:</span>
          <span className="lableValue">maduri</span>
        </div>
        <div className="friendBio">
          <span className="lable">Relation:</span>
          <span className="lableValue">Single</span>
        </div>
        <h4 className="userfrdname">User Friends</h4>
        <div className="userFrdCon">
          {Users.map((user) => (
            <div key={user.id} className="userfrddes">
              <img src={user.profilePicture} className="userfrdimg" />
              <span className="userfrdname">{user.username}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="rightContainer">
      {pofile ? <ProfileIn /> : <ProfileNot />}
    </div>
  );
};

export default Rightbat;
