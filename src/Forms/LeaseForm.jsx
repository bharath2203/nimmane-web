import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  input: {
    margin: 20,
    width: "80%",
  },
  title: {
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "uppercase",
  },
});

const LeaseForm = (props) => {
  const classes = useStyles();
  const { changeHandler } = props;
  return (
    <React.Fragment>
      <div className="card root">
        <div className="card-title">Enter Lease details</div>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m4 input-field">
              <input
                id="lease"
                name="lease"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="lease">Lease Price</label>
              <span className="helper-text">
                Enter Lease amount of Property
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeaseForm;
