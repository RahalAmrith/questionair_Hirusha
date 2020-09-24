import React, { Component } from "react";

import "./Overview.css";

import Radar from "./GeneralInterests";

class Overview extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="overviewMain">
        <div className="row mb5">
          <div className={`col-lg-4 col-md-4 col-sm-4 col-6 pl-0 pr-2`}>
            <div className="card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row grdFrost">
              <div className="pl-3 pr-0 my-auto">
                {/* <img className="sidebar-image"></img> */}
                <i className="fas fa-tasks cardIcon"></i>
              </div>
              <div className="my-auto">
                <h6 className=" bold-normal pr-2">Ongoing Projects</h6>
                <h3 className="bold-normal pr-2">2</h3>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 col-6 pl-0 pr-2`}>
            <div className="card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row grdPolitics">
              <div className="pl-3 pr-0 my-auto">
                <i className="fas fa-user-tie cardIcon"></i>
              </div>
              <div className="my-auto">
                <h6 className=" bold-normal pr-2">Employee Engagement </h6>
                <h3 className=" bold-normal pr-2">78%</h3>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 col-6 pl-0 pr-2`}>
            <div className="card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row grdtransfile">
              <div className="pl-3 pr-0 my-auto">
                <i className="fas fa-cogs cardIcon"></i>
              </div>
              <div className="my-auto">
                <h6 className=" bold-normal pr-2">Tech Updates</h6>
                <h3 className=" bold-normal pr-2">56</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={`col-lg-8 col-md-8 col-sm-8 col-6 pl-0 pr-2`}>
          <div className="card border-0 shadow-sm rounded mt-3 bg-white py-3 d-flex flex-row">
            <Radar
              brand2="Employee Skills"
              brand1="Used Skills"
              data={[
                { title: "Python", brand1: 60, brand2: 50 },
                { title: "Java", brand1: 60, brand2: 80 },
                { title: "Javascript", brand1: 100, brand2: 100 },
                { title: "C#", brand1: 10, brand2: 80 },
                { title: "C/C++", brand1: 10, brand2: 50 },
                { title: "PHP", brand1: 50, brand2: 80 },
                { title: "Swift", brand1: 10, brand2: 40 },
                { title: "Objective-C", brand1: 10, brand2: 40 },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
