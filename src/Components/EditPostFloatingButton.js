import React from "react";

import EditIcon from "@material-ui/icons/Edit";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  addPostIcon: {
    position: "fixed",
    left: "50%",
    bottom: "2%",
    textAlign: "center",
    zIndex: 1,
  },
}));

function EditPostFloatingButton(props) {
  const classes = useStyles();

  return (
    <Fab
      color="secondary"
      aria-label="edit"
      className={classes.addPostIcon}
      component={RouterLink}
      to={props.to}
    >
      <EditIcon />
    </Fab>
  );
}

export default EditPostFloatingButton;
