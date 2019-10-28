import React, { Fragment } from "react";

import NoImage from "../images/no-img.png";

import PropTypes from "prop-types";

// MUI Stuff

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  card: {
    display: "flex",
    marginBottom: 19
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
    padding: 25
  },
  cover: {
    minWidth: 200,
    objectFit: "cover"
  },
  handle: {
    width: 60,
    height: 20,
    backgroundColor: "#00bcd4",
    marginBottom: 7
  },
  date: {
    height: 14,
    width: 100,
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  fullline: {
    height: 15,
    width: "90%",
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  halfline: {
    height: 15,
    width: "50%",
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.6)"
  }
};

const ScreamSkeleton = props => {
  const { classes } = props;
  const content = Array.from({ length: 4 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={NoImage} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullline} />
        <div className={classes.fullline} />
        <div className={classes.halfline} />
      </CardContent>
    </Card>
  ));
  return <Fragment>{content}</Fragment>;
};

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);
