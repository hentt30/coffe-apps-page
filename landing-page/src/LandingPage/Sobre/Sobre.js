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
          <Typography className={classes.text}>
            A Coffe APPs é uma Software House que surgiu no alojamento
          </Typography>
          <Typography className={classes.text}>
            o Instituto Tecnológico de Aeronáutica (ITA). Ela é formada por
          </Typography>
          <Typography className={classes.text}>
            dois programadores apaixonados por inovar. Nosso principal
          </Typography>
          <Typography className={classes.text}>
            foco é proporcionar soluções tecnológicas para pessoas físicas
          </Typography>

          <Typography className={classes.text}>jurídicas.</Typography>
          <br />
          <Typography className={classes.text}>
            Os serviços oferecidos abrangem a confecção de apps, sites,
          </Typography>
          <Typography className={classes.text}>
            projetos de data science e automatização de processos
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
