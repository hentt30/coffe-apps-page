import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import MediaCard from "./Card/Card";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    min-width: 100vw;
`;

const StyledGrid = styled(Grid)`
    max-width: 384px;
    padding: 10px 0px 10px;
`;


export default function Projetos() {
    const DataCard = [
        {
            img: "",
            title: "Lorem Ipsum",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel. Vestibulum porttitor magna non odio vulputate interdum. Suspendisse egestas eu purus nec ultricies. Vivamus in aliquam quam. Donec consequat tellus convallis, scelerisque nisi ut, condimentum mi. Pellentesque interdum, orci eu gravida consequat, odio erat vestibulum orci, congue consectetur odio urna id enim. Aenean in efficitur massa. Duis dignissim a ipsum sed dapibus. Phasellus sem diam, pulvinar at bibendum in, rhoncus lacinia dui. Aliquam ac lobortis quam. Quisque in nisi elit. Proin at tortor est."
        },
        {
            img: "",
            title: "Lorem Ipsum",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel. Vestibulum porttitor magna non odio vulputate interdum. Suspendisse egestas eu purus nec ultricies. Vivamus in aliquam quam. Donec consequat tellus convallis, scelerisque nisi ut, condimentum mi. Pellentesque interdum, orci eu gravida consequat, odio erat vestibulum orci, congue consectetur odio urna id enim. Aenean in efficitur massa. Duis dignissim a ipsum sed dapibus. Phasellus sem diam, pulvinar at bibendum in, rhoncus lacinia dui. Aliquam ac lobortis quam. Quisque in nisi elit. Proin at tortor est."
        },
        {
            img: "",
            title: "Lorem Ipsum",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel. Vestibulum porttitor magna non odio vulputate interdum. Suspendisse egestas eu purus nec ultricies. Vivamus in aliquam quam. Donec consequat tellus convallis, scelerisque nisi ut, condimentum mi. Pellentesque interdum, orci eu gravida consequat, odio erat vestibulum orci, congue consectetur odio urna id enim. Aenean in efficitur massa. Duis dignissim a ipsum sed dapibus. Phasellus sem diam, pulvinar at bibendum in, rhoncus lacinia dui. Aliquam ac lobortis quam. Quisque in nisi elit. Proin at tortor est."
        },
        {
            img: "",
            title: "Lorem Ipsum",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel. Vestibulum porttitor magna non odio vulputate interdum. Suspendisse egestas eu purus nec ultricies. Vivamus in aliquam quam. Donec consequat tellus convallis, scelerisque nisi ut, condimentum mi. Pellentesque interdum, orci eu gravida consequat, odio erat vestibulum orci, congue consectetur odio urna id enim. Aenean in efficitur massa. Duis dignissim a ipsum sed dapibus. Phasellus sem diam, pulvinar at bibendum in, rhoncus lacinia dui. Aliquam ac lobortis quam. Quisque in nisi elit. Proin at tortor est."
        },
        {
            img: "",
            title: "Lorem Ipsum",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel. Vestibulum porttitor magna non odio vulputate interdum. Suspendisse egestas eu purus nec ultricies. Vivamus in aliquam quam. Donec consequat tellus convallis, scelerisque nisi ut, condimentum mi. Pellentesque interdum, orci eu gravida consequat, odio erat vestibulum orci, congue consectetur odio urna id enim. Aenean in efficitur massa. Duis dignissim a ipsum sed dapibus. Phasellus sem diam, pulvinar at bibendum in, rhoncus lacinia dui. Aliquam ac lobortis quam. Quisque in nisi elit. Proin at tortor est."
        },
        {
            img: "",
            title: "Lorem Ipsum",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida sem justo, eget sodales metus dignissim vel. Vestibulum porttitor magna non odio vulputate interdum. Suspendisse egestas eu purus nec ultricies. Vivamus in aliquam quam. Donec consequat tellus convallis, scelerisque nisi ut, condimentum mi. Pellentesque interdum, orci eu gravida consequat, odio erat vestibulum orci, congue consectetur odio urna id enim. Aenean in efficitur massa. Duis dignissim a ipsum sed dapibus. Phasellus sem diam, pulvinar at bibendum in, rhoncus lacinia dui. Aliquam ac lobortis quam. Quisque in nisi elit. Proin at tortor est."
        },

    ];

    const lin = 0;

    return (
        <Wrapper>
            <Grid container justify="center" alignItems="center">
                <Typography variant="h2">Projetos</Typography>
            </Grid>
            <Grid container display="flex" alignItems="center" justify="space-evenly">
                {DataCard.map(data => (
                     <StyledGrid item>
                        <MediaCard {...data}/>
                    </StyledGrid>
                ))}
            </Grid>
        </Wrapper>
    );
};
