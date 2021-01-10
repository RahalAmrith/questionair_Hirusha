import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Loading from "../Loading/Loading";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.

class Initials extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      res: [],
      showRes: false,
      jobdescription: "",
      expertizein: "",
      minexperiance_in_similar_role: "",
      minedu_qualification: "",
      major: "",
      minGPA: "",
      maxAGE: "",
      gender: "",
      maritalStatus: "",
      languages: [],
      ComputerSkills: [],
      ProfesstionalQ: [],
      keyWords: [],
      fromDate: "",
      toDate: "",
      accuracy: 80,
    };
  }

  handleInputChange(e) {
    var d = {};
    d[e.target.name] = e.target.value;
    this.setState({ ...d });
  }

  async handleSubmit() {
    this.setState({
      loading: true,
    });

    await axios
      .post(
        `https://vg2gtzbtlf.execute-api.us-east-1.amazonaws.com/Prod/iShort`,
        {
          jobdescription: this.state.jobdescription,
          expertizein: this.state.expertizein,
          minexperiance_in_similar_role: this.state
            .minexperiance_in_similar_role,
          minedu_qualification: this.state.minedu_qualification,
          major: this.state.major,
          minGPA: this.state.minGPA,
          maxAGE: this.state.maxAGE,
          gender: this.state.gender,
          maritalStatus: this.state.maritalStatus,
          languages: this.state.languages,
          ComputerSkills: this.state.ComputerSkills,
          ProfesstionalQ: this.state.ProfesstionalQ,
          keyWords: this.state.keyWords,
          fromDate: this.state.fromDate,
          toDate: this.state.toDate,
          accuracy: this.state.accuracy,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((Response) => {
        console.log(Response);
        // this.setState({ res: Response.data.candidate });
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
          <h3 style={{ color: "white" }}>Analyser / Initial</h3>
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
                    required
                    name="jobdescription"
                    value={this.state.jobdescription}
                    onChange={(e) => this.handleInputChange(e)}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Expertise in</label>
                  <input
                    name="expertizein"
                    value={this.state.expertizein}
                    onChange={(e) => this.handleInputChange(e)}
                    type="text"
                    className="form-control"
                    name="expertizein"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label>Minimum experience in similer role</label>
                  <input
                    name="minexperiance_in_similar_role"
                    value={this.state.minexperiance_in_similar_role}
                    onChange={(e) => this.handleInputChange(e)}
                    type="text"
                    className="form-control"
                    name="minexperiance_in_similar_role"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Minimal Educational Qualification</label>
                  <select
                    onChange={(e) => this.handleInputChange(e)}
                    name="minedu_qualification"
                    className="form-control"
                  >
                    <option value="BBA">BBA</option>
                    <option value="BSc">BSc.</option>
                    <option value="BTech">BTech</option>
                    <option value="BIT">BIT</option>
                    <option value="BEng">BEng</option>
                    <option value="MSc">MSc</option>
                    <option value="MBA">MBA</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Major / Specialization</label>
                  <select
                    onChange={(e) => this.handleInputChange(e)}
                    className="form-control"
                    name="major"
                  >
                    <option value="Information Techology">
                      Information Techology
                    </option>
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Network Engineering">
                      Network Engineering
                    </option>
                    <option value="Systems Engineering">
                      Systems Engineering
                    </option>
                    <option value="Information System Engineering">
                      Information System Engineering
                    </option>
                  </select>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="form-group">
                  <label>Minimum GPA</label>
                  <input
                    value={this.state.minGPA}
                    onChange={(e) => this.handleInputChange(e)}
                    type="text"
                    className="form-control"
                    name="minGPA"
                  />
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div className="form-group">
                  <label>Max Age</label>
                  <input
                    value={this.state.maxAGE}
                    onChange={(e) => this.handleInputChange(e)}
                    type="text"
                    className="form-control"
                    name="maxAGE"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    onChange={(e) => this.handleInputChange(e)}
                    className="form-control"
                    name="gender"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>Marital Status</label>
                  <select
                    onChange={(e) => this.handleInputChange(e)}
                    className="form-control"
                    name="maritalStatus"
                  >
                    <option value="Maried">Maried</option>
                    <option value="Single">Single</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Fluent Languages</label>
                  <TagsInput
                    value={this.state.languages}
                    onChange={(tags) => this.setState({ languages: tags })}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Computer Skills</label>
                  <TagsInput
                    value={this.state.ComputerSkills}
                    onChange={(tags) => this.setState({ ComputerSkills: tags })}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Professional Qualification</label>
                  <TagsInput
                    value={this.state.ProfesstionalQ}
                    onChange={(tags) => this.setState({ ProfesstionalQ: tags })}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label>Keywords</label>
                  <TagsInput
                    value={this.state.keyWords}
                    onChange={(tags) => this.setState({ keyWords: tags })}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>From</label>
                  <input
                    onChange={(e) => this.handleInputChange(e)}
                    type="date"
                    className="form-control"
                    name="fromDate"
                    value={this.state.fromDate}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>To</label>
                  <input
                    // value={this.toDate.jobdescription}
                    onChange={(e) => this.handleInputChange(e)}
                    type="date"
                    className="form-control"
                    name="toDate"
                    value={this.state.toDate}
                  />
                </div>
              </div>
              <div className="col-md-1">
                <div className="form-group">
                  <label>Accuracy</label>
                  <input
                    onChange={(e) => this.handleInputChange(e)}
                    type="number"
                    min={0}
                    max={100}
                    defaultValue={80}
                    className="form-control"
                    name="accuracy"
                  />
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

export default Initials;
