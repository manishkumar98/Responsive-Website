import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img.jpg"

const Common = (props) => {
  return (
    /* 10 ko use karo 12 me se  <div className="ml-10 mx-auto"> use 10 col
    mobile orser1  waise order2 
    column medium 6 all equal
    pt-padding top
    large me 0 padding top
    my-3 means margin upar se 3
    mt-3 top se 3 margin
    */
    <>
      <section id="header" className="d-flex align-items-center col-11 mx-auto" >
          <div className="container-fluid nav_bg d-flex justify-content-center">
            <div className="row ">
              <div className="ml-10 mx-auto ">
                <div className="row ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                  <h1>{props.name} <strong className="brand-nam brand"> Navyug</strong></h1>
                  <h2 className="my-3">We make websites</h2>
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="home img"/>
                </div>
                </div>
              </div>
            </div>
          </div>


      </section>
    </>
  );
};
export default Common;
