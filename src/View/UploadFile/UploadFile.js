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
          <h3 className="mt-1 mb-1 pr-2"  style={{color:'white'}}>Smart Resume Analyser</h3>
          <h6 className="mb-2" style={{color:'white'}}> Select and Upload your CV(s) here.</h6>

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
            <div className="card-header">Experience</div>
            <div className="card-body">
              <form>
                <div className="row">
                  {/* <div className="col-md-3"> */}
                    {/* <div class="form-group">
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
                    </div> */}
                  {/* </div> */}
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
                  <div className="col-md-3">
                    <img className="img-fluid mt-4 pt-2" style={{width:'30px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8jHyAAAAAaFRYSDA6LiYri4eFiYWHW1tYeGhsJAABBPj82MjQdGBmsrKwXERP29vbo5+fd3d1xb288OTq7urrw8PCgn58NAwZqaGnBwMGUk5NJR0hbWVkqJieCgIHQz9Ccm5tTUFEvLC2xsbF5d3hOS0zIiU7wAAADHUlEQVR4nO3di3KiQBBAUafBBwYEFRXjKzFx//8T12zWVLJRgaJ1muw9H0DNLRRUZsZOBwAAAAAAAAAAAADuLhv3TsZz34PRN1mtXSEnwyCePvoekqrBRsIkcp9EqWwXvoelZyeB+y6SeOJ7ZDqyfHim771x5ntwGrI8vRB49CMSN+HlwGPiwPf4GlvItUCX5L4H2NS8uBp4PIltv6Kuygpd6HuIDX29C549ie2+2AyuvwvfpFPfg2xkUfoidZHzPchGdlfuhR8v08z3KJtYnvu49m/h2Pcom+hXKez5HmUTFFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kchhfZRSKF9FFJoH4UU2kfhn0JLM/fGs0W3lrx0irBz6aHWIVevT7earpk9P4gUYS0VAo+J9Y45lHR6kzUMCymSKuO9h1Q26i/t+bp8xvY9pdoT4HvbCtOZ70ueNQPnLxWuifcmI8XCvbkz+EZxzdTI1nvwJHpRK7QZeDyJr0qBRk+hc8mDUuHe4GXmnegss82snkLnCp2lfU92C4OlSuHMbmGyVykcXVqK7Z/SpcZwYUQhhRR6RyGF/03hq91CpTu+4U9twUalcGK3MD2oFHaubjDjldaX/KnJ36HeiNKuaGa/IAZ9ncBOJzfzc/5Xej8nVtiDxYdQcd+XrsXEZKv5lG1p764fhbr72S2tncW00H6G+CyW7hmR/NLfPrPXl2qPdG8uSiXWfO70qXH1EEg9lW4zw3rHLF5uuTPovDeoY7KvkDic1TumpakbzKehsA0opNA+Cim0j0IK7aOQQvsopNA+Cim0j0IK7aOQQvsopNA+Cim0j0IK7aOQQvsopNA+Cim0r8pSDVP7RNXWrbDeRnwPspEK696idv+rc698AnzY9T3IZsqX28iT7zE2U7p4UW0HFm/KTqLccFb6fZQsfNNcu+TL6lpiELf6D53/2l1ODCL9lS8+rC4tLBnmPyPw+F6M5cx6olBafif8YhRLkSbRhyCU8NDqT9zfDRaHdXyS97uPP+ESAwAAAAAAAAAAAAAA6vkNvAxEYI0I/1QAAAAASUVORK5CYII=" />
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
