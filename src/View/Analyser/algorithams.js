import React, { Component } from "react";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Loading from "../Loading/Loading";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import "./algo.css";

class Algorithams extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            btnsate: false,
            form: false,
            algo: 'Algorithm_1',
            al1: {
                jobReqID: '',
                algorithm: 1,
                education_w: 0,
                experiance_w: 0,
                technicalSkills_w: 0,
                softSkills_w: 0,
                aptitudeT_w: 0,
                technicalQ_w: 0
            },
            al3: {
                jobReqID: '',
                algorithm: 3,
                education_w: 0,
                experiance_w: 0,
                technicalSkills_w: 0,
                softSkills_w: 0,
                aptitudeT_w: 0,
                technicalQ_w: 0
            },
            al2: {
                jobReqID: '',
                algorithm: 2,
                education_w: '',
                experiance_w: '',
                technicalSkills_w: '',
                softSkills_w: '',
                aptitudeT_w: '',
                technicalQ_w: ''
            }
        };
    }
    formValueChange = async (e) => {
        await this.setState({ [e.target.name]: e.target.value })
        await console.log("Called Trigger ->", this.state.algo);
        if (this.state.algo == "Algorithm_2") {
            this.setState({
                form: true
            })
        } else {
            this.setState({
                form: false
            })
        }
        await this.return_form()
    }


    return_form() {
        if (this.state.form == true) {
            return (<div>
                <div className="form-group">
                    <label>jobReq_ID</label>
                    <input type="text" name="jobReq_ID" className="form-control" />
                </div>
                <div className="form-group">
                    <label>education_w</label>
                    <input type="text" name="education_w" className="form-control" />
                </div>
                <div className="form-group">
                    <label>experiance_w</label>
                    <input type="text" name="experiance_w" className="form-control" />
                </div>
                <div className="form-group">
                    <label>technicalSkills_w</label>
                    <input type="text" name="technicalSkills_w" className="form-control" />
                </div>
                <div className="form-group">
                    <label>softSkills_w</label>
                    <input type="text" name="softSkills_w" className="form-control" />
                </div>
                <div className="form-group">
                    <label>aptitudeT_w</label>
                    <input type="text" name="aptitudeT_w" className="form-control" />
                </div>
                <div className="form-group">
                    <label>technicalQ_w</label>
                    <input type="text" className="form-control" name="technicalQ_w" />
                </div>
            </div>)
        } else {
            return null;
        }
    }
    render() {
        return (
            <div className="container-fluid FU_main">
                <Loading show={this.state.loading} />
                <div className="container">
                    <h3 className="mb-2" style={{ color: 'white' }}>Algorithms</h3>
                    <div className="card mb-3">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Algorithm </label>
                                            <select class="form-control" name="algo" onChange={(e) => this.formValueChange(e)}>
                                                <option value="Algorithm_1">Algorithm 1</option>
                                                <option value="Algorithm_2">Algorithm 2</option>
                                                <option value="Algorithm_3">Algorithm 3</option>
                                            </select>
                                        </div>
                                        {this.return_form()}
                                        <div class="form-group">
                                            <button className="btn btn-md btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Algorithams;
