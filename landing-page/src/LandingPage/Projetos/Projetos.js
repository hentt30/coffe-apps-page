import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import MediaCard from "./Card/Card";

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
`;

const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: center;
`;


export default function Projetos() {
    const DataCard = [
        {
            img: "",
            title: "",
            description: "",
        },
        {
            img: "",
            title: "",
            description: "",
        }
    ];

    return (
        <Wrapper>
            <Grid container direction="row" alignItems="center">
                <StyledGrid item xs >
                    {DataCard.map(data => (
                        <MediaCard data={data}/>
                    ))}
                </StyledGrid>
                <StyledGrid item xs display="flex">
                    Arquivo JS do texto e tals
                </StyledGrid>
            </Grid>
        </Wrapper>
    );
};
