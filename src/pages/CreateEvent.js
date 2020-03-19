import React from "react";
import "./Content.css";
import SwitchToggle from './SwitchToggle'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"
import DateInput from './DateInput'
import TimePickers from './TimePicker'

function CreateEvent() {
  return (
    <>
      <div className="workSection">
      <div className="heading">
          <h1>Create Events</h1>
        </div>
        <div className="workAreaBg">
        <div className="formcontainer">
          <div className="row">
            <div className="col-md-10 offset-md-1 ">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Select Event</label>
                    <select className="form-control">
                      <option>--- Select Event ---</option>
                      <option>Tour</option>
                      <option>Event</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                     
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-md-6">
                    <div className="form-group dateTime">
                       <label> Date</label>
                         <DateInput/>
                         
                  </div>
                    </div>

                    <div className="col-md-6">
                    <div className="form-group dateTime">
                       <label> Time</label>
                         <TimePickers/>
                  </div>
                    </div>

                  </div>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Start Location</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Start Locationme"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>End Location</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="End Location"
                        />
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="form-group">
                    <textarea
                          type="text"
                          className="form-control"
                          placeholder="Description"
                          rows="8"
                      />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="tableResult">
        <div className="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Event Date</th>
                    <th>Start Location</th>
                    <th>End Location</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Off route cycle racing</td>
                    <td>13/3/2020/ 12PM</td>
                    <td>Delhi</td>
                    <td>Agra</td>
                    <td className="tdWidth">
                      Notable cycling races include the Tour de France,
                       a three-week stage race principally through France and ending in Paris, 
                    </td>
                    <td>
                      <SwitchToggle/>
                    </td>
                    <td>
                      <div className="actionbtn">
                    <button 
                      type="button" 
                      class="btn btn-warning">
                      <FontAwesomeIcon icon={faEdit} />
                      </button> 

                      <button 
                      type="button" 
                      class="btn btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                      </button> 
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Off route cycle racing</td>
                    <td>13/3/2020/ 12PM</td>
                    <td>Delhi</td>
                    <td>Agra</td>
                    <td className="tdWidth">
                      Notable cycling races include the Tour de France,
                       a three-week stage race principally through France and ending in Paris, 
                    </td>
                    <td>
                      <SwitchToggle/>
                    </td>
                    <td>
                      <div className="actionbtn">
                    <button 
                      type="button" 
                      class="btn btn-warning">
                      <FontAwesomeIcon icon={faEdit} />
                      </button> 

                      <button 
                      type="button" 
                      class="btn btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                      </button> 
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div> */}
      </div>

      
      </div>
    </>
  );
}

export default CreateEvent;
