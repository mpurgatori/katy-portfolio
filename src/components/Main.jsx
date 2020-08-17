import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import pink from "../assets/Underline_pink.svg";
import blue from "../assets/Underline_blue.svg";
import yellow from "../assets/Underline_yellow.svg";
import braniac from "../assets/Brainiac_mockup_original.png";
import fixit from "../assets/Fixit_mockup_original.png";
import athena from "../assets/Athena_mockup_original.png";

const useStyles = makeStyles((theme) => ({
  panelGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  panel: {
    height: 400,
  },
  text: {
    color: "#333333",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "2.3em",
  },
  katy: {
    color: "#90ccf4",
    fontWeight: 800,
  },
  period: {
    color: "#f78888",
    fontWeight: 600,
  },
  panelContainer: {
    paddingTop: 5,
    [theme.breakpoints.up("sm")]: {
      padding: 15,
    },
  },
  linkText: {
    color: "#333333",
    fontFamily: "'Nunito Sans', sans-serif",
    paddingTop: 20,
    paddingLeft: 10,
  },
  links: {
    textDecoration: "none",
  },
}));

const Panel = ({
  backGroundColor,
  link,
  title,
  underline,
  image,
  imgWidth,
}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.panelContainer} xs={12} md={4} item>
      <Link className={classes.links} to={`/${link}`}>
        <Grid
          style={{
            paddingTop: 20,
            textAlign: "center",
            backgroundColor: backGroundColor,
            background: `linear-gradient(0deg, ${backGroundColor} 55%, rgba(255,255,255,1) 170%)`,
          }}
          className={classes.panel}
        >
          <img alt="" width={imgWidth} src={image} />
        </Grid>
        <Typography variant="h4" className={classes.linkText}>
          {title}
        </Typography>
        <img alt="" width="30%" src={underline} />
      </Link>
    </Grid>
  );
};

const Main = ({ checkPage }) => {
  const classes = useStyles();
  checkPage(false);
  return (
    <React.Fragment>
      <main>
        <Container style={{ paddingTop: 0 }} className={classes.panelGrid}>
          <Grid style={{ paddingBottom: 50 }} container>
            <Grid className={`${classes.text} ${classes.hello}`}>
              Hello there,&nbsp;
            </Grid>
            <Grid className={`${classes.text} ${classes.katy}`}>I'm Katy</Grid>
            <Grid className={`${classes.text} ${classes.period}`}>.</Grid>
            <Grid container className={`${classes.text} ${classes.hello}`}>
              UX designer / psychologist / storyteller
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Panel
              backGroundColor={"#f78888"}
              link="athena"
              title="Braniac"
              underline={pink}
              image={braniac}
              imgWidth="84%"
            />
            <Panel
              backGroundColor={"#f3d250"}
              link="other1"
              title="Fixit"
              underline={yellow}
              image={fixit}
              imgWidth="70%"
            />
            <Panel
              backGroundColor={"#90ccf4"}
              link="other2"
              title="Athena"
              underline={blue}
              image={athena}
              imgWidth="70%"
            />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default Main;
