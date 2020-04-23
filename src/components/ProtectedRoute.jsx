import React from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  type,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isVerifying ? (
        <Spinner></Spinner>
      ) : isAuthenticated ? (
        <Component type={type} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
export default ProtectedRoute;
