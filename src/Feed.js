import React, { useState } from "react";
import "./css/Feed.css";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import somesh from "./somesh.jpeg";
import Post from "./Post";
// import { db } from "./firebase";
// import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState();

  const submitPost = (e) => {
    e.preventDefault();
    alert(input);

    // db.collection("posts").add({
    //   name: "Somesh Gavali",
    //   description: "Using React.js",
    //   message: input,
    //   photoURL:
    //     "http://localhost:3000/static/media/somesh.e702898ea7a146332a9b.jpeg",
    //   timestamps: firebase.firestore.FieldValue.serverTimestamps(),
    // });
    // setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src={somesh} />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>

        <div className="feed__options">
          <div className="options">
            <PhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="options">
            <SmartDisplayIcon style={{ color: "#5F9B41" }} />
            <span>Video</span>
          </div>
          <div className="options">
            <TodayIcon style={{ color: "#A872E8" }} />
            <span>Event</span>
          </div>
          <div className="options">
            <AssignmentIcon style={{ color: "#E16745" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>
      <Post
        name="Somesh Gavali"
        description="Software Engineer"
        message="I am living from Chatrapati Sambhaji Nagar"
        photoURL={somesh}
      />
      <Post
        name="Umesh Gavali"
        description="Mechanical Engineer"
        message="I am living from Chatrapati Sambhaji Nagar"
        photoURL={somesh}
      />
      <Post
        name="Mahesh Tupsaundar"
        description="Bank Manager"
        message="I am living from Ahmednagar"
        photoURL={somesh}
      />
      <Post
        name="Nisha Shinde"
        description="I am Student"
        message="I am living from Chatrapati Sambhaji Nagar"
        photoURL={somesh}
      />
      <Post
        name="Mangesh Dhore"
        description="Pharmasist"
        message="I am living from Chatrapati Sambhaji Nagar"
        photoURL={somesh}
      />
      <Post
        name="Somesh Gavali"
        description="Software Engineer"
        message="I am living from Chatrapati Sambhaji Nagar"
        photoURL={somesh}
      />
      <Post
        name="Ganesh sontakke"
        description="Software Engineer"
        message="I am living from Pune"
        photoURL={somesh}
      />
      <Post
        name="shrawani Garud"
        description="I am Student"
        message="I am living from pune"
        photoURL={somesh}
      />
    </div>
  );
}

export default Feed;
