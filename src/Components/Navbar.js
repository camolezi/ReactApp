import React from "react";
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
import LoginView from "../Views/LoginView.js";

import { Link as RouterLink } from "react-router-dom";

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

        <LoginView />

        <Button color="inherit" component={RouterLink} to="/signup">
          SIGN UP
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
