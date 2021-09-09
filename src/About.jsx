import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpg"
import Common from "./Common";
 
const About = () => {
  return (
    <>
       <Common name="You are in the about us page"
      imgsrc={web}
      visit="/services"
      btname="Get Started"/>
    </>
  );
};
export default About;
