import React, { useState } from "react";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import JSONForm from "../Components/JSONForm.js";
import {
  useFormValidation,
  useValidationProps,
} from "../Hooks/useFormValidation.js";

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
function SignUpView(props) {
  const classes = useStyles();

  const id_username = "usernameField";
  const id_email = "emailField";
  const id_password = "passwordField";
  const id_passwordConfirmation = "passwordConfirmField";

  const validationObject = {
    [id_username]: (text) => {
      return "";
    },
    [id_email]: (text) => {
      if (text == "abc") {
        return "This is a eroor";
      }
      return "";
    },
    [id_password]: (text) => {
      if (text == "abc") {
        return "This is a eroor";
      }
      return "";
    },
    [id_passwordConfirmation]: (text) => {
      if (text == "abc") {
        return "This is a eroor";
      }
      return "";
    },
  };

  const validationProps = useValidationProps(validationObject);

  let SignUpForm = (
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
          name="login"
          required
          fullWidth
          autoFocus={true}
          label="Username"
          variant="outlined"
          id={id_username}
          {...validationProps(id_username)}
        />
      </Grid>

      <Grid item className={classes.gridItem} xs={12}>
        <TextField
          name="email"
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          id={id_email}
          {...validationProps(id_email)}
        />
      </Grid>

      <Grid item className={classes.gridItem} xs={12}>
        <TextField
          name="password"
          required
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          id={id_password}
          {...validationProps(id_password)}
        />
      </Grid>

      <Grid item className={classes.gridItem} xs={12}>
        <TextField
          fullWidth
          type="password"
          label="Confirm password"
          variant="outlined"
          id={id_passwordConfirmation}
          {...validationProps(id_passwordConfirmation)}
        />
      </Grid>

      <Grid item className={classes.gridItem} xs={12}></Grid>

      <Grid item className={classes.gridItem} xs={12}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          SUBMIT
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <JSONForm
          id="signUpForm"
          url="/user"
          afterSubmit={() => console.log("Callback")}
        >
          {SignUpForm}
        </JSONForm>
      </div>
    </Container>
  );
}

export default SignUpView;
