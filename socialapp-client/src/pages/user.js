import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Scream from "../components/scream/Scream";
import StaticProfile from "../components/scream/StaticProfile";
import ScreamSkeleton from "../util/ScreamSkeleton";
import ProfileScreamSkeleton from "../util/ProfileScreamSkeleton";
// MUI STUFF
import Grid from "@material-ui/core/Grid";

// React-Redux stuff
import { connect } from "react-redux";
import { getSingleUserDetails } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    profile: null,
    screamIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;

    if (screamId) this.setState({ screamIdParam: screamId });
    this.props.getSingleUserDetails(handle);

    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { screams, loading } = this.props.data;
    const { screamIdParam } = this.state;
    const screamsMarkup = loading ? (
      <ScreamSkeleton />
    ) : screams === null ? (
      <p>No SCREAMS FORM USER</p>
    ) : !screamIdParam ? (
      screams.map(scream => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      screams.map(scream => {
        if (scream.screamId !== screamIdParam)
          return <Scream key={scream.screamId} scream={scream} />;
        else return <Scream key={scream.screamId} scream={scream} openDialog />;
      })
    );
    return (
      <Grid container spacing={6}>
        <Grid item sm={8} xs={12}>
          {screamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileScreamSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapActionsToProps = {
  getSingleUserDetails
};

user.propTypes = {
  getSingleUserDetails: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(user);
