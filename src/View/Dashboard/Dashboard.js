import React, { useState, useEffect } from "react";

// Material UI
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ColorLensIcon from "@material-ui/icons/ColorLens";

// Components
import Header from "./Components/Header";

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

const lightTheme = {
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#e74c3c",
    },
  },
};

const YellowTheme = {
  palette: {
    primary: {
      main: "#ffff00",
    },
    secondary: {
      main: "#ffff00",
    },
  },
};

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [SpeedDialState, setSpeedDialState] = useState(false);
  const [DBThemeData, setDBThemeData] = useState(darkTheme);

  return (
    <ThemeProvider theme={createMuiTheme(DBThemeData)}>
      <CssBaseline />
      <Header />
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<ColorLensIcon />}
        onOpen={() => setSpeedDialState(true)}
        onClose={() => setSpeedDialState(false)}
        open={SpeedDialState}
        direction={"up"}
      >
        <SpeedDialAction
          tooltipTitle="Dark Theme"
          onClick={() => {
            setDBThemeData(darkTheme);
            // setSpeedDialState(false);
          }}
        />
        <SpeedDialAction
          tooltipTitle="Light Theme"
          onClick={() => {
            setDBThemeData(lightTheme);
            // setSpeedDialState(false);
          }}
        />
        <SpeedDialAction
          tooltipTitle="Yellow Theme"
          onClick={() => {
            setDBThemeData(YellowTheme);
            // setSpeedDialState(false);
          }}
        />
      </SpeedDial>
    </ThemeProvider>
  );
};

export default Dashboard;
