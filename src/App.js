import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Athena from "./components/Athena";
// import Fixit from "./components/Fixit";
import About from "./components/About";
import yellow from "./assets/Underline_yellow.svg";
import { useWindowWidth } from "@react-hook/window-size";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  appBarColor: {
    backgroundColor: "transparent",
  },
  paperElevation: {
    boxShadow: "none",
  },
  links: {
    textDecoration: "none",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
    color: "#333333",
    fontSize: "1.6em",
    padding: "10px 10px 0 10px",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 400,
  },
  toolBar: {
    padding: "40px 30px 20px",
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function App(props) {
  const classes = useStyles();

  const windowWidth = useWindowWidth();

  const windowXS = windowWidth < 600;

  const [aboutPage, setAboutPage] = useState();

  const checkPage = (aboutPage) => {
    return setAboutPage(aboutPage);
  };

  console.log(window.location.href, window.location.href.indexOf("about") > -1);
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <AppBar
          position="relative"
          classes={{
            colorPrimary: classes.appBarColor,
            root: classes.paperElevation,
          }}
        >
          <Toolbar className={classes.toolBar}>
            <Grid justify="flex-end" container>
              <Grid item>
                <Grid alignItems="center" container>
                  <Grid>
                    <Link className={classes.links} to="/">
                      Work
                    </Link>
                  </Grid>
                  {!aboutPage && (
                    <img
                      alt=""
                      style={{ position: "absolute", top: 75 }}
                      width={windowXS ? "15%" : "6%"}
                      src={yellow}
                    />
                  )}
                  <Grid>
                    <Link className={classes.links} to="/about">
                      About
                    </Link>
                  </Grid>
                  {aboutPage && (
                    <img
                      alt=""
                      style={{ position: "absolute", top: 75, right: 85 }}
                      width={windowXS ? "15%" : "6%"}
                      src={yellow}
                    />
                  )}
                  <Grid>
                    <a
                      className={classes.links}
                      href="https://www.linkedin.com/in/katy-romney/"
                      target="blank"
                    >
                      <LinkedInIcon fontSize="large" htmlColor="#0099dc" />
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar style={{ minHeight: 1 }} id="back-to-top-anchor" />
        <Grid>
          {props.children}

          <Switch>
            <Route path="/about">
              <About checkPage={checkPage} />
            </Route>
            <Route path="/athena">
              <Athena />
            </Route>
            <Route path="/other1">
              <Athena />
            </Route>
            <Route path="/other2">
              <Athena />
            </Route>
            <Route path="/">
              <Main checkPage={checkPage} />
            </Route>
          </Switch>
        </Grid>
      </Router>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
