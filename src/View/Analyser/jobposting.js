import React, { Component } from "react";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Loading from "../Loading/Loading";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

class JobPosting extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            btnsate: false,
            jobs: []
        };
    }

    async componentDidMount() {
        const res = await axios.post(`https://1w8w5rck4i.execute-api.us-east-1.amazonaws.com/Prod/jpops`,
            {
                operation: "view"
            }, {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        }).then(Response => {

            console.log(Response);
        })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="container-fluid FU_main">
                <Loading show={this.state.loading} />
                <div className="container-fluid">
                    <h3 className="mb-2" style={{ color: 'white' }}>Job Posting</h3>
                    <div className="card mb-3">
                        <h6 className="m-2">All Jobs</h6>
                        <table className="table" >
                            <thead>
                                <tr>
                                    <th scope="col">Jobdescription</th>
                                    <th scope="col">Expertize in</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">No of Q</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Padula Guruge</th>
                                    <td>90</td>
                                    <td>0776341997</td>
                                    <td>padula@gmail.com</td>
                                    <td><button className="btn btn-success"> View More</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Rahal Amirth</th>
                                    <td> 82</td>
                                    <td>0728343000</td>
                                    <td>rahalamrith46@gmail.com</td>
                                    <td><button className="btn btn-md btn-success"> View More</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Savindu Nipun</th>
                                    <td> 78</td>
                                    <td>0776345006</td>
                                    <td>snipun@gmail.com</td>
                                    <td><button className="btn btn-success"> View More</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Sandini Pitawala</th>
                                    <td> 77</td>
                                    <td>0771138255</td>
                                    <td>sandini97@gmail.com</td>
                                    <td><button className="btn btn-success"> View More</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Dulanjana Isuru</th>
                                    <td>60</td>
                                    <td>0713645444</td>
                                    <td>isududulanjana@gmail.com</td>
                                    <td><button className="btn btn-success"> View More</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Pasindu Chamod</th>
                                    <td>60</td>
                                    <td>0756241887</td>
                                    <td>chamod.p@gmail.com</td>
                                    <td><button className="btn btn-success"> View More</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobPosting;
