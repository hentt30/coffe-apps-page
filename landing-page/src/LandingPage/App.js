import React from "react";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import QuemSomos from "./QuemSomos/QuemSomos.js";
import AppBar from "./NavBar/NavBar.js";
import Projetos from "./Projetos/Projetos"; // eslint-disable-next-line
import styled from "styled-components";

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
  render() {
    return (
      <Grid container>
        <ThemeProvider theme={theme}>
          <AppBar />
          <QuemSomos />
          <Projetos />
        </ThemeProvider>
      </Grid>
    );
  }
}

export default LandingPage;
