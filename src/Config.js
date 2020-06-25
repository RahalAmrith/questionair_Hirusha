class Config {
  constructor() {
    this.host = "http://213.136.91.42";
    this.port = ":4001";

    this.api = {
      getQuestions: "/api/inits/q",
    };
  }
}

var obj = new Config();
export default obj;
