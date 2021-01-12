import React, { Component } from "react";

import "./Appraisal.css";
import Question from "./Question";
import Axios from "axios";
import { Modal } from "react-bootstrap";

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
      showRes: false,

      employee: [],
      employee_q: [],
      emp_list:[],
      ques_list:[],
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
      ids: []
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

  chnagemodal = (e) => {
    e.preventDefault()
    this.setState({
      showRes: true,

    })
  }



  componentDidMount() {
    this.load_data_empl()
    this.table_data()
  }

  // --------------------
  // --------------------
  // --------------------
  async load_data_empl() {
    const data = await Axios.post(`${Config.host}${Config.port}/api/emp/view`)
    await this.setState({
      employee: data.data.Employees
    })
    console.log(this.state.employee);
  }

  table_data = async (e) => {

    const data = await Axios.post(`${Config.host}${Config.port}/api/apr/vq`)
    console.log(data);

    this.setState({
      employee_q: data.data.Employees
    })

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
            <h3 style={{ color: 'white' }}>Employee Engagement Survey Generator</h3>
            <div className="card">
              <div className="card-header">Select Employees</div>
              <div className="card-body">
                <form >
                  <h5 className="card-title">Select Employees</h5>
                  {this.state.employee && this.state.employee.map((data, i) => {
                    return (<div className="form-check" key={i}>

                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="emp_email"
                        value={`${data.email}`}
                      />
                      <label className="form-check-label">
                        {data.email}
                      </label>
                    </div>);
                  })}
                  <div className="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Key Id</th>
                          <th scope="col" style={{ textAlign: 'left' }}>Question</th>
                          <th scope="col">Type</th>
                        </tr>
                      </thead>
                      <tbody>

                        {this.state.employee_q && this.state.employee_q.map((data, i) => {
                          return (

                            <tr key={i}>
                              <th >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="qid"
                                  value={`${data.q_id}`}
                                />{data.q_id}</th>
                              <td style={{ textAlign: 'left' }}>{data.question}</td>
                              <td>{data.q_type}</td>

                            </tr>
                          );
                        })}

                      </tbody>
                    </table>
                  </div>
                  <button className="btn btn-primary" onClick={(e) => this.chnagemodal(e)}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        )}

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
          <h6 className="m-1 p-2">Employee Engagement Survey has distributed via employee emails.</h6>
        </Modal>
      </div>
    );
  }
}

export default Appraisal;
