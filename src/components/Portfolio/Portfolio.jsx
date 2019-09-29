import React, { Component } from "react";
import profilePicture from "../../img/andy.jpg";

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
    height: "200px"
  },
  profilePicture: {
    height: "100%",
    width: "100%"
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
        <h1>THIS IS MY PORTFOLIO</h1>
        <p>Interesting text about myself.</p>
        <Grid container className={classes.root}>
          <Grid item xs={6}>
            Project #1
            <div className={classes.imageBox}>
              <img
                className={classes.profilePicture}
                src={profilePicture}
                alt='profile picture'
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            Project #2
          </Grid>
          <Grid item xs={6}>
            Project #3
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Portfolio);
