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

const RentForm = (props) => {
  const classes = useStyles();
  const { changeHandler } = props;
  return (
    <React.Fragment>
      <div className="card root">
        <div className="card-title">Enter Sale details</div>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m6 input-field">
              <input
                id="advance"
                name="advance"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="advance">Advance of Property</label>
              <span className="helper-text">Enter advance of Property</span>
            </div>
            <div className="col s12 m6 input-field">
              <input
                id="rent"
                name="rent"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="rent">Rent of Property</label>
              <span className="helper-text">Enter rent of Property</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RentForm;
