import React, { Component } from "react";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Loading from "../Loading/Loading";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import { Modal, Button } from "react-bootstrap";
class JobPosting extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      btnsate: false,
      jobs: [],
      currentCard: null,
      show: false,
    };
  }

  async componentDidMount() {
    await this.loadData();
  }

  async loadData() {
    this.setState({
      loading: true,
    });

    const data = {
      operation: "view",
    };

    await axios
      .post(`http://54.211.25.125:5000/api/emp/showcards`, data)
      .then((Response) => {
        console.log(Response);
        this.setState({
          jobs: Response.data.data,
          loading: false,
        });
      })
      .catch((Error) => {
        console.error(Error);

        this.setState({
          jobs: [],
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

  // async handleDelete(_data) {
  //   this.setState({
  //     loading: true,
  //   });

  //   const data = {
  //     operation: "delete",
  //     jobid: _data.jpid,
  //   };

  //   await axios
  //     .post(`http://54.211.25.125:5000/api/emp/jobposting`, data)
  //     .then((Response) => {
  //       console.log(Response);
  //       this.setState({
  //         loading: false,
  //       });
  //     })
  //     .catch((Error) => {
  //       console.error(Error);

  //       this.setState({
  //         loading: false,
  //       });
  //     })
  //     .finally(() => {
  //       this.loadData();
  //     });
  // }

  handleClose() {
    this.setState({
      show: false,
      currentCard: null,
    });
  }
  render() {
    return (
      <div className="container-fluid FU_main">
        <Loading show={this.state.loading} />
        <div className="container-fluid">
          <h3 className="mb-2" style={{ color: "white" }}>
            Score cards
          </h3>

          {this.state.jobs.map((data, i) => {
            return (
              <div key={i} className="card mb-3 jobCard">
                <div className="row">
                  <div className="col-sm-4">
                    <b>Name: </b> <br />
                    {data.name}
                    <br />
                    <b>Email: </b> <br />
                    {data.email}
                    <br />
                    <b>Phone: </b> <br />
                    {data.phone}
                    <br />
                    <b>Address: </b>
                    <br />
                    {data.address}
                    <br />
                  </div>
                  <div className="col-sm-4">
                    <b>Eucation marks: </b> <br />
                    <button disabled className="btn btn-warning">
                      {" "}
                      {data.education_total}
                    </button>
                    <br />
                    <b>Experience marks: </b> <br />
                    <button disabled className="btn btn-warning">
                      {" "}
                      {data.experience_total}
                    </button>
                    <br />
                    <b>Skills marks: </b> <br />
                    <button disabled className="btn btn-warning">
                      {" "}
                      {data.skills_total}
                    </button>
                    <br />
                    <b>Soft skills marks: </b> <br />
                    <button disabled className="btn btn-warning">
                      {" "}
                      {data.soft_skills_total}
                    </button>
                    <br />
                    <b>Aptitude test marks: </b> <br />
                    <button disabled className="btn btn-warning">
                      {" "}
                      {data.aptitude_test || 0}
                    </button>
                    <br />
                  </div>

                  <div className="col-sm-4">
                    {Object.keys(data.social).map((key, i) => {
                      return (
                        <div>
                          <b>{key}: </b> <br />
                          <a href={data.social[key]}>{data.social[key]}</a>
                        </div>
                      );
                    })}
                  </div>

                  <div className="col-sm-12">
                    <hr />
                  </div>
                  <div className="col-sm-12">
                    <b>Education Qualifications </b>
                    <div className="lisq wauto">
                      {(data.education || []).map((data, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {data.qualification}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <hr />
                  </div>
                  <div className="col-sm-12">
                    <b>Experience: </b>
                    <div className="lisq wauto">
                      {(data.experiences || []).map((data, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {data.experience}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <hr />
                  </div>
                  <div className="col-sm-12">
                    <b>Skills </b>
                    <div className="lisq wauto">
                      {(data.skills || []).map((data, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {data.skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <hr />
                  </div>
                  <div className="col-sm-12">
                    <b>Soft Skills </b>
                    <div className="lisq wauto">
                      {Object.keys(data.soft_skills).map((key, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {key} : {data.soft_skills[key]}/10
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <hr />
                  </div>
                  <div className="col-sm-12">
                    <button
                      onClick={async () => {
                        await this.setState({
                          currentCard: i,
                        });
                        await this.setState({
                          show: true,
                        });
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <Modal
            size="lg"
            show={this.state.show}
            onHide={() => this.handleClose()}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Score</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <label>Aptitude Test marks</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="aptitude_test"
                    />
                  </div>
                </div>
                {Object.keys(
                  this.state.jobs.length > 0
                    ? this.state.currentCard !== null
                      ? this.state.jobs[this.state.currentCard].soft_skills
                      : []
                    : []
                ).map((data, i) => {
                  return (
                    <div className="col-sm-4">
                      <div key={i} className="form-group">
                        <label>
                          {data} marks :{" "}
                          <b>
                            {
                              this.state.jobs[this.state.currentCard]
                                .soft_skills[data]
                            }
                          </b>
                        </label>
                        <input
                          type="range"
                          className="form-control"
                          required
                          name={data}
                          min={0}
                          max={10}
                          value={
                            this.state.jobs[this.state.currentCard].soft_skills[
                              data
                            ]
                          }
                          onChange={(e) => {
                            var cardList = this.state.jobs;
                            cardList[this.state.currentCard].soft_skills[data] =
                              e.target.value;
                            this.setState({
                              jobs: cardList,
                            });
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Close{" "}
              </Button>
              <Button onClick={() => this.handleClose()} variant="primary">
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default JobPosting;
