import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Switch } from "react-router";

const useStyles = makeStyles({
  root: {
    minWidth: 370,
    marginTop: "8px",
    marginBottom: "8px"
  },
  media: {
    height: 140
  }
});

export default function Property(props) {
  const classes = useStyles();
  const { property } = props;

  const getPriceBasedOnType = type => {
    switch (type) {
      case 0:
        return (
          <Typography gutterBottom variant="h5" component="h2">
            <span>Rent: </span> &#x20b9; {property.priceDetail.rent}
          </Typography>
        );
        break;
      case 1:
        return (
          <Typography gutterBottom variant="h5" component="h2">
            <span>Advance: </span> &#x20b9; {property.priceDetail.advance}
          </Typography>
        );
        break;
      case 2:
        return (
          <Typography gutterBottom variant="h5" component="h2">
            <span>Sale: </span>&#x20b9; {property.priceDetail.Price}
          </Typography>
        );
        break;
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography varient="h6">
            {property.propertyDetail.no_of_bedrooms} BHK Residential House
          </Typography>
        }
        subheader={
          <Typography variant="subheader">
            {property.city + ", " + property.district}
          </Typography>
        }
      >
        <Typography variant="caption">R</Typography>
      </CardHeader>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../assets/images/background.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
          {getPriceBasedOnType(property.type)}

          <Typography variant="body2" color="textSecondary" component="p">
            A {property.propertyDetail.no_of_bedrooms} BHK Home in{" "}
            {property.city}, {property.district}. More details can be found by
            pressing below.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact owner
        </Button>
        <Button size="small" color="primary">
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
