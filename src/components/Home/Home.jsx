import React, { Component } from "react";
import profilePicture from "../../img/andy.jpg";
import Navigation from "../Navigation/Navigation";

//Material UI Components
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
    height: "200px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  profilePicture: {
    height: "100%",
    width: "100%",
    borderRadius: "50%"
  },
  box: {
    backgroundColor: "rgba(128,128,128,.5)",
    height: "100%",
    borderRadius: "20px",
    paddingTop: "35px"
  },
  workButton: {
    paddingBottom: "40px"
  }
});

class Home extends Component {
  state = {
    spacing: "0"
  };

  goToProjects = () => {
    this.props.history.push("/portfolio");
  };

  render() {
    //set styling for MUI grid
    const { classes } = this.props;
    const { spacing } = this.state;
    return (
      <div>
        <Navigation page={"home"} />
        <h1>Andy DuBois</h1>
        <Grid container className={classes.root}>
          <Grid item sm={1}></Grid>
          <Grid
            className={classes.workButton}
            item
            sm={5}
            xs={12}
            justify={"flex-end"}>
            <div className={classes.imageBox}>
              <img
                className={classes.profilePicture}
                src={profilePicture}
                alt='profile picture'
              />
              <br />
              <Button
                variant='contained'
                color='primary'
                onClick={this.goToProjects}>
                CLick to see my work
              </Button>
            </div>
          </Grid>
          <Grid className={classes.box} item sm={4} xs={12}>
            <p className='homeText'>
              Hey! I am a full stack software developer who studied at Prime
              Digital Academy. I specialize in React, Redux, Node, and Express.
              I am always looking for a new way to hone my skills. Feel free to
              take a look around!
            </p>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
