import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Loading from "../Loading/Loading";
import tick from "./Tick_Mark_Dark-512.webp";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "./algo.css";

class Algorithams extends Component {
  constructor() {
    super();
    this.state = {
      empList: [],
      loading: false,
      btnsate: false,
      form: false,
      jobReqID: "",
      algo: 1,
      al1: {
        algorithm: 1,
        education_w: 0,
        experiance_w: 0,
        technicalSkills_w: 0,
        softSkills_w: 0,
        aptitudeT_w: 0,
        technicalQ_w: 0,
      },
      al3: {
        algorithm: 3,
        education_w: 0,
        experiance_w: 0,
        technicalSkills_w: 0,
        softSkills_w: 0,
        aptitudeT_w: 0,
        technicalQ_w: 0,
      },
      al2: {
        algorithm: 2,
        education_w: 50,
        experiance_w: 50,
        technicalSkills_w: 50,
        softSkills_w: 50,
        aptitudeT_w: 50,
        technicalQ_w: 50,
      },
    };
  }

  formValueChange = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
    await console.log("Called Trigger ->", this.state.algo);
    if (this.state.algo == 2) {
      this.setState({
        form: true,
      });
    } else {
      this.setState({
        form: false,
      });
    }
    await this.return_form_al2();
  };

  return_form_al2() {
    if (this.state.form == true) {
      return (
        <div className="row">
          <div className="form-group col-sm-4">
            <label>education weight : {this.state.al2.education_w}</label>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => this.handleValueAl2Form(e)}
              value={this.state.al2.education_w}
              name="education_w"
              className="form-control"
            />
          </div>
          <div className="form-group col-sm-4">
            <label>experiance weight : {this.state.al2.experiance_w}</label>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => this.handleValueAl2Form(e)}
              value={this.state.al2.experiance_w}
              name="experiance_w"
              className="form-control"
            />
          </div>
          <div className="form-group col-sm-4">
            <label>
              technicalSkills weight : {this.state.al2.technicalSkills_w}
            </label>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => this.handleValueAl2Form(e)}
              name="technicalSkills_w"
              className="form-control"
            />
          </div>
          <div className="form-group col-sm-4">
            <label>softSkills weight : {this.state.al2.softSkills_w}</label>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => this.handleValueAl2Form(e)}
              value={this.state.al2.softSkills_w}
              name="softSkills_w"
              className="form-control"
            />
          </div>
          <div className="form-group col-sm-4">
            <label>aptitudeT weight : {this.state.al2.aptitudeT_w}</label>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => this.handleValueAl2Form(e)}
              value={this.state.al2.aptitudeT_w}
              name="aptitudeT_w"
              className="form-control"
            />
          </div>
          <div className="form-group col-sm-4">
            <label>technicalQ weight : {this.state.al2.technicalQ_w}</label>
            <input
              type="range"
              min={0}
              max={100}
              onChange={(e) => this.handleValueAl2Form(e)}
              value={this.state.al2.technicalQ_w}
              name="technicalQ_w"
              className="form-control"
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  handleValueAl2Form = (e) => {
    var kp = {};
    kp[e.target.name] = e.target.value;
    this.setState({
      al2: {
        ...this.state.al2,
        ...kp,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });

    var data = this.state[`al${this.state.algo}`];
    data.jobReqID = this.state.jobReqID;

    await axios
      .post(`http://54.211.25.125:5000/api/emp/algorithm`, data)
      .then((Response) => {
        console.log(Response);
        this.setState({
          empList: Array.isArray(Response.data.message)
            ? Response.data.message
            : [{ Rank: "No data" }],
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
  };

  handleRecruit = async (data) => {
    this.setState({
      loading: true,
    });
    await axios
      .post(`http://54.211.25.125:5000/api.emp/recruit`, data)
      .then((Response) => {
        console.log(Response);
        var emps = this.state.empList;
        emps[data.Rank - 1].recruit = true;

        this.setState({
          empList: emps,
          loading: false,
        });
      })
      .catch((Error) => {
        console.error(Error);

        var emps = this.state.empList;
        emps[data.Rank - 1].recruit = true;

        this.setState({
          empList: emps,
          loading: false,
        });
      })
      .finally(() => {
        this.setState({
          showRes: true,
        });
      });
  };

  render() {
    var empList = this.state.empList.map((data, i) => {
      return (
        <tr key={i}>
          <td>{data.Rank}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data["Total Marks"]}</td>
          <td>
            {data.recruit ? (
              <img className="rec_tick" src={tick} />
            ) : (
              <button
                onClick={() => this.handleRecruit(data)}
                className="btn  btn-primary"
              >
                Recruit
              </button>
            )}{" "}
          </td>
        </tr>
      );
    });
    return (
      <div className="container-fluid FU_main">
        <Loading show={this.state.loading} />
        <div className="container">
          <h3 className="mb-2" style={{ color: "white" }}>
            Algorithms
          </h3>
          <div className="card mb-3">
            <div className="card-body">
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>jobReq_ID</label>
                      <input
                        type="text"
                        name="jobReqID"
                        className="form-control"
                        onChange={(e) => this.formValueChange(e)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Algorithm </label>
                      <select
                        class="form-control"
                        name="algo"
                        onChange={(e) => this.formValueChange(e)}
                      >
                        <option value={1}>Algorithm 1</option>
                        <option value={2}>Algorithm 2</option>
                        <option value={3}>Algorithm 3</option>
                      </select>
                    </div>
                    {this.return_form_al2()}
                    <div class="form-group">
                      <button className="btn btn-md btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Modal
          size="lg"
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
                <th scope="col">Rank</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">Total Marks</th>
                <th width="40%" scope="col">
                  Recruit
                </th>
              </tr>
            </thead>
            <tbody>{empList}</tbody>
          </table>
        </Modal>
      </div>
    );
  }
}
export default Algorithams;
