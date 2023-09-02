import React from "react";
import WithLink from "../WithLink/WithLink";
import WithNavLink from "../WithLink/WithNavLink";
import { useParams } from "react-router-dom";
const About = () => {
  let { contact, details } = useParams();
  return (
    <div>
      <WithNavLink />
      <h1>This is about page</h1>
      <p>Contact no: {contact}</p>
      <p>Details: {details}</p>
    </div>
  );
};

export default About;
