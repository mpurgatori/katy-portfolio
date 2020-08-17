import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography, Button } from "@material-ui/core";
import flashlightGirl from "../assets/flashlightGirl.png";
// import sketchLogo from "..assets/Logo"
// import miroLogo
// import invisionLogo

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#000",
    fontFamily: "'Nunito', sans-serif",
  },
  textExtraBold: {
    fontWeight: 800,
  },
  textSemiBold: {
    fontWeight: 600,
  },
  panel: {
    minHeight: 500,
    position: "relative",
  },
  paddingBottomText: {
    paddingBottom: 15,
  },
  panelGrey: {
    backgroundColor: "#F5F5F5",
    padding: 30,
    position: "relative",
  },
  quarterCircle: {
    position: "absolute",
    height: 75,
    width: 75,
    lineHeight: 75,
    textAlign: "center",
    background: "#f78888",
    fontSize: "1.5rem",
  },
  quarterCircleBottomLeft: {
    borderBottomLeftRadius: 100,
    top: 0,
    right: 0,
  },
  quarterCircleTopLeft: {
    borderTopLeftRadius: 100,
    bottom: 0,
    right: 0,
  },
  ulStyle: {
    listStyle: "none",
  },
  bullets: {
    "li&::before": {
      content: '"•"',
      color: "#90ccf4",
      display: "inline-block",
      width: "1em",
      marginLeft: "-1em",
    },
  },
}));

export default function Athena() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main>
        <Container style={{ paddingRight: 10, paddingLeft: 10 }}></Container>
        <Grid className={classes.panel}>
          <div
            className={`${classes.quarterCircle} ${classes.quarterCircleTopLeft}`}
          ></div>
        </Grid>
        {/* ProjectOverview */}
        <Grid
          style={{ paddingRight: 10, paddingLeft: 10 }}
          className={classes.panelGrey}
        >
          <div
            className={`${classes.quarterCircle} ${classes.quarterCircleBottomLeft}`}
          ></div>
          <Grid container>
            <Grid xs={12} sm={6} alignItems="center" container justify="center">
              <Typography
                variant="h3"
                className={`${classes.text} ${classes.textExtraBold}`}
              >
                Project overview
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              className={classes.panel}
              alignItems="center"
              container
            >
              <Grid className={`${classes.text}`}>
                <Grid className={classes.paddingBottomText}>
                  <Typography
                    variant="h6"
                    className={`${classes.text} ${classes.textExtraBold}`}
                  >
                    Timeframe
                  </Typography>
                  <Typography className={classes.text}>6 weeks</Typography>
                </Grid>
                <Grid className={classes.paddingBottomText}>
                  <Typography
                    variant="h6"
                    className={`${classes.text} ${classes.textExtraBold}`}
                  >
                    Role
                  </Typography>
                  <Typography className={classes.text}>
                    UX designer (team of 4 UX designers)
                  </Typography>
                </Grid>
                <Grid className={classes.paddingBottomText}>
                  <Typography
                    variant="h6"
                    className={`${classes.text} ${classes.textExtraBold}`}
                  >
                    Deliverables
                  </Typography>
                  <Typography className={classes.text}>
                    <ul className={classes.ulStyle}>
                      <li className={classes.bullets}>Competitive analysis</li>
                      <li className={classes.bullets}>Interview insights</li>
                      <li className={classes.bullets}>User survey</li>
                      <li className={classes.bullets}>Personas</li>
                      <li className={classes.bullets}>Journey map</li>
                      <li className={classes.bullets}>Wireframes</li>
                      <li className={classes.bullets}>Clickable prototype</li>
                    </ul>
                  </Typography>

                  <Typography className={classes.text}>
                    Competitive analysis / Interview transcripts & recordings /
                    User survey results / Personas / User journey map / Paper
                    prototype / Wireframes / Clickable prototype
                  </Typography>
                </Grid>
                <Grid>
                  <Typography
                    variant="h6"
                    className={`${classes.text} ${classes.textExtraBold}`}
                  >
                    Tools
                  </Typography>{" "}
                  <Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                    <Grid></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* The Brief */}
        <Grid style={{ paddingRight: 10, paddingLeft: 10 }}>
          <Grid className={classes.panel} container>
            <Grid xs={12} sm={6} alignItems="center" justify="center" container>
              <Grid xs={8}>
                <Typography
                  style={{ fontSize: 100, height: 70, color: "#f78888" }}
                  className={classes.text}
                >
                  “
                </Typography>
                <Typography
                  style={{ paddingLeft: 40 }}
                  className={`${classes.text} ${classes.textSemiBold}`}
                  variant="h5"
                >
                  Design a product that will strengthen the library’s
                  relationship with the community it serves and improve patron’s
                  employability skills, helping prepare adults over 22 for a new
                  labour market.
                </Typography>
                <Typography
                  style={{
                    fontSize: 100,
                    height: 70,
                    color: "#f78888",
                    textAlign: "right",
                  }}
                  className={classes.text}
                >
                  ”
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={12} sm={6} alignItems="center" container justify="center">
              <Typography
                variant="h3"
                className={`${classes.text} ${classes.textExtraBold}`}
              >
                The brief
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* The Background */}
        <Grid
          className={classes.panelGrey}
          style={{ paddingRight: 10, paddingLeft: 10 }}
        >
          <Grid className={classes.panel} container>
            <Grid xs={12} sm={6} alignItems="center" container justify="center">
              <Typography
                variant="h3"
                className={`${classes.text} ${classes.textExtraBold}`}
              >
                Background
              </Typography>
            </Grid>
            <Grid xs={12} sm={6} alignItems="center" justify="center" container>
              <Grid xs={8}>
                <Typography
                  style={{ paddingBottom: 20 }}
                  className={`${classes.text} ${classes.textSemiBold}`}
                  variant="h6"
                >
                  In an age of digital expansion, under-utilised public
                  libraries are closing across the country. In order to survive,
                  they must adapt to the modern day by providing relevant,
                  essential services to the local community.
                </Typography>

                <Typography
                  className={`${classes.text} ${classes.textSemiBold}`}
                  variant="h6"
                >
                  This project set out to discover what kind career support the
                  library could offer that would best meet the needs of target
                  users, and what was the optimal way for these services to be
                  accessed digitally.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Navigating the page */}
        <Grid style={{ paddingRight: 10, paddingLeft: 10 }}>
          <Grid className={classes.panel} container>
            <Grid xs={12} justify="center" container>
              <Grid xs={6}>
                <Typography
                  variant="h3"
                  style={{ paddingTop: 50, textAlign: "center" }}
                  className={`${classes.text} ${classes.textExtraBold}`}
                >
                  Finding your way around
                </Typography>
                <Typography
                  style={{ padding: 50 }}
                  className={`${classes.text} ${classes.textSemiBold}`}
                  variant="h5"
                >
                  This case study is divided into 3 sections. If you’re
                  interested in a particular part of the process, feel free to
                  jump right in!
                </Typography>
                <Grid justify="center" container>
                  <Grid item>
                    <Button
                      style={{
                        backgroundColor: "#f78888",
                        margin: 20,
                        padding: 10,
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Research
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      style={{
                        backgroundColor: "#f78888",
                        margin: 20,
                        padding: 10,
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Discoveries
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      style={{
                        backgroundColor: "#f78888",
                        margin: 20,
                        padding: 10,
                      }}
                      variant="contained"
                      color="primary"
                    >
                      Solutions
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}
