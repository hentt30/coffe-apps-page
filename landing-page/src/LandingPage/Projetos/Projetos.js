import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import MediaCard from "./Card/Card";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: "130vh",
    maxWidth: "80vw",
    paddingBottom: "16px"
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold",
    paddingTop: "16px",
    paddingBottom: "16px"
  },
  text: {
    fontSize: "20px",
    fontFamily: "lato",
    display: "flex",
    justifyContent: "center"
  },
  img: {
    width: "100%"
  },
  card: {
    width: "400px",
    padding: "10px 0px 10px"
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});


class Projetos extends React.Component {
  render() {
    const { classes } = this.props;

    const DataCard = [
      {
        imgs: [
          {
            label: 'Tela de Login',
            imgPath:
                '/workplace.svg',
          },
          {
            label: 'Tela de Chat',
            imgPath:
                '/workplace.svg',
          }
        ],
        title: "Aplicativo",
        subtitle:
            "Chatbot para Android, IPhone e Web.",
        description:
            "Chatbot com sistema de login, cadastro e comunicação com uma API feita em Python que executava toda a lógica para gerar uma resposta ao usuário. Este aplicativo foi desenvolvido para Android, IPhone e Web.",
      },
      {
        imgs: [
          {
            label: 'Tela de Login',
            imgPath:
                '/workplace.svg',
          },
          {
            label: 'Tela de Chat',
            imgPath:
                '/workplace.svg',
          }
        ],
        title: "Aplicativo",
        subtitle:
            "Aplicação Web de vídeos no modelo do Netflix.",
        description:
            "Aplicação Web com sistema de login, cadastro, exibição de vídeos e upload de vídeos. Nesta aplicação o dono da página realizava upload dos vídeos para os assinantes da plataforma.",
      },
      {
        imgs: [
          {
            label: 'Tela de Login',
            imgPath:
                '/workplace.svg',
          },
          {
            label: 'Tela de Chat',
            imgPath:
                '/workplace.svg',
          }
        ],
        title: "Ciência de Dados",
        subtitle:
            "Utilização de Machine Learning para .",
        description:
            "Aplicação Web de vídeos no modelo do Netflix."
      },
      {
        imgs: [
          {
            label: 'Tela de Login',
            imgPath:
                '/workplace.svg',
          },
          {
            label: 'Tela de Chat',
            imgPath:
                '/workplace.svg',
          }
        ],
        title: "Inteligência Artificial",
        subtitle:
            "Aplicação Web de vídeos no modelo do Netflix.",
        description:
            "Aplicação Web de vídeos no modelo do Netflix."
      },
      {
        imgs: [
          {
            label: 'Tela de Login',
            imgPath:
                '/workplace.svg',
          },
          {
            label: 'Tela de Chat',
            imgPath:
                '/workplace.svg',
          }
        ],
        title: "Inteligência Artificial",
        subtitle:
            "Aplicação Web de vídeos no modelo do Netflix.",
        description:
            "Aplicação Web de vídeos no modelo do Netflix."
      },
      {
        imgs: [
          {
            label: 'Tela de Login',
            imgPath:
                '/workplace.svg',
          },
          {
            label: 'Tela de Chat',
            imgPath:
                '/workplace.svg',
          }
        ],
        title: "Automatização de Processos",
        subtitle:
            "Aplicação Web de vídeos no modelo do Netflix.",
        description:
            "Aplicação Web de vídeos no modelo do Netflix."
      }
    ];

    return (
        <div style={{background: "#3df0b1", width: "100%", display: "flex", justifyContent: "center"}}>
          <div className={classes.root} id="projetos">
            <Grid container justify="center" alignItems="center">
              <Typography className={classes.title}>Projetos</Typography>
            </Grid>
            <Grid container display="flex" alignItems="center" justify="space-evenly">
              {DataCard.map(data => (
                  <Grid className={classes.card} item>
                    <MediaCard {...data} />
                  </Grid>
              ))}
            </Grid>
          </div>
        </div>
    );
  }
}

Projetos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projetos);
