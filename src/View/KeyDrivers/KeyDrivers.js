import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'


class KeyDrivers extends Component {
    constructor() {
        super();
        this.state = {
            showRes: false,
            showRes2: false,

            all_key_drivers: ['Employee Development', 'Culture', 'Work-Life balance', 'Leadership']
        };



    }

    onmodl =(e)=>{
        e.preventDefault()
        this.setState({
            showRes: true,

        })
    }

    modal2 =(e)=>{
        e.preventDefault()
        this.setState({
            showRes2: true,

        })
    }

    addNewDriver = (newone) => {
        this.setState({
            ...this.state.all_key_drivers,
            all_key_drivers: newone
        })
    }

    componentWillMount() {
        this.displayItems()
    }
    displayItems = () => {
        this.state.all_key_drivers.map((data, i) => {
            return (<h4 key={i}>{data}</h4>);
        });

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
                                        <label for="exampleInputEmail1">Employee Development</label> <br/>
                                        <label for="exampleInputEmail1">Culture</label> <br/>
                                        <label for="exampleInputEmail1">Work-Life balance</label> <br/>
                                        <label for="exampleInputEmail1">Leadership</label> <br/>

                                            {this.displayItems()}

                                        </div>


                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">

                                            <input
                                                type="text"
                                                class="form-control"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Key Drive"
                                            />
                                            <button
                                                className="btn btn-light  text-secondary mt-1 mb-1 p-1"
                                                style={{ borderColor: 'black', color: 'white !important' }} onClick={(e)=>this.onmodl(e)}
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
                                            <select class="form-control">
                                                <option>Employee Development</option>
                                                <option>Culture</option>
                                                <option>Work-Life balance</option>
                                                <option>Leadership</option>
                                                <option>Sample Type</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Answer Type</label>
                                            <select class="form-control">
                                                <option>Radio Buttons</option>
                                                <option>Check Boxes</option>
                                                <option>Text</option>
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
                                                placeholder="Enter your question here...
                                                "
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
                  style={{borderColor:'black'}}
                >
                  Submit
                </button>
                                </div>
                            </form>
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