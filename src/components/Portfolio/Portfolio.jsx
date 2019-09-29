import React, { Component } from "react";
import whosPlaying from "../../img/wpt.png";
import Navigation from "../Navigation/Navigation"

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
    maxWidth: "100%"
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
        <Navigation page={'projects'}/>
        <h1>THIS IS MY PORTFOLIO</h1>
        <p>Interesting text about myself.</p>
        <Grid container className={classes.root}>
          <Grid xs={1}></Grid>
          <Grid item xs={5}>
            Project #1
            <div className={classes.imageBox}>
              <img
                className={classes.profilePicture}
                src={whosPlaying}
                alt='profile picture'
              />
            </div>
          </Grid>
          <Grid item xs={5}>
            Project #2
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={1}></Grid>
          <Grid item xs={5}>
            Project #3
          </Grid>
          <Grid item xs={5}>
            Project #4
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Portfolio);
