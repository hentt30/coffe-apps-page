import React from "react";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import QuemSomos from "./QuemSomos/QuemSomos.js";
import AppBar from "./NavBar/NavBar.js";
import Projetos from "./Projetos/Projetos"; // eslint-disable-next-line
import styled from "styled-components";
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
    this.scrollQuemSomos = React.createRef();
    this.scrollProjetos = React.createRef();
    this.handler = this.handler.bind(this);
  }

  handler(id) {
    if(id === "QUEM_SOMOS") {
      this.scrollQuemSomos.current.scrollIntoView({behavior: 'smooth'});
    }
    if(id === "PROJETOS") {
      this.scrollProjetos.current.scrollIntoView({behavior: 'smooth'});
    }
  }

  render() {
    return (
      <Grid container>
        <ThemeProvider theme={theme}>
          {console.log(this.state)}
          <AppBar handler={this.handler} />
          <QuemSomos ref={this.scrollQuemSomos} />
          <Projetos ref={this.scrollProjetos} />
        </ThemeProvider>
      </Grid>
    );
  }
}

export default LandingPage;
