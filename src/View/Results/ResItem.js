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
      <div className="card mb-3">
        <div className="card-header">{this.props.data.question}</div>
        <div className="card-body">
          {/* =================================== */}
          {/* =============== Bar =============== */}
          {/* =================================== */}
          {this.props.data.type === "bar" ? (
            <Bar
              data={{
                labels: this.props.data.labels,
                datasets: this.props.data.datasets
              }}
              options={{
                title: {
                  display: false,
                  text: "Sales for the Month",
                },
                legend: {
                  display: true,
                },
                tooltips: {
                  color: "white",
                  backgroundColor: "#6986b1",
                  label: function (tooltipItem, data) {
                    return tooltipItem.xLabel;
                  },
                  displayColors: false,
                },

                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },

                label: {
                  display: false,
                },
              }}
            />
          ) : null}
          {/* =================================== */}
          {/* =============== PIE =============== */}
          {/* =================================== */}
          {this.props.data.type === "pie" ? (
            <Doughnut
              data={{
                labels: this.props.data.labels,
                datasets: this.props.data.datasets
              }}
              options={{
                title: {
                  display: false,
                  text: "Sales for the Month",
                },
                legend: {
                  display: true,
                },
                tooltips: {
                  color: "white",
                  backgroundColor: "#6986b1",
                  label: function (tooltipItem, data) {
                    return tooltipItem.xLabel;
                  },
                  displayColors: false,
                },

                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        drawOnChartArea: false,
                      },
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },

                label: {
                  display: false,
                },
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ResItem;
