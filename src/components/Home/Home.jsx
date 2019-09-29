import React, { Component } from "react";
import profilePicture from "../../img/andy.jpg";
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
    width: '300px',
    height: '200px',
  },
  profilePicture: {
  height: "100%",
  width: "100%",
  borderRadius: "40px"
},
box: {
  backgroundColor: "rgba(128,128,128,.5)",
  height: '100%'
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
        <Navigation page={"home"} />
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
          <Grid className={classes.box} item xs={5}>
          <p>I am a full stack developer who specializes in React, Redux, Node, Express work.  I am always looking for a new way to hone my skills.</p>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
