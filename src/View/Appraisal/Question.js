import React, { Component } from "react";

import axios from "axios";

import Config from "../../Config";

import Tick from "./tick.png";
// import './Question.css';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      qIndex: 0,
      question: "",
      type: "",
      paras: "",

      txt_answer: "",

      // answerState
      answered: false,
      // Questions
      questions: [],
    };
  }

  async UNSAFE_componentWillMount() {
    await this.setState({
      loading: true,
    });
    await this.setState({ ...this.props.data });
    await this.setState({
      loading: false,
    });
  }

  async setAnswer(e) {
    e.preventDefault();
    e.persist();

    await this.setState({
      loading: true,
    });
    var req = {
      ans: "",
    };
    if (this.state.type === "checkbox") {
      req.ans = [];
      for (let i = 1; i < e.target.children[0].children.length; i++) {
        if (e.target.children[0].children[i].children[0].checked) {
          req.ans.push(e.target.children[0].children[i].children[0].name);
        }
      }
      //   console.log(req.ans);
    } else {
      req = {
        ans: e.target.ans.value || "",
      };
      //   console.log(req.ans);
    }

    await this.setState({
      txt_answer: req.ans,
    });

    axios
      .post(`${Config.host}${Config.port}${Config.api.setSurvayAns}`, req)
      .then(async (Response) => {
        // console.log(Response);

        this.setState({
          answered: true,
        });
      })
      .catch((err) => {
        console.error(err);

        alert("Faild to submit answer. Please Try again.");
      })
      .finally(async () => {
        await this.setState({
          loading: false,
        });
      });
  }

  addQuestions() {
    var q = {
      index: this.state.qIndex,
      question: this.state.question,
      answer: this.state.txt_answer,
    };

    var qArr = this.state.questions;

    qArr.push(q);
    this.setState({
      questions: qArr,
    });
  }

  getRadios() {
    var radios = this.state.paras.map((data, i) => {
      return (
        <div className="form-check" key={i}>
          <input
            className="form-check-input"
            type="radio"
            id={data}
            name="ans"
            value={data}
          />
          <label className="form-check-label">{data}</label>
        </div>
      );
    });

    return radios;
  }

  getcheckboxs() {
    var checks = this.state.paras.map((data, i) => {
      return (
        <div className="form-check" key={i}>
          <input
            className="form-check-input"
            type="checkbox"
            name={data}
            id={data}
            value={data}
          />
          <label className="form-check-label">{data}</label>
        </div>
      );
    });

    return checks;
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">
          {this.state.qIndex}. {this.state.question}
        </div>
        <div className="card-body">
          {/* =========================================== */}
          {/* =============== Text answer =============== */}
          {/* =========================================== */}
          {this.state.type === "text" ? (
            <div className="Q_answer">
              <form onSubmit={(e) => this.setAnswer(e)}>
                <div className="form-group">
                  <label>Your Answer</label>
                  <input
                    required
                    type="text"
                    name="ans"
                    className="form-control"
                    placeholder="Enter Your Answer"
                    onChange={(e) =>
                      this.setState({ txt_answer: e.target.value })
                    }
                    value={this.state.txt_answer}
                  />
                </div>
                <button type="Submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          ) : null}
          {/* =========================================== */}
          {/* =============== email answer =============== */}
          {/* =========================================== */}
          {this.state.type === "email" ? (
            <div className="Q_answer">
              <form onSubmit={(e) => this.setAnswer(e)}>
                <div className="form-group">
                  <label>Your Answer</label>
                  <input
                    required
                    type="email"
                    name="ans"
                    className="form-control"
                    placeholder="Enter Email Address"
                    onChange={(e) =>
                      this.setState({ txt_answer: e.target.value })
                    }
                    value={this.state.txt_answer}
                  />
                </div>
                <button type="Submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          ) : null}
          {/* =========================================== */}
          {/* =============== number answer =============== */}
          {/* =========================================== */}
          {this.state.type === "number" ? (
            <div className="Q_answer">
              <form onSubmit={(e) => this.setAnswer(e)}>
                <div className="form-group">
                  <label>Your Answer</label>
                  <input
                    required
                    type="number"
                    name="ans"
                    className="form-control"
                    placeholder="Enter Your Answer"
                    onChange={(e) =>
                      this.setState({ txt_answer: e.target.value })
                    }
                    value={this.state.txt_answer}
                  />
                </div>
                <button type="Submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          ) : null}

          {/* ============================================ */}
          {/* =============== Radio answer =============== */}
          {/* ============================================ */}
          {this.state.type === "radio" ? (
            <div className="Q_answer">
              <form onSubmit={(e) => this.setAnswer(e)}>
                <div className="form-group">
                  <label>Your Answer</label>
                  {this.getRadios()}
                </div>
                <button type="Submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          ) : null}

          {/* ============================================ */}
          {/* =============== checkbox answer =============== */}
          {/* ============================================ */}
          {this.state.type === "checkbox" ? (
            <div className="Q_answer">
              <form onSubmit={(e) => this.setAnswer(e)}>
                <div className="form-group">
                  <label>Your Answer</label>
                  {this.getcheckboxs()}
                </div>
                <button type="Submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          ) : null}

          {this.state.answered ? (
            <img alt="" style={{ float: "right", height: "40px" }} src={Tick} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Question;
