import React, { Component } from "react";
import whosPlaying from "../../img/wptHome.png";
import whosPlaying2 from "../../img/wptEvent.png";
import movieGallery from "../../img/movieGallery.png";
import Navigation from "../Navigation/Navigation";

//Material UI Components
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  imageBox: {
    width: "300px",
    height: "300px",
    margin: "auto"
  },
  profilePicture: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "20px"
  }
});

class Portfolio extends Component {
  state = {
    spacing: "16"
  };
  render() {
    //set styling for MUI grid
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <div>
        <Navigation page={"projects"} />
        <h1>Projects</h1>
        <Grid container className={classes.root}>
          <Grid xs={1}></Grid>
          <Grid item sm={5} xs={12}>
            <h2>Who's Playing Tonight?</h2>
            <h6>Person to Person Concert Sharing App</h6>
            <div className={classes.imageBox}>
              <a
                href='https://ancient-caverns-40986.herokuapp.com/#/home'
                target='_blank'>
                <img
                  className={classes.profilePicture}
                  src={whosPlaying}
                  alt='profile picture'
                />
                <img
                  className={classes.profilePicture}
                  src={whosPlaying2}
                  alt='profile picture'
                />
              </a>
            </div>
          </Grid>
          <Grid item sm={0} xs={0}></Grid>
          <Grid item sm={5} xs={12}>
            <h2>Movie Gallery</h2>
            <h6>Static Movie Database Gallery</h6>
            <a href='https://enigmatic-shore-92024.herokuapp.com/#/' target="_blank">
              <img
                className={classes.profilePicture}
                src={movieGallery}
                alt='profile picture'
              />
            </a>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={1}></Grid>
          {/* <Grid item xs={5}>
            Project #3
          </Grid>
          <Grid item xs={5}>
            Project #4
          </Grid> */}
          {/* <Grid xs={1}></Grid> */}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Portfolio);
