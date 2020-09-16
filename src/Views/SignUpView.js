import React, { useState } from "react";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import JSONForm from "../Components/JSONForm.js";
import { useValidationPropsTextField } from "../Hooks/useFormValidation.js";

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

  const [passwordValue, setPasswordValue] = useState("");

  const validationObject = {
    [id_username]: (text) => {
      if (text.length < 5) return "Login must have more than 5 characters";
      return "";
    },
    [id_email]: (text) => {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(text)) return "Please type a valid email";
      return "";
    },
    [id_password]: (text) => {
      setPasswordValue(text);
      if (text.length < 8) return "Password must have more than 8 characters";
      return "";
    },
    [id_passwordConfirmation]: (text) => {
      if (text !== passwordValue) return "Passwords are not equal";
      return "";
    },
  };

  const [validationProps, buttonProps] = useValidationPropsTextField(
    validationObject
  );

  const SignUpForm = (
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
          required
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
          required
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
          {...buttonProps}
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
