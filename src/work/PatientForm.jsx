import React, { Component } from "react";
import M from "materialize-css";

class PatientForm extends Component {
  state = {};

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-title">Patient Information</div>
            <div className="card-content">
              <form action="">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="first_name" type="text" class="validate"></input>
                    <label for="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" class="validate"></input>
                    <label for="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <input
                      placeholder="Arrived Date"
                      id="arrived_date"
                      type="text"
                      class="datepicker"
                    ></input>
                  </div>
                  <div className="col s6">
                    <input
                      placeholder="Date of Discharge"
                      id="discharge_date"
                      type="text"
                      class="datepicker"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <select>
                      <option value="" disabled selected>
                        Choose your select
                      </option>
                      <option value="1">Walk</option>
                      <option value="2">Wheel Chair</option>
                    </select>
                    <label>Mode of Arrival</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="pan" type="text" class="validate"></input>
                    <label for="pan">Patient Account Number</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <select>
                      <option value="" disabled selected>
                        Choose your select
                      </option>
                      <option value="1">Admit</option>
                      <option value="2">Discharge</option>
                      <option value="3">Eloped</option>
                    </select>
                    <label>Disposition Values</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="esi_code" type="text" class="validate"></input>
                    <label for="esi_code">ESI Code</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="fap" type="number" class="validate"></input>
                    <label for="fap">First Attended person</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="provider" type="text" class="validate"></input>
                    <label for="provider">Provider</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="nurse" type="text" class="validate"></input>
                    <label for="nurse">Nurse Registered</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <input
                      placeholder="Initial Physician visit date"
                      type="text"
                      class="datepicker"
                    ></input>
                  </div>
                  <div className="col s6">
                    <input
                      placeholder="SRC Care Complete Date"
                      id="discharge_date"
                      type="text"
                      class="datepicker"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <input
                      placeholder="ED Room Assignment Time"
                      id="discharge_date"
                      type="datetime"
                      class="datepicker"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="unit_name" type="text" class="validate"></input>
                    <label for="unit_name">Unit Name</label>
                  </div>
                </div>
                <div className="row center">
                  <button className="waves-effect waves-light btn-large">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientForm;
