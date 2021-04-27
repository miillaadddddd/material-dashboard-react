import React from "react";
import { Route, Redirect } from "react-router-dom";
import Admin from "../layouts/Admin.js";
import { UserConsumer } from "../Context/UserContext";

export default function PrivateRoute() {
  return (
    <UserConsumer>
      {({ rememberMe }) => (
        <Route
          render={() =>
            localStorage.getItem("rememberMe") ? (
              <Admin />
            ) : (
              <Redirect
                to={{
                  pathname: "/login"
                }}
              />
            )
          }
        />
      )}
    </UserConsumer>
  );
}
