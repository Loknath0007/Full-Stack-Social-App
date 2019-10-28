import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import MyButton from "../../util/MyButton";

// MUI Stuff

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

// Icons
import EditIcon from "@material-ui/icons/Edit";
// Redux-Suff

import { connect } from "react-redux";
import { editScream } from "../../redux/actions/dataActions";

const styles = {
  button: {
    position: "absolute",
    top: "8%",
    left: "83%"
  }
};

class EditScream extends Component {
  state = {
    body: "",
    open: false
  };

  mapUserDetailsToState = screams => {
    this.setState({
      body: screams.body ? screams.body : ""
    });
  };

  componentDidMount() {
    const { screams } = this.props;
    this.mapUserDetailsToState(screams);
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
    this.mapUserDetailsToState(this.props.screams);
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { screamId } = this.props;
    const screamDetails = {
      body: this.state.body
    };

    this.props.editScream(screamId, screamDetails);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Edit Details"
          onClick={this.handleOpen}
          btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit Your Screams</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="body"
                type="text"
                label="Body"
                multiline
                row="5"
                placeholder="Edit your Scream"
                className={classes.textField}
                value={this.state.body}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Upadate
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  screams: state.data.screams
});

const mapActionsToProps = {
  editScream
};

EditScream.propTypes = {
  editScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(EditScream));
