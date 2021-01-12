import React, { Component } from "react";

import Question from "../Appraisal/Question";
import Axios from "axios";

import Config from "../../Config";
import Loading from "../Loading/Loading";
import ResItem from "./ResItem2";

// import './Results.css';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      results: [],
      tableRes: [],
    };
  }
  async UNSAFE_componentWillMount() {
    await this.getResult();
  }

  async getResult() {
    await this.setState({
      loading: true,
    });

    await Axios.get(
      `${Config.host}${Config.port}${Config.api.getSurveySummary}`
    )
      .then(async (Response) => {
        console.log(Response.data);
        var AllCharts = Response.data;

        var BarCharts = {};

        await AllCharts.bar.map((data, i) => {
          if (BarCharts[`Chart${data.q_id}`] == undefined) {
            BarCharts[`Chart${data.q_id}`] = {
              question: AllCharts.questions[data.q_id - 1].question,
              type: "bar",
              labels: [],
              values: [],
            };
          }
          BarCharts[`Chart${data.q_id}`].labels.push(
            data.answer.replace(" ", "\n")
          );
          BarCharts[`Chart${data.q_id}`].values.push(data.count);
        });

        console.log(BarCharts);

        await AllCharts.pie.map((data, i) => {
          if (
            BarCharts[`Chart${data.q_id}`] == undefined ||
            BarCharts[`Chart${data.q_id}`] == null
          ) {
            BarCharts[`Chart${data.q_id}`] = {
              question: AllCharts.questions[data.q_id - 1].question,
              type: "pie",
              labels: [],
              values: [],
            };
          }
          BarCharts[`Chart${data.q_id}`].labels.push(data.answer_val);
          BarCharts[`Chart${data.q_id}`].values.push(data.count);
        });

        console.log(BarCharts);
        this.setState({
          // results: Response.data.results.data,
          results: BarCharts,
          tableRes: AllCharts.table,
        });
      })
      .catch((Error) => {
        console.error(Error);
        // if (Error.response.staus >= 400 && Error.response.staus <= 499) {
        //   alert("Sorry, Your session is expired or not authorized");
        // }
      })
      .finally(() => {
        this.setState({ showQuestions: true, loading: false });
      });
  }

  render() {
    var resultsCards = Object.keys(this.state.results).map((data, i) => {
      return <ResItem data={this.state.results[data]} key={i} index={i} />;
    });

    return (
      <div className="container-fluid AP_main">
        <Loading show={this.state.loading} />
        <div className="container row">
          {resultsCards}
          <div className="col-sm-12">
            <div className="card mb-3">
              <div className="card-header">Sample Title</div>
              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Answer value</th>
                      <th scope="col">Answer</th>
                      <th scope="col">Pre value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableRes.map((data, i) => {
                      return (
                        <tr>
                          <td>{data.answer_val}</td>
                          <td align="right">{data.answer}</td>
                          <td>{data.preval}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* {JSON.stringify(this.state.results)} */}
      </div>
    );
  }
}

export default Results;
