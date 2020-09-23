import React from "react";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link as RouterLink } from "react-router-dom";

import JSONForm from "../Components/JSONForm.js";
import WithAuthorization from "../Components/Authorization.js";

const useStyles = makeStyles((theme) => ({
  gridCointainer: {},

  root: {
    flexGrow: 1,
    paddingTop: "30px",
  },

  gridItem: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

//View form the signUp page
function CreatePostView(props) {
  const classes = useStyles();

  let PostForm = (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      alignContent="center"
      spacing={2}
      className={classes.gridCointainer}
    >
      <Grid item className={classes.gridItem} xs={12}>
        <TextField
          required
          fullWidth
          autoFocus={true}
          name="title"
          id="titleField"
          label="Title"
          variant="outlined"
        />
      </Grid>

      <Grid item className={classes.gridItem} xs={12}>
        <TextField
          fullWidth
          name="body"
          id="bodyField"
          label="Text"
          variant="outlined"
          multiline
          rows={15}
        />
      </Grid>

      <Grid item className={classes.gridItem} xs={12}></Grid>

      <Grid item className={classes.gridItem} xs={6} sm={4}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
        >
          SUBMIT
        </Button>
      </Grid>
      <Grid item className={classes.gridItem} xs={6} sm={4}>
        <Button
          component={RouterLink}
          to="/"
          fullWidth
          variant="contained"
          color="secondary"
          size="medium"
        >
          CANCEL
        </Button>
      </Grid>
    </Grid>
  );

  const FormWithAuth = WithAuthorization(JSONForm);

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <FormWithAuth id="postForm" url="/post">
          {PostForm}
        </FormWithAuth>
      </div>
    </Container>
  );
}

export default CreatePostView;
