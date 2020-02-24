import React from "react";
import FirstWrapper from "./FirstWrapper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: center;
`;


export default function QuemSomos() {
    return (
        <FirstWrapper>
            <Grid container direction="row" alignItems="center">
                <StyledGrid item xs >
                    Arquivo JS da imagem e tals
                </StyledGrid>
                <StyledGrid item xs display="flex" justifyContent="center">
                    Arquivo JS do texto e tals
                </StyledGrid>
            </Grid>
        </FirstWrapper>
    );
};
