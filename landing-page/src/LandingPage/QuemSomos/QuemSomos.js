import React from "react";
// import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

export default function QuemSomos() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" alignItems="center" spacing={10}>
                <Grid item xs={6}>
                    IMAGEM
                </Grid>
                <Grid item xs={6}>
                    Rubens Aguiar
                </Grid>
            </Grid>
        </div>
    );
};
