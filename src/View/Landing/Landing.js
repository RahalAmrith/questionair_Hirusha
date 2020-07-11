import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Landing.css";

// Logo
import Logo from "../Images/Logo.png";
import Banner from "../Images/Landing/Banner.png";
import questions from "../Images/Landing/questions.jpg";
import db from "../Images/Landing/db.jpg";
import form from "../Images/Landing/form.jpg";
import dashboard from "../Images/Landing/dashboard.jpg";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="L_main">
        <div className="L_header">
          <img className="logo" alt="" src={Logo} />

          <div className="L_H_nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink className="right" to="/">
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="container-fluid row L_H_Banner">
          <div className="col-md-6 LHB_Col">
            <h1>Phoenix HR</h1>
            <p>
              Phoenix HR is a Business Intelligence Assistant for Human Resource
              Management targeting IT companies. It delves into HRM practices
              revolving around employee recruitment, job placing, employee
              engagement and human resource decision making.
            </p>
            <button onClick={() => this.props.history.push("/getstarted")}>
              Get Started
            </button>
          </div>
          <div className="col-md-6 LHB_Col">
            <img className="bannerImg" alt="" src={Banner} />
          </div>
        </div>

        <div className="container-fluid LH_Cards">
          <div className="container row ">
            <div className="col-md-3">
              <div
                className="card"
                onClick={() => this.props.history.push("/sortlisting")}
              >
                <img className="card-img-top" src={db} alt="" />
                <div className="card-body">
                  <p className="card-text">Cream-of-the-crop </p>
                  <p className="card-text desc">
                    Finding the best person for the job? Select this option to
                    give your requirements to get a suitable list of candidates
                    fitting your need
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card"
                onClick={() => this.props.history.push("/appraisal")}
              >
                <img className="card-img-top" src={questions} alt="" />
                <div className="card-body">
                  <p className="card-text">What do YOU think? </p>
                  <p className="card-text desc">
                    Create a survey to measure your employee’s motivation and
                    engagement. Get feedback from your employees and measure the
                    employee engagement level through the survey results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card"
                onClick={() => this.props.history.push("/projectanalysis")}
              >
                <img className="card-img-top" src={form} alt="" />
                <div className="card-body">
                  <p className="card-text">Making the dream team</p>
                  <p className="card-text desc">
                    Click here to create a team most suitable for your next
                    project. Just give in your project details and we will give
                    you the people most suitable for it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card"
                onClick={() => this.props.history.push("/dashboard")}
              >
                <img className="card-img-top" src={dashboard} alt="" />
                <div className="card-body">
                  <p className="card-text">The Dashboard</p>
                  <p className="card-text desc">
                    Go to your Dashboard to check how your company is doing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
