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
      .post(`http://54.211.25.125:5000/api/emp/jobposting`, data)
      .then((Response) => {
        console.log(Response);
        this.setState({
          jobs: Response.data.message,
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

  async handleDelete(_data) {
    this.setState({
      loading: true,
    });

    const data = {
      operation: "delete",
      jobid: _data.jpid,
    };

    await axios
      .post(`http://54.211.25.125:5000/api/emp/jobposting`, data)
      .then((Response) => {
        console.log(Response);
        this.setState({
          loading: false,
        });
      })
      .catch((Error) => {
        console.error(Error);

        this.setState({
          loading: false,
        });
      })
      .finally(() => {
        this.loadData();
      });
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <div className="container-fluid FU_main">
        <Loading show={this.state.loading} />
        <div className="container-fluid">
          <h3 className="mb-2" style={{ color: "white" }}>
            Job Posting
          </h3>

          {this.state.jobs.map((data, i) => {
            return (
              <div className="card mb-3 jobCard">
                <div className="row">
                  <div className="col-sm-4">
                    <b>Job Description: </b>
                    {data.jobdescription}
                    <br />
                    <b>Expertize in: </b>
                    {data.expertizein}
                    <br />
                    <b>Min. experiance in similar role: </b>
                    {data.minexperiance_in_similar_role}
                    <br />
                    <b>Min. ducation qualification: </b>
                    {data.minedu_qualification}
                    <br />
                    <b>Major: </b>
                    {data.major}
                    <br />
                  </div>
                  <div className="col-sm-4">
                    <b>Min. GPA: </b>
                    {data.minGPA}
                    <br />
                    <b>Max Age: </b>
                    {data.maxAGE}
                    <br />
                    <b>Gender: </b>
                    {data.gender}
                    <br />
                  </div>
                  <div className="col-sm-4">
                    <b>Keywords: </b>
                    <div className="lisq wauto">
                      {(data.keyWords || []).map((data, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {data}
                          </span>
                        );
                      })}
                    </div>
                    <b>languages: </b>
                    <div className="lisq wauto">
                      {(data.languages || []).map((data, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {data}
                          </span>
                        );
                      })}
                    </div>
                    <b>accuracy: </b>
                    <div className="lisq wauto">
                      <span className="lisoq green">{data.accuracy}</span>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <hr />
                  </div>
                  <div className="col-sm-10">
                    <b>List of candidates: </b>
                    <div className="lisq wauto">
                      {(data.listofq || []).map((data, i) => {
                        return (
                          <span className="lisoq" key={i}>
                            {data}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-sm-2 delbtn">
                    <button
                      onClick={() => this.handleDelete(data)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {/* {JSON.stringify(data)} */}
              </div>
            );
          })}

          <Modal
            show={this.state.show}
            onHide={() => this.handleClose()}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              I will not close if you click outside me. Don't even try to press
              escape key.{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Close{" "}
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default JobPosting;
