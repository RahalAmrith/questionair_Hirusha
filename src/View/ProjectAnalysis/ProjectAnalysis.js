import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Config from "../../Config";
import Loading from "../Loading/Loading";

import empPlaceholder from "./emp.jpg";

import "./ProjectAnalysis.css";

class ProjectAnalysis extends Component {
  constructor() {
    super();
    this.state = {
      CVFile: null,

      required_time: "N/A",
      givenTime: "",
      employee_count: 0,
      employees: [],
    };
  }

  parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
  }

  handleFile(files) {
    this.setState({
      CVFile: files[0],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.persist();
    this.setState({
      loading: true,
    });
    var sDate = this.parseDate(e.target.startdate.value);
    var eDate = this.parseDate(e.target.enddate.value);

    const diffTime = Math.abs(eDate - sDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    var reqData = {
      title: e.target.title.value,
      description: e.target.description.value,
      startdate: e.target.startdate.value,
      enddate: e.target.enddate.value,
      file: this.state.CVFile,
      type: e.target.type.value,
    };

    axios
      .post(`${Config.host}${Config.port}${Config.api.getEmpData}`, reqData)
      // .post(`https://zjmujtqcwg.execute-api.us-east-1.amazonaws.com/test/clientrequest`, reqData)
      // .get(
      //   `https://zjmujtqcwg.execute-api.us-east-1.amazonaws.com/test/clientrequest`
      // )
      .then((Response) => {
        this.setState({
          ...Response.data.employees,
          // employees: Response.data.candidate,
        });
      })
      .catch((Error) => {
        console.error(Error);
      })
      .finally(() => {
        this.setState({
          loading: false,
          givenTime: diffDays,
        });
      });
  }

  render() {
    var employeeCards = this.state.employees.map((data, i) => {
      return (
        <div className="col-md-3" key={i}>
          <div className="card">
            <img
              className="card-img-top"
              src={empPlaceholder}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.designation}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{data.skills}</li>
              <li className="list-group-item">{data.tools}</li>
            </ul>
          </div>
        </div>
        // <tr>
        //   <th scope="row">{i}</th>
        //   <td>{data.uid}</td>
        //   <td>{data.name}</td>
        //   <td>{data.email}</td>
        // </tr>
      );
    });
    return (
      <div className="container-fluid PA_main">
        <div className="container mb-5">
          <h1>Project Analysis</h1>
          <hr />

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>project title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="startdate"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    name="enddate"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Minimal Educational Qualification</label>
                  <select name="type" className="form-control">
                    <option value="node">Javascript Frameworks</option>
                    <option value="java">Java Frameworks</option>
                    <option value="c">.NET Framework</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <label>project title</label>
                <FilePond
                  // server={`${Config.host}${Config.port}${Config.api.uploadCV}`}
                  onupdatefiles={(files) => {
                    this.handleFile(files);
                  }}
                />
              </div>

              {/* end of form */}
            </div>

            <div className="col-md-12">
              <button className="btn btn-light" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        {this.state.employees.length > 0 ? (
          <div className="container">
            <div className="card">
              <div className="card-header">Employees</div>
              <div className="card-body">
                <h5 className="card-title">
                  Employee count : {this.state.employee_count}
                </h5>
                <h5 className="card-title">
                  Required Time : {this.state.required_time} days
                </h5>
                <h5 className="card-title">
                  Given time period for project : {this.state.givenTime}{" "}
                  days
                </h5>
                <div className="row">{employeeCards}</div>
              </div>
            </div>
          </div>

          // <div className="container">
          //   <div className="card">
          //     <div className="card-header">Employees</div>
          //     <div className="card-body">
          //       <h5 className="card-title">
          //         Employee count : {this.state.employee_count}
          //       </h5>
          //       <h5 className="card-title">
          //         Required Time : {this.state.required_time} days
          //       </h5>
          //       <h5 className="card-title">
          //         Given time period for project : {this.state.givenTime} days
          //       </h5>
          //       <div className="row">
          //         <table class="table">
          //           <thead>
          //             <tr>
          //               <th scope="col">#</th>
          //               <th scope="col">uid</th>
          //               <th scope="col">name</th>
          //               <th scope="col">email</th>
          //             </tr>
          //           </thead>
          //           <tbody>{employeeCards}</tbody>
          //         </table>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        ) : null}
      </div>
    );
  }
}

export default ProjectAnalysis;
