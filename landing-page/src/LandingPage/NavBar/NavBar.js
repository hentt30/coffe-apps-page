import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link, animateScroll as scroll } from "react-scroll";
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "lato",
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    height: "70px"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('xs')]: {
      justifyContent: "center",
    },
    width: "1366px",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  /*search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }*/
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" color="secondary">
        <div style={{display: "flex", justifyContent: "center"}}>
        <Toolbar className={classes.topBar}>
          <Hidden xsDown>
            <Grid item style={{display: "flex", alignItems: "center"}}>
              <img
                src={window.location.origin + "/workplace.svg"}
                height="64px"
              />
            </Grid>
          </Hidden>
          <Grid className={classes.buttons} item>
            <Grid item>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button color="inherit" >Home</Button>
              </Link>
            </Grid>
            <Grid item>
              <Button color="inherit">Sobre</Button>
            </Grid>
            <Grid item>
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button color="inherit" >Projetos</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button color="inherit">Contato</Button>
              </Link>
            </Grid>
          </Grid>
{/*
          <Grid item xs={3}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
*/}
        </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}
