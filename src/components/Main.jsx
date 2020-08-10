import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

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
}));

const Panel = ({ backGroundColor }) => {
  const classes = useStyles();
  return (
    <Grid style={{ padding: 5 }} xs={12} md={4} item>
      <Grid
        style={{ backgroundColor: backGroundColor }}
        className={classes.panel}
      ></Grid>
    </Grid>
  );
};

export default function Main() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Grid container>
          <Grid className={`${classes.text} ${classes.hello}`}>
            Hello there,&nbsp;
          </Grid>
          <Grid className={`${classes.text} ${classes.katy}`}>I'm Katy</Grid>
          <Grid className={`${classes.text} ${classes.period}`}>.</Grid>
        </Grid>
        <Container
          style={{ paddingRight: 10, paddingLeft: 10 }}
          className={classes.panelGrid}
        >
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Panel backGroundColor={"#f78888"} />
            <Panel backGroundColor={"#f3d250"} />
            <Panel backGroundColor={"#90ccf4"} />
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
