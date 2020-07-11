class Config {
  constructor() {
    this.host = "http://13.59.253.94";
    this.port = ":5000";

    this.api = {
      getQuestions: "/api/inits/q",
      uploadCV : "/api/emp/score",

      // getSurvayQuestions
      getEmaildSurvayQuestions : "/api/apr/appr",
      getSurvayQuestions : "/api/apr/camp",
      setSurvayAns : "/api/apr/ans",

      // Project Analysis
      getEmpData : "/api/trend/recruit",
      sortlisting : "/sortlisting"
    };
  }
}

var obj = new Config();
export default obj;
