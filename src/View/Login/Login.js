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

// MUI Styles
const useStyles = makeStyles((theme) => ({
  adminLogin: {
    height: "100vh",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

function Login(props) {
  const classes = useStyles();
  const [showLoading, setShowLoading] = useState(false);
  const [FormErrorState, setFormErrorState] = useState(false);
  const [FormErrorMsg, setFormErrorMsg] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    e.persist();

    const email = e.target.email.value;
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

    props.history.push("/");

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
        <div className="form">
          <h1>Sign in</h1>
          <form noValidate onSubmit={(e) => handleSignIn(e)}>
            <Collapse in={FormErrorState}>
              <Alert severity="error">{FormErrorMsg}</Alert>
            </Collapse>
            <br />
            <TextField
              className={classes.input}
              type="email"
              name="email"
              label="Email address"
              fullWidth
            />
            <TextField
              className={classes.input}
              type="password"
              name="password"
              label="Password"
              fullWidth
            />
            <Button
              type="submit"
              itemProp={{ type: "submit" }}
              variant="outlined"
              color="primary"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;
