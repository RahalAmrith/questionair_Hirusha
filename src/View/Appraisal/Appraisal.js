import React, { Component } from "react";

import "./Appraisal.css";
import Question from "./Question";
import Axios from "axios";

import Config from "../../Config";
import Loading from "../Loading/Loading";

class Appraisal extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      keyDriver: "",
      additionalQ: false,

      showQuestions: false,
      questions: [],
      questions2: [
        {
          qnumber: 1,
          question: "The core values of the company are aligned with my own",
          type: "radio",
          paras: [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree",
          ],
        },
        {
          qnumber: 2,
          question: "I am given the freedom to decide how to work",
          type: "radio",
          paras: [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree",
          ],
        },
        {
          qnumber: 3,
          question: "My team supports me whenever necessary",
          type: "radio",
          paras: [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree",
          ],
        },
        {
          qnumber: 4,
          question: "The work environment is beneficial for productive work",
          type: "radio",
          paras: [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree",
          ],
        },
        {
          qnumber: 5,
          question: "How would you rate the Culture in your company",
          type: "radio",
          paras: [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree",
          ],
        },
        {
          qnumber: 6,
          question:
            "What is your personal opinion on the culture of your organization?",
          type: "text",
          paras: [],
        },
      ],
    };
  }

  async handleKeyDriver(e) {
    e.preventDefault();
    e.persist();
    await this.setState({
      loading: true,
    });

    var kDriver = [];
    if (e.target.eDev) {
      kDriver.push("Employee Development")
    }
    if (e.target.cult) {
      kDriver.push("Culture")
    }
    if (e.target.WLBal) {
      kDriver.push("Work-Life balance")
    }
    if (e.target.leadership) {
      kDriver.push("Leadership")
    }
    await this.setState({
      keyDriver: kDriver,
      additionalQ: e.target.additionalQ.value,
    });

    var ReqData = {
      qtype: this.state.keyDriver,
      general: this.state.additionalQ,
      ids : []
    };

    await Axios.post(
      `${Config.host}${Config.port}${Config.api.getSurvayQuestions}`,
      ReqData
    )
      .then(async (Response) => {
        if (this.state.additionalQ) {
          var allQ = Response.data.questions.questions;
          await allQ.concat(Response.data.general_questions.questions);
          await this.setState({
            questions: allQ,
          });
        } else {
          this.setState({
            questions: Response.data.questions.questions,
          });
        }
      })
      .catch((Error) => {
        console.error(Error);
      })
      .finally(() => {
        this.setState({ showQuestions: true, loading: false });
      });
  }

  render() {
    var questionsList = this.state.questions.map((data, i) => {
      return <Question data={data} key={i} />;
    });
    return (
      <div className="container-fluid AP_main">
        <Loading show={this.state.loading} />
        {this.state.showQuestions ? null : (
          <div className="container">
            <h1>Appraisal Form</h1>
            <hr />
            <div className="card">
              <div className="card-header">Key Driver</div>
              <div className="card-body">
                <form onSubmit={(e) => this.handleKeyDriver(e)}>
                  <h5 className="card-title">Key Driver</h5>
                  <p className="card-text">Please Select your Key Driver</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="eDev"
                      value="empdev"
                    />
                    <label className="form-check-label">
                      Employee Development
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="cult"
                      value="culture"
                    />
                    <label className="form-check-label">Culture</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="WLBal"
                      value="work"
                    />
                    <label className="form-check-label">
                      Work-Life balance
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="leadership"
                      value="leader"
                    />
                    <label className="form-check-label">Leadership</label>
                  </div>

                  <h5 className="card-title">General Questions</h5>
                  <p className="card-text">
                    Do you want to add additional Questions
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="additionalQ"
                      value="true"
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="additionalQ"
                      value="false"
                    />
                    <label className="form-check-label">No</label>
                  </div>

                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}
        {this.state.showQuestions ? (
          <div className="container">
            <h1>Survay Question</h1>
            <hr />
            {questionsList}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Appraisal;
