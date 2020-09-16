import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loadingCircle: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },

  loadingContainer: {
    paddingTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
  },
}));

function LoadingCircle(props) {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.loadingContainer}>
      <CircularProgress className={classes.loadingCircle} />
    </Container>
  );
}

export default LoadingCircle;
