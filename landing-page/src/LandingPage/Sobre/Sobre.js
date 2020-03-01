import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import SobreCard from "./SobreCard/SobreCard";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    minHeight: "100vh",
    width: "100vw"
  },
  title: {
    fontSize: "56px",
    fontFamily: "lato",
    fontWeight: "bold",
    color: "#1D2A30"
  },
  text: {
    fontSize: "20px",
    fontFamily: "lato",
    display: "flex",
    justifyContent: "center",
    color: "#1D2A30"
  },
  img: {
    width: "180px",
    height: "180px",
    borderRadius: "50%"
  },
  card: {
    paddingBottom: "8px",
    paddingTop: "8px",

    width: 300
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
});

class Sobre extends React.Component {
  render() {
    const { classes } = this.props;

    const DataCard = [
      {
        img: "/stitch.jpg",
        title: "Henrique Fernandes",
        subtitle:
          "Olá, me chamo Henrique e sou engenheiro \
        da computação no ITA. Sempre tive paixão por inovar\
        e experimentar novas tecnologias. Iniciei minha carreira\
        acadêmica adentrando em um grupo de pesquisa em robótica,\
        no qual participei de várias competições de cunho nacional\
        e internacional, tal como a Robocup. Após isso, comecei a\
        desenvolver projetos pessoais e adentrar no mundo profissional,\
        no qual acabei adentrando através da startup Quero Educação,\
        na qual tive experiência com Data Science, principalmente com\
         processamento de linguagem natural."
      },
      {
        img: "/stitch.jpg",
        title: "Henrique Fernandes",
        subtitle:
          "Olá, me chamo Henrique e sou engenheiro \
        da computação no ITA. Sempre tive paixão por inovar\
        e experimentar novas tecnologias. Iniciei minha carreira\
        acadêmica adentrando em um grupo de pesquisa em robótica,\
        no qual participei de várias competições de cunho nacional\
        e internacional, tal como a Robocup. Após isso, comecei a\
        desenvolver projetos pessoais e adentrar no mundo profissional,\
        no qual acabei adentrando através da startup Quero Educação,\
        na qual tive experiência com Data Science, principalmente com\
         processamento de linguagem natural."
      },
      {
        img: "/stitch.jpg",
        title: "Henrique Fernandes",
        subtitle:
          "Olá, me chamo Henrique e sou engenheiro \
        da computação no ITA. Sempre tive paixão por inovar\
        e experimentar novas tecnologias. Iniciei minha carreira\
        acadêmica adentrando em um grupo de pesquisa em robótica,\
        no qual participei de várias competições de cunho nacional\
        e internacional, tal como a Robocup. Após isso, comecei a\
        desenvolver projetos pessoais e adentrar no mundo profissional,\
        no qual acabei adentrando através da startup Quero Educação,\
        na qual tive experiência com Data Science, principalmente com\
         processamento de linguagem natural."
      }
    ];
    return (
      <div
        style={{
          background: "#3df0b1",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className={classes.root} id="sobre">
          <Grid
            container
            display="flex"
            alignItems="center"
            justify="space-evenly"
          >
            {DataCard.map(data => (
              <Grid className={classes.card} item>
                <SobreCard {...data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

Sobre.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sobre);
