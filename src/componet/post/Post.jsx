import React from "react";
import "./post.css";
import { IoMdMore } from "react-icons/io";
import one from "../../assets/person/1.jpeg";
import two from "../../../public/assets/post/1.jpeg";
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";
import { Users } from "../../dummyData.js";
import { useState } from "react";
const Post = ({ post }) => {
  const userlike = post.like;
  const [likes, setlikes] = useState(userlike);
  const [cheking, setcheking] = useState(true);
  const linkeat = () => {
    setlikes(cheking ? likes + 1 : likes - 1);
    setcheking(!cheking);
  };
  return (
    <div className="postContainer">
      <div className="postsubcon">
        <div className="postTop">
          <div className="postTopFirst">
            <img
              src={Users.filter((f) => f.id === post.userId)[0].profilePicture}
              className="postTopimg"
            />
            <span className="postTopName">
              {Users.filter((f) => f.id === post.userId)[0].username}
            </span>
            <span className="span postDate">{post.date}</span>
          </div>
          <div className="postTopLaste">
            <IoMdMore />
          </div>
        </div>
        <div className="postCenter">
          <span className="postDsc">{post?.desc}</span>
          <img src={post.photo} className="postImg" />
        </div>
        <div className="postBottem">
          <div className="postBottomleft">
            <img className="postBottomimg" src={like} onClick={linkeat} />
            <img className="postBottomimg" src={heart} onClick={linkeat} />
            <span className="postBottomName">{likes} people like it</span>
          </div>
          <div className="postBottomright">
            <span className="postComment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
