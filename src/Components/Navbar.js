import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

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
          PlaceHolder
        </Typography>

        <Button color="inherit" component={Link} to="/login">
          LOG IN
        </Button>

        <Button color="inherit" component={Link} to="/signup">
          SIGN UP
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
