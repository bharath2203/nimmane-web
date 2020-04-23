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

const SaleForm = (props) => {
  const classes = useStyles();
  const { changeHandler } = props;
  return (
    <React.Fragment>
      <div className="card root">
        <div className="card-title">Enter Sale details</div>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m4 input-field">
              <input
                id="price"
                name="price"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="price">Property Price</label>
              <span className="helper-text">
                Enter starting Price of Property
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SaleForm;
