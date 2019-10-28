import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import DeleteScream from "./DeleteScream";
import ScreamDialog from "./ScreamDialog";
import LikeButton from "./likeButton";
import EditScream from "./EditScream";
// React-Redux stuff
import { connect } from "react-redux";

// MUI Meterials
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// Icons
import ChatIcon from "@material-ui/icons/Chat";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 18,
    marginLeft: 10
  },

  active: {
    color: "green",
    fontSize: "small",
    marginTop: "2%"
  },

  image: {
    width: 150,
    height: 150,
    objectFit: "100%",
    maxWidth: "100%",
    borderRadius: "50%",
    marginTop: "1%",
    marginLeft: "2%"
  },

  "& .screamTitle": { objectFit: "cover", marginTop: "1%" },

  content: {
    objectFit: "cover",
    marginTop: "2%"
  }
};
class Scream extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      },
      user: {
        authenticated,
        userData: {
          credentials: { handle }
        }
      }
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;

    const editDetails =
      authenticated && userHandle === handle ? (
        <EditScream screamId={screamId} />
      ) : null;

    const activeButton =
      authenticated && userHandle === handle ? (
        <FiberManualRecordIcon className={classes.active} />
      ) : null;

    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile Image"
          className={classes.image}
        />
        {activeButton}
        <CardContent className={classes}>
          <div className={classes.screamTitle}>
            <Typography
              variant="h5"
              component={Link}
              to={`/users/${userHandle}`}
              color="primary"
            >
              {userHandle}
            </Typography>

            {editDetails}

            {deleteButton}
            <Typography variant="body2" color="textSecondary">
              {dayjs(createdAt).fromNow()}
            </Typography>
          </div>
          <div className={classes.screamContent}>
            <Typography variant="body1">{body}</Typography>
            <LikeButton screamId={screamId} />
            <span>{likeCount} Likes</span>
            <MyButton tip="comments">
              <ChatIcon color="primary" />
            </MyButton>
            <span>{commentCount} Comments</span>

            <ScreamDialog
              screamId={screamId}
              userHandle={userHandle}
              openDialog={this.props.openDialog}
            />
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Scream));
