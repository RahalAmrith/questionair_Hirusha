import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import Loading from "../Loading/Loading";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class Initials extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            res: [],
            showRes: false,
            jobdescription: '',
            expertizein: '',
            minexperiance_in_similar_role: '',
            minedu_qualification: '',
            major: '',
            minGPA: '',
            maxAGE: '',
            gender: '',
            maritalStatus: '',
            languages: [],
            ComputerSkills: [],
            ProfesstionalQ: [],
            keyWords: [],
            fromDate: '',
            toDate: '',
            accuracy: ''

        };
    }

    handleChange(languages) {
        this.setState({ languages })
        console.log(this.state.languages);
    }

    async handleSubmit() {
        this.setState({
            loading: true,
        });

        await axios
            .get(
                `https://zjmujtqcwg.execute-api.us-east-1.amazonaws.com/test/clientrequest`
            )
            .then((Response) => {
                console.log(Response);
                this.setState({ res: Response.data.candidate });
                this.setState({
                    loading: false,
                });
            })
            .catch((Error) => {
                console.error(Error);

                this.setState({
                    res: [],
                });
                this.setState({
                    loading: false,
                });
            })
            .finally(() => {
                this.setState({
                    showRes: true,
                });
            });
    }

    render() {
        var empList = this.state.res.map((data, i) => {
            return (
                <tr>
                    <th scope="row">{i}</th>
                    <td>{data.uid}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                </tr>
            );
        });
        return (
            <div className="container-fluid SL_main">
                <Loading show={this.state.loading} />
                <div className="container">
                    <h3 style={{ color: 'white' }}>Analyser / Initial
    </h3>
                </div>

                <div className="container mb-5">
                    <form>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Job Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        name="jobdescription"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Expertise in</label>
                                    <input type="text" className="form-control" name="expertizein" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Minimum experience in similer role</label>
                                    <input type="text" className="form-control" name="minexperiance_in_similar_role" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Minimal Educational Qualification</label>
                                    <select className="form-control" name="minedu_qualification">
                                        <option value="BBA">BBA</option>
                                        <option value="BSc">BSc.</option>
                                        <option value="BTech">BTech</option>
                                        <option value="BIT">BIT</option>
                                        <option value="BEng">BEng</option>
                                        <option value="MSc">MSc</option>
                                        <option value="MBA">MBA</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Major / Specialization</label>
                                    <select className="form-control" name="major">
                                        <option value="Information Techology">Information Techology</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Network Engineering">Network Engineering</option>
                                        <option value="Systems Engineering">Systems Engineering</option>
                                        <option value="Information System Engineering">Information System Engineering</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="form-group">
                                    <label>Minimum GPA</label>
                                    <input type="text" className="form-control" name="minGPA" />
                                </div>
                            </div>
                            <div className="col-md-4 mb-2">
                                <div className="form-group">
                                    <label>Max Age</label>
                                    <input type="text" className="form-control" name="maxAGE" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-control" name="gender">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Marital Status</label>
                                    <select className="form-control" name="maritalStatus">
                                        <option value="Maried">Maried</option>
                                        <option value="Single">Single</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Fluent Languages</label>
                                    <TagsInput value={this.state.languages} onChange={() => this.handleChange} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Computer Skills</label>

                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Professional Qualification</label>

                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Keywords</label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>From</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="fromDate"
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>To</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="toDate"
                                    />
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="form-group">
                                    <label>Accuracy</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="accuracy"
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <button
                                    onClick={() => this.handleSubmit()}
                                    type="button"
                                    className="btn btn-light"
                                >
                                    Submit
                    </button>
                            </div>
                        </div>
                    </form>
                </div>

                <Modal
                    size="md"
                    centered
                    show={this.state.showRes}
                    onHide={() =>
                        this.setState({
                            showRes: false,
                        })
                    }
                >
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">uid</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                            </tr>
                        </thead>
                        <tbody>{empList}</tbody>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default Initials;
