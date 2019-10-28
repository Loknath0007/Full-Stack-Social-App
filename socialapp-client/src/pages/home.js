import React, { Component } from "react";
import Scream from "../components/scream/Scream";
import Grid from "@material-ui/core/Grid";
import ScreamSkeleton from "../util/ScreamSkeleton";
import Profile from "../components/profile/Profile";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// MUI STUFF
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// React-Redux
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

const styles = {
  devname: {
    marginLeft: "40%"
  },
  love: {
    color: "red",
    marginBottom: "-2%"
  }
};

class home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { classes } = this.props;
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <ScreamSkeleton />
    );

    return (
      <Grid container spacing={8}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
        <Typography variant="body1" className={classes.devname}>
          Developed by{" "}
          <span>
            <FavoriteBorderIcon className={classes.love} />
          </span>{" "}
          Loknath Chandra Das
        </Typography>
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  data: state.data
});

const mapActionsToProps = {
  getScreams
};

home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(home));
