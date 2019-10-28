import React, { Fragment } from "react";

import NoImage from "../images/no-img.png";

import PropTypes from "prop-types";

// MUI Stuff
import Paper from "@material-ui/core/Paper";

import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  handle: {
    width: 60,
    height: 20,
    backgroundColor: "#00bcd4",
    margin: "0 auto 7px auto"
  },

  fullline: {
    height: 15,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  halfline: {
    height: 15,
    width: "50%",
    marginBottom: 10,
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  paper: {
    padding: 20,
    height: "80%"
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "8%",
        left: "80%"
      }
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "#00bcd4"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  }
};

const ScreamSkeleton = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={NoImage} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <div className={classes.handle} />
          <hr />
          <div className={classes.fullline} />
          <div className={classes.fullline} />
          <hr />
          <LocationOn color="primary" /> <span>Location</span>
          <hr />
          <LinkIcon color="primary" /> https://website.com
          <hr />
          <CalendarToday color="primary" /> Joined Date
        </div>
      </div>
    </Paper>
  );
};

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);
