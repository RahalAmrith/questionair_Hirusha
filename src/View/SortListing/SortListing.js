import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import axios from "axios";

import "./SortListing.css";
import Loading from "../Loading/Loading";

class SortListing extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,

      //   get result
      // res: {
      //   jobdescription: "DevOps Engineer",
      //   expertizein: "AWS",
      //   minexperiance_in_similar_role: 2,
      //   minedu_qualification: "BSC",
      //   major: "SE",
      //   minGPA: 3.0,
      //   maxAGE: 30,
      //   gender: null,
      //   maritalStatus: null,
      //   languages: ["English"],
      //   ComputerSkills: ["Python,AWS"],
      //   ProfesstionalQ: ["AWSCSA"],
      //   keyWords: [],
      //   fromDate: "2020-04-01",
      //   toDate: "2020-04-30",
      // },
      res: [],
      showRes: false,
    };
  }

  async handleSubmit() {
    this.setState({
      loading: true,
    });

    await axios
      .get(
        `https://zjmujtqcwg.execute-api.us-east-1.amazonaws.com/test/clientrequest`
      )
      .then((Response) => {
        console.log(Response);
        this.setState({ res: Response.data.candidate });
        this.setState({
          loading: false,
        });
      })
      .catch((Error) => {
        console.error(Error);

        this.setState({
          res: [],
        });
        this.setState({
          loading: false,
        });
      })
      .finally(() => {
        this.setState({
          showRes: true,
        });
      });
  }

  render() {
    var empList = this.state.res.map((data, i) => {
      return (
        <tr>
          <th scope="row">{i}</th>
          <td>{data.uid}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
      );
    });
    return (
      <div className="container-fluid SL_main">
        <Loading show={this.state.loading} />
        <div className="container">
          <h1>Employee Sort Listing</h1>
        </div>

        <div className="container mb-5">
          <form>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Job Description</label>
                  <input
                    type="text"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Expertise in</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Minimum experience in similer role</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Minimal Educational Qualification</label>
                  <select className="form-control">
                    <option>BBA</option>
                    <option>BSc.</option>
                    <option>BTech</option>
                    <option>BIT</option>
                    <option>BEng</option>
                    <option>MSc</option>
                    <option>MBA</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Major / Specialization</label>
                  <select className="form-control">
                    <option>Information Techology</option>
                    <option>Software Engineering</option>
                    <option>Cyber Security</option>
                    <option>Network Engineering</option>
                    <option>Information System Engineering</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="form-group">
                  <label>Minimum GPA or Above</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Gender</label>
                  <select className="form-control">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Marital Status</label>
                  <select className="form-control">
                    <option>Maried</option>
                    <option>Single</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Fluent Languages</label>
                  <div className="form-check form-check-inline ml-5">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                    />
                    <label className="form-check-label" for="inlineCheckbox1">
                      English
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                    />
                    <label className="form-check-label" for="inlineCheckbox2">
                      Sinhala
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                    />
                    <label className="form-check-label" for="inlineCheckbox3">
                      Tamil
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Computer Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                  <small className="form-text text-muted">
                    enter values seperated by ","
                  </small>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Professional Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                  <small className="form-text text-muted">
                    enter values seperated by ","
                  </small>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Keywords</label>
                  <input
                    type="text"
                    className="form-control"
                    // placeholder="Enter your Job Description"
                  />
                  <small className="form-text text-muted">
                    enter values seperated by ","
                  </small>
                </div>
              </div>

              <div className="col-md-12">
                <button
                  onClick={() => this.handleSubmit()}
                  type="button"
                  className="btn btn-light"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <Modal
          size="md"
          centered
          show={this.state.showRes}
          onHide={() =>
            this.setState({
              showRes: false,
            })
          }
        >
          {/* <div className="card text-center">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title"> {this.state.res.jobdescription}</h5>
              <p className="card-text" style={{ textAlign: "left" }}>
                Expertizein: {this.state.res.expertizein} <br />
                Min Experiance in similar role:
                {this.state.res.minexperiance_in_similar_role} <br />
                Minedu qualification: {this.state.res.minedu_qualification}
                <br />
                Major: {this.state.res.major} <br />
                Min GPA : {this.state.res.minGPA} <br />
                Max AGE : {this.state.res.maxAGE} <br />
                Gender : {this.state.res.gender} <br />
                Marital Status : {this.state.res.maritalStatus} <br />
                Languages : {this.state.res.languages} <br />
                Computer Skills : {this.state.res.ComputerSkills}
                <br />
                Professtional Qualifications : {
                  this.state.res.ProfesstionalQ
                }{" "}
                <br />
                keyWords : {this.state.res.keyWords} <br />
              </p>
            </div>
            <div className="card-footer text-muted">
              {this.state.res.fromDate} - {this.state.res.toDate}
            </div>
          </div> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">uid</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>{empList}</tbody>
          </table>
        </Modal>
      </div>
    );
  }
}

export default SortListing;
