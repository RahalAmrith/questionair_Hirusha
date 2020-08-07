import React, { Component } from 'react';



class KeyDrivers extends Component {
    constructor() {
        super();
        this.state = {
            all_key_drivers: ['Employee Development', 'Culture', 'Work-Life balance', 'Leadership']
        };



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
                                                style={{ borderColor: 'black', color: 'white !important' }}
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
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default KeyDrivers;