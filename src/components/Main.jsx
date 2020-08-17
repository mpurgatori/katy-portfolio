import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  panelGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  panel: {
    height: 400,
  },
  text: {
    color: "#000",
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
}));

const Panel = ({ backGroundColor, link }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.panelContainer} xs={12} md={4} item>
      <Link className={classes.links} to={`/${link}`}>
        <Grid
          style={{
            backgroundColor: backGroundColor,
            background: `linear-gradient(0deg, ${backGroundColor} 55%, rgba(255,255,255,1) 170%)`,
          }}
          className={classes.panel}
        ></Grid>
      </Link>
    </Grid>
  );
};

export default function Main() {
  const classes = useStyles();

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
          </Grid>
          <Grid container spacing={4}>
            <Panel backGroundColor={"#f78888"} link="athena" />
            <Panel backGroundColor={"#f3d250"} link="other1" />
            <Panel backGroundColor={"#90ccf4"} link="other2" />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
