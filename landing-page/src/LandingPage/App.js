import React from "react";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Home from "./Home/Home.js";
import AppBar from "./NavBar/NavBar.js";
import Projetos from "./Projetos/Projetos";
import Contato from "./Contato/Contato";
import Sobre from "./Sobre/Sobre";
import styled from "styled-components";
import * as Scroll from "react-scroll"; // eslint-disable-next-line
import Toolbar from "@material-ui/core/Toolbar";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollHome = React.createRef();
    this.scrollProjetos = React.createRef();
    this.handler = this.handler.bind(this);
  }

  handler(id) {
    if (id === "HOME") {
      var Scroll = require("react-scroll");
      var scroll = Scroll.animateScroll;
      scroll.scrollToTop({ smooth: true, duration: "1500", delay: "500" });
    }
    if (id === "PROJETOS") {
      this.scrollProjetos.current.scrollIntoView();
    }
  }

  render() {
    return (
      <Grid container justify="center">
        <ThemeProvider theme={theme}>
          <AppBar handler={this.handler} />
          <Home ref={this.scrollHome} />
          <Sobre />
          <Projetos ref={this.scrollProjetos} />
          <Contato />
        </ThemeProvider>
      </Grid>
    );
  }
}

export default LandingPage;
