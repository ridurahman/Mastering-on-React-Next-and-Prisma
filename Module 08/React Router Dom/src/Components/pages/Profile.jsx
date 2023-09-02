import React from "react";
import WithLink from "../WithLink/WithLink";
import WithNavLink from "../WithLink/WithNavLink";
import { useParams } from "react-router-dom";
const Profile = () => {
  let { facebook, youtube } = useParams();
  return (
    <div>
      <WithNavLink />
      <h1>This is profile page</h1>
      <p>FaceBook: {facebook}</p>
      <p>YouTube: {youtube}</p>
    </div>
  );
};

export default Profile;
