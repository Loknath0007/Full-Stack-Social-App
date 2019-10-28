import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/icon.png";
import { Link } from "react-router-dom";

// Redux stuff

import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

// Meterial stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// Icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const styles = {
  form: {
    textAlign: "center"
  },
  image: {
    width: 90,
    height: 90,
    margin: "15px auto 15px auto",
    borderRadius: "50%"
  },
  pageTitle: {
    margin: "15px auto 15px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    margin: "10px auto 10px auto",
    position: "relative"
  },
  customError: {
    color: "red",
    fontSize: "0.8rem",
    margin: "10px auto 5px auto"
  },
  progress: {
    position: "absolute"
  },
  devname: {
    marginLeft: "38%",
    marginTop: "5%"
  },
  love: {
    color: "red",
    marginBottom: "-2%"
  }
};
class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;
    return (
      <Fragment>
        <Grid container className={classes.form}>
          <Grid item sm />
          <Grid item sm>
            <img src={AppIcon} alt="Icon" className={classes.image} />
            <Typography variant="h4" className={classes.pageTitle}>
              Login
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                className={classes.textField}
                helperText={errors.email}
                error={errors.email ? true : false}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                className={classes.textField}
                helperText={errors.password}
                error={errors.password ? true : false}
                value={this.state.password}
                onChange={this.handleChange}
                fullWidth
              />
              {errors.massage && (
                <Typography variant="body2" className={classes.customError}>
                  {errors.massage}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={loading}
              >
                Login
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
              <br />
              <small>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </small>
            </form>
          </Grid>
          <Grid item sm />
        </Grid>

        <Grid container>
          <Typography variant="body1" className={classes.devname}>
            Developed by{" "}
            <span>
              <FavoriteBorderIcon className={classes.love} />
            </span>{" "}
            Loknath Chandra Das
          </Typography>
        </Grid>
      </Fragment>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
