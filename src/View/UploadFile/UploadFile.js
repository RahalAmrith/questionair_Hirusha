import React, { Component } from "react";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import "./UploadFile.css";

class UploadFile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid FU_main">
        <div className="container">
          <h1>Select and Upload your CV(s) here</h1>

          <FilePond
            server={`${Config.host}${Config.port}${Config.api.uploadCV}`}
            maxFiles={20}
            allowMultiple
            
          />
        </div>
      </div>
    );
  }
}

export default UploadFile;
