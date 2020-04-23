import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
  Button
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/icon";

const useStyles = theme => ({
  root: {
    display: "flex",
    width: "100%",
    margin: "0 auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  detailGrid: {
    paddingTop: "3px",
    paddingLeft: "20px"
  },
  smallHeadText: {
    fontSize: "15px",
    fontWeight: "500"
  }
});

const status = [
  "Ready To Move",
  "Will be moved soon",
  "Takes more than a Month"
];
const property_age = [
  "New",
  "Less than 3 years",
  "Less than 5 years",
  "More than 5 years"
];
const furnished_status = ["Furnished", "Semi-Furnished", "Not Furnished"];
const facing = ["North", "East", "South", "West"];

class PropertyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPriceBasedOnType = (type, property) => {
    switch (type) {
      case 0:
        return (
          <React.Fragment>
            <Typography gutterBottom variant="h6">
              &#x20b9; {property.priceDetail.advance}
            </Typography>
            <Typography gutterBottom variant="h6">
              &#x20b9; {property.priceDetail.rent}
            </Typography>
          </React.Fragment>
        );
        break;
      case 1:
        return (
          <Typography gutterBottom variant="h5" component="h2">
            <span>Advance: </span> &#x20b9; {property.priceDetail.lease}
          </Typography>
        );
        break;
      case 2:
        return (
          <React.Fragment>
            <Typography variant="h6">
              &#x20b9; {property.priceDetail.price}
            </Typography>
            <Typography variant="caption" align="left">
              onwards
            </Typography>
          </React.Fragment>
        );
        break;
    }
  };

  render() {
    const { classes, property } = this.props;
    return (
      <Card className={classes.root}>
        <Grid container>
          <Grid item md={5} xs={12}></Grid>
          <Grid item md={7} xs={12}>
            <Grid container>
              <Grid item md={2}>
                {this.getPriceBasedOnType(property.type, property)}
              </Grid>
              <Grid item md={10} className={classes.detailGrid}>
                <Typography variant="subtitle1" align="left" gutterBottom>
                  {property.propertyDetail.no_of_bedrooms} BHK Home, near{" "}
                  {property.city}
                </Typography>
                <Typography
                  className={classes.smallHeadText}
                  align="left"
                  gutterBottom
                >
                  {property.propertyDetail.no_of_bedrooms} BedRooms |{" "}
                  {property.propertyDetail.no_of_bathrooms} BathRooms |{" "}
                  {property.propertyDetail.no_of_storerooms} StoreRooms |{" "}
                  {property.propertyDetail.no_of_poojarooms} PoojaRoom
                </Typography>
                <ul style={{ padding: "20px" }}>
                  <li>
                    <Typography className={classes.smallHeadText} align="left">
                      Availability Status:{" "}
                      {status[property.propertyDetail.status]}
                    </Typography>
                  </li>
                  <li>
                    <Typography className={classes.smallHeadText} align="left">
                      Property Age:{" "}
                      {property_age[property.propertyDetail.property_age]}
                    </Typography>
                  </li>
                  <li>
                    <Typography className={classes.smallHeadText} align="left">
                      Furniture Status:{" "}
                      {
                        furnished_status[
                          property.propertyDetail.furnished_status
                        ]
                      }
                    </Typography>
                  </li>
                  <li>
                    <Typography className={classes.smallHeadText} align="left">
                      Facing: {facing[property.propertyDetail.facing]}
                    </Typography>
                  </li>
                </ul>
                <Button variant="contained" color="primary">
                  View Owner Phone number
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(PropertyDetail);
