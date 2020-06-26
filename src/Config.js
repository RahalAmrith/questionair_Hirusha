class Config {
  constructor() {
    this.host = "http://13.59.253.94";
    this.port = ":5000";

    this.api = {
      getQuestions: "/api/inits/q",
      uploadCV : "/api/emp/score",

      // getSurvayQuestions
      getSurvayQuestions : "/api/apr/appr",
      setSurvayAns : "/api/apr/ans",

      // Project Analysis
      getEmpData : "/api/trend/recruit"
    };
  }
}

var obj = new Config();
export default obj;
