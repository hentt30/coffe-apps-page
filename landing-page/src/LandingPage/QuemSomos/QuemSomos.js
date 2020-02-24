import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1a1a1a;
`;

const StyledGrid = styled(Grid)`
  display: inline-flex;
  justify-content: center;
`;

export default function QuemSomos() {
  return (
    <Wrapper>
      <Grid container direction="row" alignItems="center">
        <StyledGrid item xs>
          <img
            style={{ width: "65vw", height: "100vh" }}
            src={window.location.origin + "/coffee.jpg"}
            alt="imagem qualquer"
          />
        </StyledGrid>
        <StyledGrid item xs display="flex" justifyContent="center">
          Arquivo JS do texto e tals
        </StyledGrid>
      </Grid>
    </Wrapper>
  );
}
