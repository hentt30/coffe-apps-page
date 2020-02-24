import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
`;


const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: center;
`;


export default function QuemSomos() {
    return (
        <Wrapper>
            <Grid container direction="row" alignItems="center">
                <StyledGrid item xs >
                    Arquivo JS da imagem e tals
                </StyledGrid>
                <StyledGrid item xs display="flex" justifyContent="center">
                    Arquivo JS do texto e tals
                </StyledGrid>
            </Grid>
        </Wrapper>
    );
};
