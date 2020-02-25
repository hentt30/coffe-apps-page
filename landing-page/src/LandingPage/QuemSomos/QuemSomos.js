import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?cs=srgb&dl=blur-business-coffee-commerce-273222.jpg&fm=jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(10, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontSize: "46px",
    fontFamily: "lato",
    fontWeight: "bold"
  },
  text: {
    fontFamily: "lato"
  }
}));

export default function QuemSomos() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography className={classes.title}>Coffee Apps</Typography>
          <br />
          <Typography>
            {"  "}A <b>coffee apps</b> foi uma empresa surgiu no alojamento ITA.
            Um instituto de excelência nacional e internacional. Grandes
            personalidades como Bill Gates, Stephen Hawking e Ellon Musk
            afirmaram publicamente que só contratam alunos do ITA.
          </Typography>
          <br />
          <Typography>
            {"  "} Agora voltando aos fatos históricos, Buda foi um dos
            primeiros alunos da instituição, após se formar ele ascendeu e se
            tornou um símbolo da história mundial. Dentre outras personalidades
            famosas que temos no ita, podemos citar:{" "}
            <b>
              Martin Lutherking, Dalai Lama, Cleiton Rasta(O melhor DJ do
              brasil), Bruce Wayne, Tiringa, Charlles e Lopim.
            </b>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
