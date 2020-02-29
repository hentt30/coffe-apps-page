import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    paddingTop: "64px",
    backgroundColor: "#9BA8AC"
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold"
  },
  text: {
    fontSize: "26px",
    fontFamily: "lato",
    color: "white"
  },
  img: {
    width: "100%"
  },
  description: {}
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        component="main"
        id="sobre"
        justify="space-evenly"
        className={classes.root}
        xs={12}
      >
        <CssBaseline />

        <Grid item>
          <img
            className={classes.img}
            src={window.location.origin + "/workteam.svg"}
          />
        </Grid>

        <Grid item className={classes.description}>
          <Typography className={classes.text} align="center">
            A coffee apps é uma empresa que surgiu no alojamento do ITA.
          </Typography>
          <Typography className={classes.text} align="center">
            Um instituto de excelência nacional e internacional.
          </Typography>
          <Typography className={classes.text} align="center">
            GrandesPersonalidades como Bill Gates, Elon Musk e Jeff Bezos
          </Typography>
          <Typography className={classes.text} align="center">
            afirmaram <b>publicamente</b> que só contratavam alunos do ITA.{" "}
          </Typography>
          <br />
          <Typography className={classes.text} align="center">
            Aproveitando para relacionar com os fatos históricos, Buda foi um
          </Typography>
          <Typography className={classes.text} align="center">
            dos primeiros alunos da instituição, após se formar na T(-33) ele
          </Typography>
          <Typography className={classes.text} align="center">
            ascendeu e várias pessoas começaram a segui-lo. Dizem os boatos
          </Typography>
          <Typography className={classes.text} align="center">
            que seu nome de bixo é Borat. Para finalizar, podemos.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
