import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostScream from "../scream/PostScream";
import { logoutUser } from "../../redux/actions/userActions";
import withStyles from "@material-ui/core/styles/withStyles";
import Notifications from "./Notifications";

// Button
import MyButton from "../../util/MyButton";
// Icons

import HomeIcon from "@material-ui/icons/Home";

// MUI
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  buttonLogout: {
    marginLeft: "20%"
  }
};

class Navbar extends Component {
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const { authenticated, classes } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostScream />
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon color="primary" />
                </MyButton>
              </Link>

              <Notifications />

              <div className="buttonLogout">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleLogout}
                >
                  Log Out
                </Button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>

              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>

              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

const mapActionsToProps = {
  logoutUser
};

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));
