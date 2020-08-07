import React, { Component } from "react";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Loading from "../Loading/Loading";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import NewSidebar from '../Dashboard/NewSideBar'
import "./UploadFile.css";

class UploadFile extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      CVFile: null,
      submitted: false,

      // response data

      name: "",
      email: "",
      phone: "",
      address: "",
      education_count: 2,
      education: [],
      experience_count: 2,
      experiences: [],
      skills_count: 2,
      skills: [],
      soft_skills_count: 2,
      soft_skills: [],
      social: {
        linkedIn: "",
        facebook: "",
        twitter: "",
        stack: "",
        github: "",
      },
    };
  }

  handleFile(files) {
    this.setState({
      CVFile: files[0],
    });
  }

  async UploadFile() {
    this.setState({
      loading: true,
    });
    var fileData = new FormData();

    if (this.state.CVFile) {
      fileData.append("file", this.state.CVFile.file);
    }

    await axios
      .post(`${Config.host}${Config.port}${Config.api.uploadCV}`, fileData)
      .then((Response) => {
        this.setState({
          ...Response.data.data_set.employees[0],
          submitted: true,
          loading: false,
        });
      })
      .catch((Error) => {
        console.error(Error);
      });
  }

  render() {
    var EducationList = this.state.education.map((data, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{data.qualification || "N/A"}</h5>
              <p className="card-text">{data.comment || "N/A"}</p>
              {/* <h6 className="card-subtitle mb-2 text-muted">
                Score : {data.score}
              </h6> */}
            </div>
          </div>
        </div>
      );
    });

    var ExperienceList = this.state.experiences.map((data, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{data.experience || "N/A"}</h5>
              <p className="card-text">{data.comment || "N/A"}</p>
              <h6 className="card-subtitle mb-2 text-muted">
                Score : {data.score}
              </h6>
            </div>
          </div>
        </div>
      );
    });

    var SkillsList = this.state.skills.map((data, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{data.skill || "N/A"}</h5>
              <p className="card-text">Comments : {data.comment || "N/A"}</p>
              <h6 className="card-subtitle mb-2 text-muted">
                Score : {data.score}
              </h6>
            </div>
          </div>
        </div>
      );
    });

    var SoftSkillsList = this.state.soft_skills.map((data, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{data.type || "N/A"}</h5>
              <p className="card-text">{data.comment || "N/A"}</p>
              <div class="progress">
                <div
                  className="progress-bar  bg-info"
                  role="progressbar"
                  style={{ width: `${data.score}%` }}
                  aria-valuenow={data.score}
                  aria-valuemin="0"
                  aria-valuemax={data.outOf || 100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container-fluid FU_main">
        <Loading show={this.state.loading} />

        <div className="container">
          <h1>Select and Upload your CV(s) here</h1>

          <div className="card mb-3">
            <div className="card-header">Define criteria</div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">BSc</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Mark"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Msc</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Mark"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Phd</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Mark"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Certification</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Mark"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Define the relevent Certification here
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header">Criteria Type</div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">
                        Degree or Specification
                      </label>
                      <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Title"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Year</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Year"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Score</label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter Score"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <FilePond
            // server={`${Config.host}${Config.port}${Config.api.uploadCV}`}
            onupdatefiles={(files) => {
              this.handleFile(files);
            }}
          />

          <button
            style={{ width: "100%" }}
            onClick={() => this.UploadFile()}
            className="btn btn-light text-secondary"
          >
            Upload File
          </button>

          <hr />
        </div>
        {this.state.submitted ? (
          <div className="container">
            {/* Basic Info */}
            <div className="card mb-3">
              <div className="card-header">Basic Info</div>
              <div className="card-body">
                <h5 className="card-title">{this.state.name}</h5>
                <p className="card-text">
                  {this.state.email}
                  <br />
                  {this.state.address}
                  <br />
                  {this.state.phone}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="card mb-3">
              <div className="card-header">
                Education{" "}
                <span className="FU_totals">{this.state.education_count}</span>
              </div>
              <div className="card-body row">{EducationList}</div>
            </div>

            {/* Experience */}
            <div className="card mb-3">
              <div className="card-header">
                Experience{" "}
                <span className="FU_totals">{this.state.experience_count}</span>
              </div>
              <div className="card-body">{ExperienceList}</div>
            </div>

            {/* Skills */}
            <div className="card mb-3">
              <div className="card-header">
                Skills{" "}
                <span className="FU_totals">{this.state.skills_count}</span>
              </div>
              <div className="card-body row">{SkillsList}</div>
            </div>

            {/* SoftSkills */}
            <div className="card mb-3">
              <div className="card-header">
                SoftSkills{" "}
                <span className="FU_totals">
                  {this.state.soft_skills_count}
                </span>
              </div>
              <div className="card-body">{SoftSkillsList}</div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UploadFile;
