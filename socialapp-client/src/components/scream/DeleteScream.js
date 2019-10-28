import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";

// MUI stuff

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Dialogtitle from "@material-ui/core/Dialogtitle";
import DialogActions from "@material-ui/core/DialogActions";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import { connect } from "react-redux";
import { deleteScream } from "../../redux/actions/dataActions";

const styles = {
  deleteButton: {
    position: "absolute",
    top: "8%",
    left: "90%"
  }
};

class DeleteScream extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  deletescream = () => {
    this.props.deleteScream(this.props.screamId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Delete Scream"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutlineIcon color="secondary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <Dialogtitle>Are you sure you want to Delete Post?</Dialogtitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancle
            </Button>
            <Button onClick={this.deletescream} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapActionsToProps = {
  deleteScream
};

DeleteScream.propTypes = {
  deleteScream: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired
};

export default connect(
  null,
  mapActionsToProps
)(withStyles(styles)(DeleteScream));
