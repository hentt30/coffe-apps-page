import React from "react";
import ReactDOM from "react-dom";
/*import { makeStyles } from "@material-ui/core/styles";*/
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
/*import LocalCafeOutlinedIcon from "@material-ui/icons/LocalCafeOutlined";*/

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

class Presentation extends React.Component {
  render() {
    return (
      <Grid item xs={true}>
        <ThemeProvider theme={theme}>
          <Typography align="center" variant="h2" fontFamily="Arial">
            Coffee apps
          </Typography>
          <Typography align="center" fontFamily="Arial">
            The easy way to make your app
          </Typography>
        </ThemeProvider>
      </Grid>
    );
  }
}

class LandingPage extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Presentation />
      </Grid>
    );
  }
}

ReactDOM.render(<LandingPage />, document.getElementById("root"));
