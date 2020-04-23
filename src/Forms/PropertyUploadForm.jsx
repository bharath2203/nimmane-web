import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { MenuItem, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import PropertyDetailForm from "./PropertyDetailForm";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import SaleForm from "./SaleForm";
import RentForm from "./RentForm";
import LeaseForm from "./LeaseForm";
import "./form.css";

const useStyles = (theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  formControl: {
    margin: theme.spacing(1),
    width: 340,
  },
  input: {
    margin: 20,
    width: "80%",
  },
  select: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  title: {
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "uppercase",
  },
  button: {
    width: "15%",
    borderRadius: "24px",
  },
});

const types = ["Rent", "Lease", "Sale"];
const rentPriceFormat = {
  advance: 0,
  rent: 0,
};
const leasePriceFormat = {
  lease: 0,
};
const salePriceFormat = {
  price: 0,
};

class PropertyUploadForm extends Component {
  state = {
    priceDetail: null,
    city: "",
    district: "",
    type: null,
    propertyDetail: {
      no_of_bedrooms: 0,
      no_of_bathrooms: 0,
      no_of_storerooms: 0,
      no_of_poojarooms: 0,
      facing: "",
      furnished_status: "",
      property_age: "",
      status: "",
    },
  };

  changePriceDetail = (type) => {
    switch (type) {
      case 0:
        this.setState({ priceDetail: rentPriceFormat });
        break;
      case 1:
        this.setState({ priceDetail: leasePriceFormat });
        break;
      case 2:
        this.setState({ priceDetail: salePriceFormat });
        break;
      default:
        break;
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.changePriceDetail(e.target.value);
    console.log(this.state);
  };

  handleChangePropertyDetail = (e) => {
    let propertyDetail = { ...this.state.propertyDetail };
    propertyDetail[e.target.name] = e.target.value;
    console.log(propertyDetail);
    console.log(this.state);
    this.setState({
      propertyDetail: propertyDetail,
    });
    console.log(this.state);
  };

  handleChangePriceDetail = (e) => {
    let priceDetail = { ...this.state.priceDetail };
    priceDetail[e.target.name] = e.target.value;
    this.setState({ priceDetail: priceDetail });
    console.log(this.state);
  };

  uploadProperty = (e) => {
    e.preventDefault();
    const type = this.getType();
    let URL = `https://nimmane-ca442.firebaseio.com/${type}.json`;
    axios
      .post(URL, this.state)
      .then((response) => {
        this.props.history.push("/rents");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("I am here");
  };

  getType = () => {
    if (this.state.type == 0) return "rents";
    if (this.state.type == 1) return "leases";
    if (this.state.type == 2) return "sales";
    return null;
  };

  getTypeForm = () => {
    switch (this.state.type) {
      case 0:
        return (
          <RentForm
            changeHandler={this.handleChangePriceDetail}
            priceDetail={this.state.priceDetail}
          />
        );
      case 1:
        return (
          <LeaseForm
            changeHandler={this.handleChangePriceDetail}
            priceDetail={this.state.priceDetail}
          />
        );
      case 2:
        return (
          <SaleForm
            changeHandler={this.handleChangePriceDetail}
            priceDetail={this.state.priceDetail}
          />
        );
      default:
        return <Typography variant="h5">Please select type</Typography>;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form>
          <FormControl className={classes.formControl}>
            <InputLabel id="type-select">Select type of Property</InputLabel>
            <Select
              id="type-select"
              name="type"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <MenuItem value={0}>Rent</MenuItem>
              <MenuItem value={1}>Lease</MenuItem>
              <MenuItem value={2}>Sale</MenuItem>
            </Select>
          </FormControl>
          {this.getTypeForm()}
          <div className="card root">
            <div className="card-title">Enter Place Details</div>
            <div className="card-content">
              <div className="row">
                <div className="col s6 input-field">
                  <input
                    id="district"
                    name="district"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                    required
                  ></input>
                  <label for="district">District</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Enter your district name
                  </span>
                </div>
                <div className="col s6 input-field">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="validate"
                    onChange={this.handleChange}
                    required
                  ></input>
                  <label for="city">City</label>
                  <span
                    className="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Enter your City name
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PropertyDetailForm
            changed={this.handleChangePropertyDetail}
            propertyDetail={this.state.propertyDetail}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            onClick={(e) => {
              this.uploadProperty(e);
            }}
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(PropertyUploadForm);
