import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography } from "@material-ui/core";
import Katy from "../assets/katy_river.png";
import KatyClips from "../assets/Katy_profile_clips.png";
import { useWindowWidth } from "@react-hook/window-size";
import KatyRotated from "../assets/Katy-rotated.png";

// import sketchLogo from "..assets/Logo"
// import miroLogo
// import invisionLogo

const useStyles = makeStyles((theme) => ({
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
  textExtraBold: {
    fontWeight: 800,
  },
  textSemiBold: {
    fontWeight: 600,
  },
  aboutText: {
    paddingBottom: 20,
  },
  textConatiner: {
    padding: "5px 20px 20px 20px",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "25%",
    },
  },
  imageContainer: {
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginLeft: -35,
    },
  },
  katyImage: {
    position: "absolute",
    left: 70,
    top: -110,
  },
  katyRotated: {
    WebkitTransform: "rotate(270deg)",
    MozTransformStyle: "rotate(270deg)",
    transform: "rotate(90deg)",
  },
}));

export default function Athena() {
  const classes = useStyles();

  const windowWidth = useWindowWidth();

  const windowXS = windowWidth < 600;

  return (
    <React.Fragment>
      <Grid container>
        <Grid className={classes.imageContainer} xs={12} sm={6} item>
          {windowXS ? (
            <img
              className={classes.katyRotated}
              width="80%"
              src={KatyRotated}
            />
          ) : (
            <img className={classes.katyImage} width="80%" src={KatyClips} />
          )}
        </Grid>
        <Grid className={classes.textConatiner} xs={12} sm={5} item>
          <Grid style={{ paddingBottom: 50 }} container>
            <Grid className={`${classes.text} ${classes.textExtraBold}`}>
              Hello there,&nbsp;
            </Grid>
            <Grid className={`${classes.text} ${classes.katy}`}>I'm Katy</Grid>
            <Grid className={`${classes.text} ${classes.period}`}>.</Grid>
          </Grid>
          <Typography className={classes.aboutText} variant="h5">
            I’m a UX designer with a creative eye and a passion for
            understanding what makes people tick
          </Typography>
          <Typography className={classes.aboutText} variant="h5">
            I have a degree in psychology and a masters in social & cognitive
            neuroscience (journal publication pending - oo, fancy!)
          </Typography>
          <Typography className={classes.aboutText} variant="h5">
            Balancing a logical mindset with genuine empathy, I draw rich
            insights from people’s stories and translate them into intuitive
            designs
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
