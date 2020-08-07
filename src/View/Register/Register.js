import React, { useState } from "react";
import validator from "validator";
// MUI
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import Collapse from "@material-ui/core/Collapse";

import Loading from "../Loading/Loading";
import { Grid } from "@material-ui/core";

// MUI Styles
const useStyles = makeStyles((theme) => ({
  adminLogin: {
    height: "100vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  form : {
maxWidth : "768px"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    marginBottom: 25,
  },
}));

const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#535c68",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
};

function Register(props) {
  const classes = useStyles();
  const [showLoading, setShowLoading] = useState(false);
  const [FormErrorState, setFormErrorState] = useState(false);
  const [FormErrorMsg, setFormErrorMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    e.persist();

    const email = e.target.userEmail.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      setFormErrorState(true);
      setFormErrorMsg("Please enter email address and password");
      return -1;
    } else if (!validator.isEmail(email)) {
      setFormErrorState(true);
      setFormErrorMsg("Invalid email address.");
      return -1;
    } else {
      setFormErrorState(false);
      setFormErrorMsg("");
    }
    setShowLoading(true);

    props.history.push("/login");

    // var status = await C_Admin.signIn(email, password);

    // if (status.status === 200) {
    //   setFormErrorState(false);
    //   setFormErrorMsg("");
    //   props.setSignIn(true, status.data.token, status.data.email);
    // } else if (status.status === 404) {
    //   setFormErrorState(true);
    //   setFormErrorMsg("User not found");
    // } else if (status.status === 403) {
    //   setFormErrorState(true);
    //   setFormErrorMsg("Invalid Email or password");
    // } else {
    //   setFormErrorState(true);
    //   setFormErrorMsg("Unexpected error occured! Please try again");
    // }
    setShowLoading(false);
  };

  return (
    <ThemeProvider theme={createMuiTheme(darkTheme)}>
      <CssBaseline />
      <div className={classes.adminLogin}>
        <Loading show={showLoading} />
        <div className={classes.form}>
          <h1>Register</h1>
          <form noValidate onSubmit={(e) => handleSignIn(e)}>
            <Collapse in={FormErrorState}>
              <Alert severity="error">{FormErrorMsg}</Alert>
            </Collapse>
            <br />

            <Grid container spacing={5}>
              <Grid item sm={6}>
                <TextField
                  className={classes.input}
                  type="text"
                  name="compName"
                  label="Company Name"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="email"
                  name="compemail"
                  label="Company Email address"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="text"
                  name="country"
                  label="Country"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="text"
                  name="postalCOde"
                  label="Postal Code"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="text"
                  name="address"
                  label="Address"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  className={classes.input}
                  type="text"
                  name="contact"
                  label="Contact"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="text"
                  name="fName"
                  label="First Name"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="text"
                  name="lName"
                  label="Last Name"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="email"
                  name="userEmail"
                  label="User Email Address*"
                  fullWidth
                />
                <TextField
                  className={classes.input}
                  type="password"
                  name="password"
                  label="Password*"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              itemProp={{ type: "submit" }}
              variant="outlined"
              color="primary"
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Register;
