import React, { Component } from 'react';
import { Modal } from 'react-bootstrap'
import Axios from 'axios'
import Config from '../../Config'

class KeyDrivers extends Component {
    constructor() {
        super();
        this.state = {
            showRes: false,
            showRes2: false,
            value: '',
            all_key_drivers: [],
            quize_type: '',
            ansewer_type: 'radio',
            answer: ''
        };



    }

    onmodl = async (e) => {
        e.preventDefault()
        const data = await Axios.post(`${Config.host}${Config.port}/api/apr/addkey`, { key: this.state.value })
        console.log(data);
        await this.load_data()
        this.setState({
            showRes: true,
            value: ''

        })
    }

    async componentDidMount() {
        await this.load_data()
        console.log(this.state.all_key_drivers);
    }

    async load_data() {
        const data = await Axios.post(`${Config.host}${Config.port}/api/apr/vkey`)
        this.setState({
            all_key_drivers: data.data.Employees
        })
    }


    modal2 = async (e) => {
        e.preventDefault()
        console.log("Radio", this.state.ansewer_type);
        console.log("Qusiton", this.state.answer);
        console.log("KWY", this.state.quize_type);
        const data = await Axios.post(`${Config.host}${Config.port}/api/apr/addq`,
            {
                type: this.state.ansewer_type,
                question: this.state.answer,
                keyid: this.state.quize_type
            }

        )

        console.log(data);
        this.setState({
            showRes2: true,
            answer: ''

        })


    }

    addNewDriver = (newone) => {
        this.setState({
            ...this.state.all_key_drivers,
            all_key_drivers: newone
        })
    }


    displayItems = () => {
        this.state.all_key_drivers.map((data, i) => {
            return (<h4 key={i}>{data.key_name}</h4>);
        });

    }
    changeValeu(e) {
        this.setState({
            value: e.target.value
        })
    }

    onChangeDrop(e) {
        this.setState({
            quize_type: e.target.value
        })
    }
    onChangeDrop2(e) {
        this.setState({
            ansewer_type: e.target.value
        })
    }
    onChangeTezxt(e) {
        this.setState({
            answer: e.target.value
        })
    }
    render() {
        const { all_key_drivers } = this.state
        return (
            <div className="container-fluid FU_main">



                <div className="container">
                    <div className="card mb-3">
                        <div className="card-header">Key Drivers</div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            {this.state.all_key_drivers && this.state.all_key_drivers.map((data, i) => {
                                                return (<ul><li key={data.key_id}>{data.key_name}</li></ul>);
                                            })}

                                        </div>


                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">

                                            <input
                                                type="text"
                                                class="form-control"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Key Drive"
                                                onChange={(e) => this.changeValeu(e)}
                                                value={this.state.value}
                                                required
                                            />
                                            <button
                                                className="btn btn-light  text-secondary mt-1 mb-1 p-1"
                                                style={{ borderColor: 'black', color: 'white !important' }} onClick={(e) => this.onmodl(e)}
                                            >
                                                Add New </button>
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>




                    <div className="card mb-3">
                        <div className="card-header">Quizzes</div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Quize Type</label>
                                            <select class="form-control" onChange={(e) => this.onChangeDrop(e)}>

                                                {this.state.all_key_drivers && this.state.all_key_drivers.map((data, i) => {
                                                    return (<option key={data.key_id} value={data.key_id}>{data.key_name}</option>);
                                                })}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Answer Type</label>
                                            <select class="form-control" onChange={(e) => this.onChangeDrop2(e)}>
                                                <option value="radio">Selection Answer</option>
                                                <option value="text">Text Answer</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">
                                                Question  </label>
                                            <textarea
                                                class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="4"
                                                placeholder="Enter your question here..."
                                                value={this.state.answer}
                                                onChange={(e) => this.onChangeTezxt(e)}
                                            ></textarea>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">
                                                Answers  </label>
                                            <textarea
                                                class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="4"
                                                placeholder="If multiple answers please enter comma separated values or keep this empty"
                                            ></textarea>
                                        </div>

                                    </div>
                                    <button
                                        onClick={(e) => this.modal2(e)}
                                        type="button"
                                        className="btn btn-light"
                                        style={{ borderColor: 'black' }}
                                    >
                                        Submit
                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header">Data</div>
                        <div className="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>a
                        </div>
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

                        <h6 className="m-1 p-2">New key driver value has added!</h6>
                    </Modal>
                    <Modal
                        size="md"
                        centered
                        show={this.state.showRes2}
                        onHide={() =>
                            this.setState({
                                showRes2: false,
                            })
                        }
                    >
                        <h6 className="m-1 p-2">New question has added to ""Employee Development" questionnaire bulk!</h6>
                    </Modal>
                </div>

            </div>
        );
    }
}


export default KeyDrivers;