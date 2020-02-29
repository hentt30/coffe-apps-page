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
    minHeight: "100vh",
    alignItems: "center",
    width: "100%",
    background: "#3df0b1"
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#F5F5F5"
  },
  text: {
    fontSize: "20px",
    fontFamily: "lato",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#1D2A30"
  },
  img: {
    maxWidth: "683px",
    width: "100%"
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root} id="sobre">
      <Grid
        container
        component="main"
        justify="space-evenly"
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
          <Typography className={classes.title} align="center">
            Sobre Nós
          </Typography>
          <Typography className={classes.text} >
            A Coffee APPs é uma Software House que surgiu no alojamento
          </Typography>
          <Typography className={classes.text}>
            do Instituto Tecnológico de Aeronáutica (ITA)
          </Typography>
          <br />
          <Typography className={classes.text}>
            Ela é formada por dois programadores apaixonados por inovar.
          </Typography>
          <Typography className={classes.text}>
            Nosso principal foco é proporcionar soluções tecnológicas para
          </Typography>
          <Typography className={classes.text}>pessoas físicas jurídicas</Typography>
          {/*<br />
          <Typography className={classes.text}>
            Os serviços oferecidos abrangem a confecção de apps, sites,
          </Typography>
          <Typography className={classes.text}>
            projetos de data science e automatização de processos
          </Typography>*/}
        </Grid>
      </Grid>
        </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
