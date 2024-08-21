import React from "react";
import three from "../../assets/person/3.jpeg";
import { Users } from "../../dummyData";

const Online = () => {
  return (
    <div>
      <div className="onlinecontainerr">
        <h1>online friends</h1>
        <ul className="onlinefrslists">
          {Users.map((user) => (
            <li key={user.id} className="onlinefrd">
              <div className="onlineimgcon">
                <img src={user.profilePicture} className="onlinePerson" />
                <span className="onlinedot"></span>
              </div>
              <span className="onlineuser">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Online;
