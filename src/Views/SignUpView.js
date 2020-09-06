import React from "react";
import { Grid, TextField, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function SignUpView(props) {
  const classes = useStyles();
  //npm install prettier -D --save-exact

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <form id="signUpForm" autoComplete="off" method="post" action="/user">
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
                autoFocus="true"
                name="login"
                id="usernameField"
                label="Username"
                variant="outlined"
              />
            </Grid>

            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                fullWidth
                type="email"
                name="email"
                id="emailField"
                label="Email"
                variant="outlined"
              />
            </Grid>

            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                required
                fullWidth
                type="password"
                name="password"
                id="passwordField"
                label="Password"
                variant="outlined"
              />
            </Grid>

            <Grid item className={classes.gridItem} xs={12}>
              <TextField
                fullWidth
                type="password"
                id="passwordConfirmField"
                label="Confirm password"
                variant="outlined"
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
        </form>
      </div>
    </Container>
  );
}

export default SignUpView;
