import React, { useState } from "react";
import JSONForm from "../../Components/JSONForm.js";

import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
} from "@material-ui/core";

//Redux store
import {
  selectToken,
  selectUsername,
  updateToken,
  updateUsername,
} from "../../Store/Slices/loginSlice.js";

import { useDispatch } from "react-redux";

function LoginView(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let logInForm = (
    <JSONForm
      id="logInForms"
      url="/login"
      afterSubmit={(ok, data) => {
        if (ok) {
          dispatch(updateToken(data.acessToken));
          dispatch(updateUsername(data.login));
          handleClose();
        }
      }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        alignContent="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus={true}
            name="login"
            id="usernameField_logIn"
            label="Username"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            name="password"
            id="passowordField_logIn"
            label="Password"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
          >
            LOG IN
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClose}
          >
            BACK
          </Button>
        </Grid>
      </Grid>
    </JSONForm>
  );

  //login Dialog in throwing findDOMNode warning. Its proprably FROM material UI component. Investigate this latter
  return (
    <>
      <Button color="inherit" onClick={handleClickOpen}>
        LOG IN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Log in</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please log in:{" "}
            <Link component={RouterLink} to="/signup" onClick={handleClose}>
              Don't have a account?
            </Link>
          </DialogContentText>
          {logInForm}
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default LoginView;
