import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="mobile-overlay d-md-none"></div>
          {/* <!-- Sidebar --> */}
          <div className="col-md-3 sidebar px-4" id="sideBar">
            <div className="logo-collapse d-flex justify-content-between align-items-center mt-4">
              <a href="" className="navbar-brand">
                Phoenix
              </a>
              <span className="collapse-icon d-none d-md-block">
                {" "}
                <i className="text-white fa-2x fas fa-angle-left"></i>
              </span>
              <span className="d-md-none">
                {" "}
                <i className="bar text-white fas fa-times-circle fa-2x"></i>{" "}
              </span>
            </div>

            <div className="text-white mt-5">
              <ul className="vertical-nav navbar-nav flex-column">
                <li className=" py-4 nav-item">
                  {" "}
                  <i className=" text-white fas fa-home mr-3 "></i>{" "}
                  <span> Dashboard</span>{" "}
                  <i
                    className="caret ml-2 text-white fas fa-caret-right"
                    data-toggle="collapse"
                    data-target="#Dashboard"
                  ></i>
                </li>
                <li className="sub-menu nav-item collapse p-3" id="Dashboard">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Stream{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Sales update{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Orders{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="nav-item heading">EMPLOYEES</li>
                <li className=" py-4 nav-item">
                  {" "}
                  <i className="mr-3 fas fa-chart-pie"></i>{" "}
                  <span> Resume Analysis </span>{" "}
                  <i
                    className="caret ml-2 text-white fas fa-caret-right"
                    data-toggle="collapse"
                    data-target="#Charts"
                  ></i>
                </li>
                <li className="sub-menu nav-item collapse p-3" id="Charts">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Special Skills Request{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Start new Process{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Score cards{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Resume Analyser{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Smart employee Allocator{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                <li className=" py-4 nav-item">
                  {" "}
                  <i className="mr-3 fas fa-chart-bar"></i> <span> KPIs </span>{" "}
                  <i
                    className="caret ml-2 text-white fas fa-caret-right"
                    data-toggle="collapse"
                    data-target="#KPI"
                  ></i>{" "}
                </li>
                <li className="sub-menu nav-item collapse p-3" id="KPI">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        KPI Mised
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Monthly Performance{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Team's Progress{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Upcoming
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="nav-item heading">Trend Analysis</li>
                <li className=" py-4 nav-item">
                  {" "}
                  <i className="mr-3 fas fa-hand-holding-usd"></i>{" "}
                  <span> Revenues </span>{" "}
                  <i
                    className="caret ml-2 text-white fas fa-caret-right"
                    data-target="#Revenues"
                    data-toggle="collapse"
                  ></i>{" "}
                </li>
                <li className="sub-menu nav-item collapse p-3" id="Revenues">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Revenues
                      </a>{" "}
                    </li>
                    {/* <!-- <li> <a href="#" className="text-light"> In the Bank</a></li> */}
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Uncleared Invoices{" "}
                      </a>{" "}
                    </li>{" "}
                    -->
                  </ul>
                </li>
                <li className=" py-4 nav-item">
                  {" "}
                  <i className="mr-3 fas fa-business-time"></i>{" "}
                  <span> Business Leads </span>{" "}
                  <i
                    className="caret ml-2 text-white fas fa-caret-right"
                    data-toggle="collapse"
                    data-target="#Business"
                  ></i>{" "}
                </li>
                <li className="sub-menu nav-item collapse p-3" id="Business">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Clients on Board
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Sales Funnel
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Qualified Leads{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                <li className=" py-4 nav-item">
                  {" "}
                  <i className="mr-3 fas fa-bullhorn"></i>{" "}
                  <span> Marketing </span>{" "}
                  <i
                    className="caret ml-2 text-white fas fa-caret-right"
                    data-toggle="collapse"
                    data-target="#Marketing"
                  ></i>{" "}
                </li>
                <li className="sub-menu nav-item collapse p-3" id="Marketing">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Marketing Trends
                      </a>{" "}
                    </li>
                    {/* <!-- <li> <a href="#" className="text-light"> Digital Channels</a></li> */}
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Tv Ads{" "}
                      </a>{" "}
                    </li>{" "}
                    -->
                  </ul>
                </li>
                {/* <!-- <li className=" py-4 nav-item"> <i className="mr-3 fas fa-user-friends"></i> <span> Team </span> <i className="caret ml-2 text-white fas fa-caret-right" data-target="#Team" data-toggle="collapse"></i> </li> */}
                <li className="sub-menu nav-item collapse p-3" id="Team">
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        My Team
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Join Request
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" className="text-light">
                        {" "}
                        Leadership Board{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End of sidebar --> */}

          {/* <!-- Main side content --> */}

          <div className="main-side-content col-md-9 ml-auto p-0">
            {/* <!-- Top Navigation Menu --> */}
            <div className="main-top position-relative">
              <div className="top-nav-mobile bg-white d-md-none px-4 py-2">
                <div className="text-right">
                  <i className="bar fas fa-bars mr-4"></i>
                  <i className="ellipsis fas fa-ellipsis-v"></i>
                </div>
              </div>
              <div className="top-nav py-3 px-4 bg-white">
                <div>
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control mr-1"
                        placeholder="Search..."
                      />
                      <div className="input-group-append align-items-center">
                        <i className=" fas fa-search"></i>
                      </div>
                    </div>
                  </form>{" "}
                </div>

                <div className="d-flex justify-content-around align-items-center ml-3 user">
                  <span id="2" className="toggler">
                    {" "}
                    <i id="2" className="fas " id="inner"></i>
                    <ul className="list-unstyled" inner="three">
                      <li>
                        {" "}
                        <a
                          className="text-white d-block pl-3 py-4"
                          style={{ background: "#6986b1;" }}
                        >
                          {" "}
                          Notifications
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="d-block pl-3 py-2">
                          <span>
                            <img src="images/client1.png" alt="" />
                          </span>{" "}
                          <span> Christine messaged you </span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a className="d-block pl-3 py-2">
                          <span>
                            <img src="images/client2.png" alt="" />
                          </span>{" "}
                          <span>Greg accepted your invitation </span>{" "}
                        </a>
                      </li>

                      <li>
                        {" "}
                        <a className="d-block pl-3 py-2">
                          <span>
                            {" "}
                            <img src="images/client3.png" alt="" />
                          </span>{" "}
                          <span> Carol checked your profile</span>
                        </a>
                      </li>
                      <a
                        className="d-block pb-4 py-2 text-center text-white"
                        style={{ backgroundColor: "#6986b1" }}
                        href="#"
                      >
                        {" "}
                        Check all Notifications
                      </a>
                    </ul>
                  </span>
                  <span id="2" className="toggler">
                    {" "}
                    <i id="2" className="fas "></i>
                    <ul className="list-unstyled pb-4" inner="three">
                      <li id="good">
                        {" "}
                        <a
                          id="three-a"
                          className="text-white d-block pl-3 py-4"
                          style={{ background: "#6986b1;" }}
                        >
                          Preferences
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            <i className="fas fa-edit mr-3"></i>
                          </span>{" "}
                          Theme
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            <i className="far fa-credit-card mr-3"></i>
                          </span>{" "}
                          Billing
                        </a>
                      </li>

                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            {" "}
                            <i className="fas fa-comments mr-3"></i> Messaging
                          </span>
                        </a>
                      </li>
                    </ul>
                  </span>
                  <span className="toggler admin" id="2">
                    Hi, Hirusha{" "}
                    <img
                      src="images/pasport.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <ul id="sub" className="list-unstyled pb-4" id="three">
                      <li>
                        {" "}
                        <a
                          id="three-a"
                          className="text-white d-block pl-3 py-4"
                          style={{ background: "#6986b1;" }}
                        >
                          Hirusha Kumarasinghe
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            <i className="fas fa-user mr-3"></i>
                          </span>{" "}
                          Account
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            <i className="fas fa-envelope mr-3"></i>
                          </span>{" "}
                          Messages
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            {" "}
                            <i className="fas fa-clipboard-check mr-3"></i>{" "}
                          </span>{" "}
                          Todo
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a id="three-a" className="d-block pl-3 py-2">
                          <span>
                            {" "}
                            <i className="fas fa-sign-out-alt mr-3"></i> Sign
                            out
                          </span>
                        </a>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- End of top navigation menu --> */}

            <div className="container-fluid ">
              <div className="row first-row justify-content-between">
                <div className="col-md-6 col-xl-3 p-2">
                  <div>
                    <p> Employee Engagements</p>
                    <h3> 90%</h3>
                    {/* <!-- <p className="badge"> <span className="text-success mr-2"> <i className="fas fa-caret-up"></i> 3.45%</span> from last week</p> --> */}
                  </div>
                </div>

                <div className="col-md-6 col-xl-3 p-2 ">
                  <div>
                    <p>Project Progress</p>
                    <h3> 66%</h3>
                    <p className="badge">
                      {" "}
                      <span className="text-danger mr-2">
                        {" "}
                        <i className="fas"></i> date
                      </span>{" "}
                      Dead line datek
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-xl-3 p-2">
                  <div>
                    <p> Weekly Revenue</p>
                    <h3> LKR 20,000.00</h3>
                    <p className="badge">
                      {" "}
                      <span className="text-danger mr-2">
                        {" "}
                        <i className="fas fa-caret-down"></i> 2.14%
                      </span>{" "}
                      from last week
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-xl-3 p-2 ">
                  <div>
                    <p> Sales this Month </p>
                    <h3> LKR 61,203.00</h3>
                    <p className="badge">
                      {" "}
                      <span className="text-danger mr-2">
                        {" "}
                        <i className="fas fa-caret-up"></i> 2.08%
                      </span>{" "}
                      from last month
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Second row --> */}
              <div className="row px-2 py-4">
                <div className="col-lg-8 pl-0 pr-0 pr-lg-3 mb-4 mb-lg-0">
                  <div className="bg-white py-4 px-3 second-row">
                    <p className="mb-5 tex">
                      {" "}
                      <span className="d-block">Jan - July </span>{" "}
                      <span className="badge"> Project Progress </span>
                    </p>
                    {/* <canvas id="myChart"></canvas> */}
                    <Bar
                      data={{
                        labels: [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                        ],
                        datasets: [
                          {
                            label: "one",
                            backgroundColor: "#698600",
                            borderColor: "#698600",
                            data: [45, 80, 74, 55, 62, 60, 70],
                          },
                          {
                            label: "two",
                            backgroundColor: "#008658",
                            borderColor: "#008658",
                            data: [80, 74, 55, 62, 60, 70, 45],
                          },
                        ],
                      }}
                      options={{
                        title: {
                          display: false,
                          text: "Sales for the Month",
                        },
                        legend: {
                          display: true,
                        },
                        tooltips: {
                          color: "white",
                          backgroundColor: "#6986b1",
                          label: function (tooltipItem, data) {
                            return tooltipItem.xLabel;
                          },
                          displayColors: false,
                        },

                        scales: {
                          xAxes: [
                            {
                              gridLines: {
                                drawOnChartArea: false,
                              },
                            },
                          ],
                          yAxes: [
                            {
                              gridLines: {
                                drawOnChartArea: false,
                              },
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },

                        label: {
                          display: false,
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-4 py-4 px-3 bg-white second-row">
                  <p className="mb-4"> Sales </p>

                  <p className=""> Projects data</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "52%" }}
                    >
                      <span>52%</span>
                    </div>
                  </div>

                  <p className=""> Projects data</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "31%" }}
                    >
                      <span>31%</span>
                    </div>
                  </div>

                  <p className=""> Projects data</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "8%" }}
                    >
                      <span>8%</span>
                    </div>
                  </div>

                  <p className=""> Projects data</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "13%" }}
                    >
                      <span>13%</span>
                    </div>
                  </div>

                  <p className=""> Projects data</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "18%" }}
                    >
                      <span>18%</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of Second row --> */}

              {/* <!-- Third row --> */}
              <div className="row px-2 py-2">
                <div className="col-lg-8 pl-0 pr-0 pr-lg-3 mb-4 mb-lg-0">
                  <div className="second-row bg-white pb-5">
                    <p className="mb-5">
                      {" "}
                      <span className="d-block "> Jan - July</span>{" "}
                      <span className="badge"> Revenue in Thousands</span>{" "}
                    </p>
                    {/* <canvas id="lineChart" className="mb-4"></canvas> */}
                    <Line
                      data={{
                        labels: [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                        ],
                        datasets: [
                          {
                            label: "",
                            backgroundColor: "#6986b1",
                            borderColor: "#6986b1",
                            data: [56, 78, 105, 72, 60, 80, 65],
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-4 second-row ">
                  {/* <!-- <div className=""> */}
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="d-inline-block">
                      {" "}
                      <span className="d-block">
                        {" "}
                        Best Selling Products{" "}
                      </span>{" "}
                      <span className="badge"> Jan - July</span>{" "}
                    </p>
                    <p>
                      <a
                        href="#"
                        className="d-inline-block align-middle"
                        style={{ color: "#6986b1" }}
                      >
                        {" "}
                        <span className="d-block">
                          {" "}
                          <i className="fas fa-file-export"></i>{" "}
                        </span>{" "}
                        <span className="badge"> Export CSV</span>{" "}
                      </a>
                    </p>
                  </div>

                  <table className="table table-borderless">
                    <thead className="bg-light border-bottom">
                      <tr>
                        <th scope="col"> Product</th>
                        <th scope="col text-right"> Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-bottom">
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="images/3.jpg"
                              className="border border-100"
                              width="45"
                              alt=""
                            />
                            <div className="d-inline-block ml-2">
                              <p>Item 1</p>
                              <p className="badge"> SKU-1002</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle text-right">
                          <p> $130,133</p>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="images/cam.jpg"
                              className="border border-200"
                              width="45"
                              alt=""
                            />
                            <div className="d-inline-block ml-2">
                              <p>Item 2</p>
                              <p className="badge"> SKU-1009</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle text-right">
                          <p> $157,466</p>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="images/hermes-rivera-770598-unsplash.jpg"
                              className="border border-200"
                              width="45"
                              alt=""
                            />
                            <div className="d-inline-block ml-2">
                              <p>Item 3</p>
                              <p className="badge"> SKU-1102</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle text-right">
                          <p> $80,453</p>
                        </td>
                      </tr>

                      <tr className="border-bottom">
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src="images/black-wrist-watch_1057-4040.jpg"
                              className="border border-100"
                              width="45"
                              alt=""
                            />
                            <div className="d-inline-block ml-2">
                              <p>Item 4</p>
                              <p className="badge"> SKU-1015</p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle text-right">
                          <p> $300,057</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
              </div>
            </div>

            {/* <!-- Fourth Row --> */}
            <div className="row px-2 py-4">
              <div className="col second-row bg-white">
                <nav className="row pr-3">
                  <div className="col-3 col-lg-6">
                    <p> Performance</p>
                  </div>

                  <div
                    className="col-9 col-lg-6 nav nav-tabs justify-content-end"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="active mr-2 mr-sm-4"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Team
                    </a>
                    <a
                      className="mr-2 mr-sm-4"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Finance
                    </a>
                    <a
                      className=""
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Vendor
                    </a>
                  </div>
                </nav>
                <div className="mt-5 py-3 tab-content" id="nav-tabContent">
                  <div
                    className="col col-lg-10 mx-auto tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    {/* <canvas id="doughChart"></canvas> */}
                    <Doughnut
                      data={{
                        labels: [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                        ],
                        datasets: [
                          {
                            label: "My Pie chart",
                            backgroundColor: [
                              "#477ac7",
                              "#09dda8",
                              "#0e91e9",
                              "pink",
                              "teal",
                              "#3e0688",
                              "#8FC3FF",
                            ],
                            hoverBorderColor: "",
                            borderColor: "",
                            borderWidth: 0,
                            data: [80, 74, 55, 62, 60, 70, 45],
                          },
                        ],
                      }}
                    />
                  </div>
                  <div
                    className="col col-lg-10 mx-auto tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    {/* <canvas id="managementChart"></canvas> */}
                    <Doughnut
                      data={{
                        labels: [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                        ],
                        datasets: [
                          {
                            label: "My Pie chart",
                            backgroundColor: [
                              "#477ac7",
                              "#09dda8",
                              "#0e91e9",
                              "pink",
                              "teal",
                              "#3e0688",
                              "#8FC3FF",
                            ],
                            hoverBorderColor: "",
                            borderColor: "",
                            borderWidth: 0,
                            data: [15, 62, 102, 40, 31, 50, 23],
                          }
                        ],
                      }}
                    />
                  </div>
                  <div
                    className="col col-lg-10 mx-auto tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    {/* <canvas id="vendorChart"></canvas> */}
                    <Doughnut
                      data={{
                        labels: [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                        ],
                        datasets: [
                          {
                            label: "My Pie chart",
                            backgroundColor: [
                              "#477ac7",
                              "#09dda8",
                              "#0e91e9",
                              "pink",
                              "teal",
                              "#3e0688",
                              "#8FC3FF",
                            ],
                            hoverBorderColor: "",
                            borderColor: "",
                            borderWidth: 0,
                            data: [15, 62, 102, 40, 31, 50, 23],
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of Fourth Row --> */}

            {/* <!-- Fifth Row --> */}

            <div className="fifth row px-2 py-2 mb-5">
              <div className="col-lg-6 mb-4 pr-0 pr-lg-3 mb-lg-0 pl-0">
                <div className="second-row recent-activity">
                  <p> Recent Activities</p>
                  <div className="recent-item pb-3 mt-5">
                    <div className="row">
                      <div className="col-2">
                        <img src="images/client1.png" width="50" alt="" />
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Chamudini Athukorala </p>
                        <p> Uploaded cv for analyse</p>
                        <p> 2hrs ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="recent-item pb-3">
                    <div className="row">
                      <div className="col-2">
                        <img src="images/client2.png" width="50" alt="" />
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Kavishka Dabare </p>
                        <p> KPI calculator</p>
                        <p> 2hrs ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="recent-item pb-3">
                    <div className="row">
                      <div className="col-2">
                        <img src="images/client3.png" width="50" alt="" />
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Hirusha Kumarasinghe </p>
                        <p> Updated Project Progress</p>
                        <p> 2hrs ago</p>
                      </div>
                    </div>
                    <p className="text-right">
                      {" "}
                      <a href="#">View All</a>{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6  second-row">
                <p> Active Users</p>
                <div className="recent-activity pr-3 recent-second mt-5">
                  <div className="recent-item pb-3 pr-2">
                    <div className="row">
                      <div className="col-2">
                        <div className="avatar">
                          {" "}
                          <img
                            src="images/client3.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Hirusha Kumarasinghe </p>
                        <p> Project Manager</p>
                      </div>
                    </div>
                  </div>

                  <div className="recent-item pb-3">
                    <div className="row">
                      <div className="col-2">
                        <div className="avatar">
                          {" "}
                          <img
                            src="images/client1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Chamudini Athukorala </p>
                        <p> Human Resource</p>
                      </div>
                    </div>
                  </div>

                  <div className="recent-item pb-3">
                    <div className="row">
                      <div className="col-2">
                        <div className="avatar">
                          {" "}
                          <img
                            src="images/client2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Kavishka Dabare </p>
                        <p> System Administrator</p>
                      </div>
                    </div>
                  </div>

                  <div className="recent-item pb-3">
                    <div className="row">
                      <div className="col-2">
                        <div className="avatar">
                          {" "}
                          <img
                            src="images/pasport.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-10 pl-4 pl-sm-0">
                        <p> Hirusha Kumarasinghe </p>
                        <p> Developer</p>
                      </div>
                    </div>
                    <p className="text-right">
                      {" "}
                      <a href="#">View All</a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- End of Fifth Row --> */}
          </div>

          {/* <!-- End Main side content --> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
