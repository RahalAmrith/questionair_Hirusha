import React, { useEffect } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

// controller
import C_User from "./Controller/User";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // var validator = setInterval(C_User.validateSignIn(), 1000);

  var hist = useHistory();
  useEffect(() => {
    C_User.validateSignIn();
  }, [hist]);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (C_User.isAuthenticated()) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
