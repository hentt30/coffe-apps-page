import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  max-width:100%;
  background-color: #1a1a1a;
`;

const StyledGrid = styled(Grid)`
  display: inline-flex;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  font-family: lato;
  color: white;
  font-size: 150%;
  padding: 40px;
`;
export default function QuemSomos() {
  return (
    <Wrapper>
      <Grid container direction="row" alignItems="center">
        <StyledGrid item xs>
          <img
            style={{ width: "45vw", height: "45vh" }}
            src={window.location.origin + "/food.png"}
            alt="imagem qualquer"
          />
        </StyledGrid>
        <StyledGrid item xs display="flex" justifyContent="center">
          <StyledTypography>
            Coffee apps é uma software house criada no alojamento do ITA.Nosso
            maior objetivo é realizar projetos de aplicativos . Agora basta
            gerar um texto aleatório que será preenchido futuramente por
            palavras sem sentido que irão convencer outras pessoas a comprarem
            nosso produto
          </StyledTypography>
        </StyledGrid>
      </Grid>
    </Wrapper>
  );
}
