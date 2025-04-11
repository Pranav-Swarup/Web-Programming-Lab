import React from "react";
import "./LoginForm.css";


const ProfileImage = () => (
  <div className="profile-image">
    <img src="/Images/vitlogo.png" alt="Profile" />
  </div>
);


const UserInfo = () => (
  <div className="user-info">
    <h2>John Doe</h2>
    <p>Email: john.doe@example.com</p>
    <p>Bio: Software Engineer at Novell</p>
  </div>
);


const UserPosts = () => (
  <div className="user-posts">
    <h3>Recent Posts</h3>
    <ul>
      <li>React Component Best Practices</li>
      <li>Understanding Virtual DOM</li>
      <li>JavaScript ES6 Features</li>
    </ul>
  </div>
);


const ProfilePage = () => (
  <div className="profile-container">
    <ProfileImage />
    <UserInfo />
    <UserPosts />
  </div>
);


export default ProfilePage;


