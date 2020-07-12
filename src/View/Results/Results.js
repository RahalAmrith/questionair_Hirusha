import React, { Component } from "react";

import Question from "../Appraisal/Question";
import Axios from "axios";

import Config from "../../Config";
import Loading from "../Loading/Loading";
import ResItem from "./ResItem";

// import './Results.css';

class Results extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      results: [],
    };
  }
  async UNSAFE_componentWillMount() {
    await this.getResult();
  }

  async getResult() {
    await this.setState({
      loading: true,
    });

    var ReqData = {
      token: this.props.match.params.id,
    };

    await Axios.post(
      `${Config.host}${Config.port}${Config.api.setSurvayres}`,
      ReqData
    )
      .then(async (Response) => {
        this.setState({
          results: Response.data.results.data,
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
    var resultsCards = this.state.results.map((data, i) => {
      return <ResItem data={data} key={i} index={i} />;
    });
    return (
      <div className="container-fluid AP_main">
        <Loading show={this.state.loading} />
        <div className="container">{resultsCards}</div>
        {/* {JSON.stringify(this.state.results)} */}
      </div>
    );
  }
}

export default Results;
