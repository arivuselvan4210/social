import React from "react";
import "./feed.css";
import Share from "../share/share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";
const Feed = () => {
  console.log(Posts);
  return (
    <div className="feedContainer">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};

export default Feed;
