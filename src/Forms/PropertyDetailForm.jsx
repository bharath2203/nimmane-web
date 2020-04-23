import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { MenuItem, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
  label: {},
  input: {
    margin: theme.spacing(1),
    width: "80%",
  },
  title: {
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
}));

const PropertyDetailForm = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="card root">
        <div className="card-title">Enter Property Details</div>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m4 input-field">
              <input
                id="no_of_bedrooms"
                name="no_of_bedrooms"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="no_of_bedrooms">Bed Rooms</label>
              <span className="helper-text">Enter No of Bedrooms</span>
            </div>
            <div className="col s12 m4 input-field">
              <input
                id="no_of_bathrooms"
                name="no_of_bathrooms"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="no_of_bathrooms">Bath Rooms</label>
              <span className="helper-text">Enter No of Bath Rooms</span>
            </div>
            <div className="col s12 m4 input-field">
              <input
                id="no_of_poojarooms"
                name="no_of_poojarooms"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="no_of_poojarooms">Pooja Rooms</label>
              <span className="helper-text">Enter No of Pooja Rooms</span>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4 input-field">
              <input
                id="no_of_storerooms"
                name="no_of_storerooms"
                type="number"
                className="validate"
                onChange={props.changed}
                required
              ></input>
              <label for="no_of_storerooms">Store Rooms</label>
              <span className="helper-text">Enter No of Store Rooms</span>
            </div>
          </div>
          <div className="row">
            <Grid container>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <FormControl className={classes.formControl} variant="outlined">
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    name="status"
                    label="Status"
                    value={props.propertyDetail.status}
                    onChange={props.changed}
                  >
                    <MenuItem value={0}>Ready to Move</MenuItem>
                    <MenuItem value={1}>Will be moved soon</MenuItem>
                    <MenuItem value={2}>Takes more than month</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="status-select" className={classes.label}>
                    Property age
                  </InputLabel>
                  <Select
                    labelId="property_age"
                    name="property_age"
                    label="Property Age"
                    value={props.propertyDetail.property_age}
                    onChange={props.changed}
                  >
                    <MenuItem value={0}>New</MenuItem>
                    <MenuItem value={1}>Less than 3 years</MenuItem>
                    <MenuItem value={2}>Less than 5 years</MenuItem>
                    <MenuItem value={3}>More than 5 years</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <FormControl className={classes.formControl} variant="outlined">
                  <InputLabel id="status-select" className={classes.label}>
                    Furnished status
                  </InputLabel>
                  <Select
                    labelId="furnished_status"
                    name="furnished_status"
                    label="Furnished Status"
                    value={props.propertyDetail.furnished_status}
                    onChange={props.changed}
                  >
                    <MenuItem value={0}>Furnished</MenuItem>
                    <MenuItem value={1}>Semi Furnished</MenuItem>
                    <MenuItem value={2}>Not Furnished</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3} lg={3}>
                <FormControl className={classes.formControl} variant="outlined">
                  <InputLabel id="facing" className={classes.label}>
                    Facing
                  </InputLabel>
                  <Select
                    labelId="facing"
                    name="facing"
                    label="Facing"
                    value={props.propertyDetail.facing}
                    onChange={props.changed}
                  >
                    <MenuItem value={0}>North</MenuItem>
                    <MenuItem value={1}>East</MenuItem>
                    <MenuItem value={2}>South</MenuItem>
                    <MenuItem value={3}>West</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PropertyDetailForm;
