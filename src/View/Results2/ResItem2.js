import ReactEcharts from "echarts-for-react";
import React, { Component } from "react";

import { Bar, Line, Doughnut } from "react-chartjs-2";

// import './ResItem.css';

class ResItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card mb-3">
          <div className="card-header">{this.props.data.question}</div>
          <div className="card-body">
            {/* =================================== */}
            {/* =============== Bar =============== */}
            {/* =================================== */}
            {this.props.data.type === "bar" ? (
              <ReactEcharts
                option={{
                  color: "#0055ff",
                  xAxis: {
                    type: "category",
                    data: this.props.data.labels,
                    axisLabel: {
                      rotate: 60,
                    },
                  },
                  yAxis: {
                    type: "value",
                  },
                  series: [
                    {
                      data: this.props.data.values,
                      type: "bar",
                      showBackground: false,
                      backgroundStyle: {
                        color: "rgba(220, 220, 220, 0.8)",
                      },
                    },
                  ],
                }}
              />
            ) : null}
            {/* =================================== */}
            {/* =============== PIE =============== */}
            {/* =================================== */}
            {this.props.data.type === "pie" ? (
              <ReactEcharts
                option={{
                  tooltip: {
                    trigger: "item",
                    formatter: "{b} : {c} ({d}%)",
                  },

                  series: [
                    {
                      name: "",
                      type: "pie",
                      radius: [20, 110],
                      center: ["50%", "50%"],
                      roseType: "area",
                      label: {
                        show: true,
                      },
                      emphasis: {
                        label: {
                          show: true,
                        },
                      },
                      data: this.props.data.labels.map((data, i) => {
                        return {
                          value: this.props.data.values[i],
                          name: data,
                        };
                      }),
                    },
                  ],
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default ResItem;
