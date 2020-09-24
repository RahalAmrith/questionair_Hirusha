import React, { Component } from "react";

import ReactEcharts from "echarts-for-react";
// import Config from "../../../Controller/Config";

class GeneralInterests extends Component {
  constructor() {
    super();
    this.state = {
      showBrand1: true,
      showBrand2: true,
    };
  }

  toggleBrands(brand) {
    switch (brand) {
      case 1:
        this.setState({
          showBrand1: !this.state.showBrand1,
        });
        break;
      case 2:
        this.setState({
          showBrand2: !this.state.showBrand2,
        });
        break;

      default:
        break;
    }
  }

  splitString(str) {
    if (str.match(/.{1,10}[\W:>:]/g)) {
      // var finalString = str.match(/.{1,10}[\W:>:]/g)[0] + "...";
      var finalString = str.match(/.{1,10}[\W:>:]/g).join("\n");
      finalString += str.split(/.{1,10}[\W:>:]/g)[
        str.split(/.{1,10}[\W:>:]/g).length - 1
      ];
      return finalString;
    } else {
      return str;
    }
  }
  render() {
    var dataMax = 0;
    const labels = this.props.data.map((data, i) => {
      return { text: this.splitString(data.title), max: 100 };
    });
    const brand1 = this.props.data.map((data, i) => {
      if (data.brand1 > dataMax) {
        dataMax = data.brand1;
      }
      return data.brand1;
    });
    const brand2 = this.props.data.map((data, i) => {
      if (data.brand2 > dataMax) {
        dataMax = data.brand2;
      }
      return data.brand2;
    });
    return (
      <div className="gridwrapper">
        <div className="gridwrapper__title">
          {/* <h2>General</h2> */}
        </div>
        <div className="gridwrapper__content">
          <div className="radarChart">
            <div className="legend">
              <div
                style={
                  this.state.showBrand1
                    ? { opacity: 1 }
                    : { opacity: 0.5, textDecoration: "line-through" }
                }
                onClick={() => this.toggleBrands(1)}
                className="brand1"
              >
                <div className="icon"></div>
                <span className="label">{this.props.brand1}</span>
              </div>
              <div
                style={
                  this.state.showBrand2
                    ? { opacity: 1 }
                    : { opacity: 0.5, textDecoration: "line-through" }
                }
                onClick={() => this.toggleBrands(2)}
                className="brand2"
              >
                <div className="icon"></div>
                <span className="label">{this.props.brand2}</span>
              </div>
            </div>
            <ReactEcharts
              option={{
                // toolbox: {
                //   show: true,
                //   feature: {
                //     restore: {
                //       show: true,
                //       title: "Reset",
                //     },
                //   },
                // },
                radar: [
                  {
                    scale: true,
                    indicator: labels,
                    center: ["60%", "50%"],
                    radius: 120,
                    shape: "circle",
                    splitNumber: 1,
                    splitLine: {
                      show: false,
                      lineStyle: {
                        opacity: 0.2,
                      },
                    },
                    splitArea: {
                      areaStyle: {
                        color: "#dfdfdf",
                      },
                    },
                    axisLine: {
                      lineStyle: {
                        // color: "#FFFFFF88",
                      },
                    },
                    indicator: this.props.data.map((data) => {
                      return {
                        name: this.splitString(data.title),
                        max: Math.ceil(Number.parseInt(dataMax) / 10) * 10,
                        // max:
                        //   data.brand1 > data.brand2
                        //     ? data.brand1 + 5
                        //     : data.brand2 + 5,
                      };
                    }),
                    name: {
                      textStyle: {
                        color: "#000000",
                      },
                    },

                    axisLabel: {
                      formatter: "{value}%",
                      show: true,
                      showMaxLabel: true,
                      showMinLabel: false,
                    },
                  },
                ],
                tooltip: {
                  trigger: "item",
                },
                series: [
                  {
                    name: this.props.brand1,
                    type: "radar",
                    animation: true,
                    silent: true,
                    symbol: "circle",
                    areaStyle: {
                      color: "#555555",
                      // opacity: 0.3,
                    },
                    lineStyle: {
                      opacity: 0,
                    },
                    label: {
                      formatter: "{c}%",
                      show: false,
                      color: "#555555",
                      fontSize: 8,
                    },
                    itemStyle: {
                      color: "#555555",
                    },
                    tooltip: {
                      show: true,
                      textStyle: {
                        fontSize: 10,
                      },
                      // formatter: ["{a}", "{b0}", "{c0}"].join("<br />"),
                      // formatter: '{b0}: {c0}<br />{b1}: {c1}',
                      formatter: (value) => {
                        // console.log(value);
                        var string = value.seriesName + "<br />";
                        value.value.map((data, i) => {
                          string += `${labels[i].text} : ${data}%<br />`;
                        });
                        return string;
                      },
                    },
                    data: [
                      {
                        value: this.state.showBrand1 ? brand1 : [],
                      },
                    ],
                  },
                  {
                    name: this.props.brand2,
                    type: "radar",
                    tooltip: {
                      show: true,
                    },
                    animation: true,
                    silent: true,
                    symbol: "circle",
                    areaStyle: {
                      color: "#555555",
                      opacity: 0.3,
                    },
                    lineStyle: {
                      opacity: 0,
                    },
                    label: {
                      formatter: "{c}%",
                      show: false,
                      color: "#55555588",
                      fontSize: 8,
                    },
                    itemStyle: {
                      color: "#55555588",
                    },
                    tooltip: {
                      show: true,
                      textStyle: {
                        fontSize: 10,
                      },
                      // formatter: ["{a}", "{b0}", "{c0}"].join("<br />"),
                      // formatter: '{b0}: {c0}<br />{b1}: {c1}',
                      formatter: (value) => {
                        // console.log(value);
                        var string = value.seriesName + "<br />";
                        value.value.map((data, i) => {
                          string += `${labels[i].text} : ${data}%<br />`;
                        });
                        return string;
                      },
                    },
                    data: [
                      {
                        value: this.state.showBrand2 ? brand2 : [],
                      },
                    ],
                  },

                  // tooltips
                  // {
                  //   name: this.props.brand1,
                  //   type: "radar",
                  //   animation: true,
                  //   silent: false,
                  //   symbol: "circle",
                  //   lineStyle: {
                  //     opacity: 0,
                  //   },
                  //   label: {
                  //     formatter: "{c}%",
                  //     show: false,
                  //     color: "#adadff55",
                  //     fontSize: 8,
                  //   },
                  //   itemStyle: {
                  //     color: "#adadff55",
                  //   },
                  //   tooltip: {
                  //     show: true,
                  //     textStyle: {
                  //       fontSize: 10,
                  //     },
                  //     // formatter: ["{a}", "{b0}", "{c0}"].join("<br />"),
                  //     // formatter: '{b0}: {c0}<br />{b1}: {c1}',
                  //     formatter: (value) => {
                  //       // console.log(value);
                  //       var string = value.seriesName + "<br />";
                  //       value.value.map((data, i) => {
                  //         string += `${labels[i].text} : ${data}%<br />`;
                  //       });
                  //       return string;
                  //     },
                  //   },
                  //   data: [
                  //     {
                  //       value: this.state.showBrand1 ? brand1 : [],
                  //     },
                  //   ],
                  // },
                  // {
                  //   name: this.props.brand2,
                  //   type: "radar",
                  //   tooltip: {
                  //     show: true,
                  //   },
                  //   animation: true,
                  //   silent: false,
                  //   symbol: "circle",
                  //   lineStyle: {
                  //     opacity: 0,
                  //   },
                  //   label: {
                  //     formatter: "{c}%",
                  //     show: false,
                  //     color: "#55555555",
                  //     fontSize: 8,
                  //   },
                  //   itemStyle: {
                  //     color: "#55555555",
                  //   },
                  //   tooltip: {
                  //     show: true,
                  //     textStyle: {
                  //       fontSize: 10,
                  //     },
                  //     // formatter: ["{a}", "{b0}", "{c0}"].join("<br />"),
                  //     // formatter: '{b0}: {c0}<br />{b1}: {c1}',
                  //     formatter: (value) => {
                  //       // console.log(value);
                  //       var string = value.seriesName + "<br />";
                  //       value.value.map((data, i) => {
                  //         string += `${labels[i].text} : ${data}%<br />`;
                  //       });
                  //       return string;
                  //     },
                  //   },
                  //   data: [
                  //     {
                  //       value: this.state.showBrand2 ? brand2 : [],
                  //     },
                  //   ],
                  // },
                ],
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInterests;
