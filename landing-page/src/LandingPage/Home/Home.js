import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    height: "100vh",
    alignItems: "center"
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold"
  },
  text: {
    fontSize: "26px",
    fontFamily: "lato"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        component="main"
        id="home"
        className={classes.root}
        xs={12}
      >
        <CssBaseline />

        <Grid item xs={6}>
          <Typography className={classes.title} align="center">
            Coffee apps
          </Typography>
          <Typography className={classes.text} align="center">
            Antiga neyzinho apps
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={window.location.origin + "/app.svg"} />
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
