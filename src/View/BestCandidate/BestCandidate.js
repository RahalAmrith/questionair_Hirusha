import React, { Component } from "react";
import Config from "../../Config";
import { FilePond, registerPlugin } from "react-filepond";

import axios from "axios";

import Loading from "../Loading/Loading";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

class BestCandidate extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      btnsate: false
   

  
    };
  }



onchangebtnstate =() => {
    this.setState({
        btnsate:true
    })
}





  viewtabedate = () =>{
      if(this.state.btnsate == true){
          return (  <div className="card mb-3"> <div className="card-body"><table className="table" >
          <thead>
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Total Score</th>
              <th scope="col">Contact No</th>
              <th scope="col">Email</th>
              <th scope="col">Score Card</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <th scope="row">Padula Guruge</th>
          <td> 90</td>
          <td>0776341997</td>
          <td>padula@gmail.com</td>
          <td>34</td>
        </tr>
          <tr>
          <th scope="row">Rahal Amirth</th>
          <td> 82</td>
          <td>0728343000</td>
          <td>rahalamrith46@gmail.com</td>
          <td>24</td>
        </tr>
          <tr>
          <th scope="row">Savindu Nipun</th>
          <td> 78</td>
          <td>0776345006</td>
          <td>snipun@gmail.com</td>
          <td>44</td>
        </tr>
          <tr>
          <th scope="row">Sandini Pitawala</th>
          <td> 77</td>
          <td>0771138255</td>
          <td>sandini97@gmail.com</td>
          <td>40</td>
        </tr>
          <tr>
          <th scope="row">Dulanjana Isuru</th>
          <td>60</td>
          <td>0713645444</td>
          <td>isududulanjana@gmail.com</td>
          <td>50</td>
        </tr>
          <tr>
          <th scope="row">Pasindu Chamod</th>
          <td>60</td>
          <td>0756241887</td>
          <td>chamod.p@gmail.com</td>
          <td>48</td>
        </tr>
          </tbody>
        </table> </div> </div>);
      }
  }   






  render() {

    return (
      <div className="container-fluid FU_main">
        <Loading show={this.state.loading} />

        <div className="container">
          <h3 className="mb-2" style={{color:'white'}}>Find Top  Candidates</h3>
          <h6 className="mb-2" style={{color:'white'}}>Retrieve the verified results after Interview process and Aptitude test of candidates.</h6>

          <div className="card mb-3">
            {/* <div className="card-header">Define criteria</div> */}
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Search query ID </label>
                      <input
                        type="text"
                        class="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Search query ID "
                      />
                    </div>
                 
                   
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Algorithm </label>
                        <select   class="form-control">
                            <option>Algorithm 1</option>
                            <option>Algorithm 2</option>
                            <option>Algorithm 3</option>
                        </select>
                    </div>
                   
                  </div>
                </div>
              </form>
            </div>
          </div>

      
        

          <button  className="btn btn-light text-secondary" onClick={()=> this.onchangebtnstate()}>
            View top Candidates
          </button>

          <hr />
        <br/>
        {this.viewtabedate()}
        </div>

       
      </div>
    );
  }
}

export default BestCandidate;
