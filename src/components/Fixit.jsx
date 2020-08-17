import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Typography, Button } from "@material-ui/core";
import flashlightGirl from "../assets/flashlightGirl.png";
import WholePage from "../assets/whole_page.png";
import FullText from "../assets/Fullscreen_smaller_text.png";
import TestFinal from "../assets/TEST_FINAL.png";
import Latest from "../assets/Latest.png";
import test from "../assets/whitebacktest.jpeg";

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
        <div style={{ textAlign: "center" }}>
          <img width="100%" src={test} />
          <img width="100%" src={Latest} />
        </div>
      </main>
    </React.Fragment>
  );
}
