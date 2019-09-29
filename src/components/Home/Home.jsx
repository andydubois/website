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
    width: '300px',
    height: '200px',
  },
  profilePicture: {
  height: "100%",
  width: "100%",
}
});

class Home extends Component {
  state = {
    spacing: "0"
  };
  render() {
    //set styling for MUI grid
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <div>
        <h1>This is the Home page</h1>
        <p>Interesting text about myself.</p>
        <Grid container className={classes.root}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <div className={classes.imageBox}>
              <img
                className={classes.profilePicture}
                src={profilePicture}
                alt='profile picture'
              />
            </div>
          </Grid>
          <Grid item xs={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
