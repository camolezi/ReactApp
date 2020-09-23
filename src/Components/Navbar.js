import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import LoginView from "../Views/ModalViews/LoginView.js";

import { Link as RouterLink } from "react-router-dom";

import { selectUsername } from "../Store/Slices/loginSlice.js";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkTitle: {
    color: "inherit",
    textDecoration: "none",
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const userLogin = useSelector(selectUsername);
  const userLogged = Boolean(userLogin);

  let navBarButtons = (
    <>
      <LoginView />
      <Button color="inherit" component={RouterLink} to="/signup">
        SIGN UP
      </Button>
    </>
  );
  if (userLogged) {
    navBarButtons = <h1>{userLogin}</h1>;
  }

  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          <RouterLink to="/" className={classes.linkTitle}>
            PlaceHolder
          </RouterLink>
        </Typography>

        {navBarButtons}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
