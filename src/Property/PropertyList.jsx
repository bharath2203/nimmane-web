import React, { Component } from "react";
import store from "../store/store";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropertyDetail from "./PropertyDetail";
import { GridList, GridListTile } from "@material-ui/core";
import { connect } from "react-redux";
import Spinner from "react-spinner-material";
import axios from "axios";
import M from "materialize-css";
import options from "materialize-css";
import ChipInput from "material-ui-chip-input";

const useStyles = (theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
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
  spinner: {
    width: "10%",
    marginTop: "100px",
    margin: "0 auto",
  },
});

class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: null,
      places: [],
    };
  }

  loadProperties = (type) => {
    let URL = `https://nimmane-ca442.firebaseio.com/${type}.json`;
    console.log(URL);
    axios.get(URL).then((response) => {
      const data = response.data;
      let properties = [];
      for (let key in data) {
        let property = {
          ...data[key],
          id: key,
        };
        properties.push(property);
      }
      this.setState({
        properties: properties,
      });
      console.log(properties);
    });
  };

  componentDidMount() {
    this.loadProperties(this.props.type);
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, options);
  }

  componentDidUpdate(prevProps) {
    if (this.props.type != prevProps.type) {
      this.setState({ properties: null });
      this.loadProperties(this.props.type);
    }
  }

  handleAddChip = (chip) => {
    const places = [...this.state.places, chip];
    this.setState(places);
  };

  handleDeleteChip = (chip, index) => {
    const places = this.state.filter((item) => {
      return item !== chip;
    });
    this.setState(places);
  };

  render() {
    const { classes } = this.props;
    if (this.state.properties === null) {
      return (
        <div className={classes.spinner}>
          <Spinner radius={60} color={"red"} stroke={4} visible={true} />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="card root">
            <ChipInput
              value={this.places}
              onAdd={(chip) => this.handleAddChip(chip)}
              onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
            />
          </div>
          <div className={classes.root}>
            <GridList cellHeight="auto" spacing={6} cols={1}>
              {this.state.properties.map((property, index) => {
                return (
                  <GridListTile>
                    <PropertyDetail
                      property={property}
                      key={property.advance}
                    ></PropertyDetail>
                  </GridListTile>
                );
              })}
            </GridList>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default withStyles(useStyles, { withTheme: true })(PropertyList);
