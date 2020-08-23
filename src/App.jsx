import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import MyNavBar from "./Layouts/MyNavBar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import PropertyUploadForm from "./Forms/PropertyUploadForm";
import PropertyList from "../src/Property/PropertyList";
import NimmaneChatBot from "./chatbot/NimmaneChatBot";

import { connect } from "react-redux";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <BrowserRouter>
      <div className="App">
        {isAuthenticated ? <MyNavBar /> : null}
        <main className="">
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={PropertyList}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
              type="rents"
            ></ProtectedRoute>
            <ProtectedRoute
              exact
              path="/rents"
              component={PropertyList}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
              type="rents"
            ></ProtectedRoute>
            <ProtectedRoute
              exact
              path="/sales"
              component={PropertyList}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
              type="sales"
            ></ProtectedRoute>
            <ProtectedRoute
              exact
              path="/leases"
              component={PropertyList}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
              type="leases"
            ></ProtectedRoute>
            <ProtectedRoute
              exact
              path="/new"
              component={PropertyUploadForm}
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
            ></ProtectedRoute>
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          <NimmaneChatBot></NimmaneChatBot>
        </main>
      </div>
    </BrowserRouter>
  );
}

const mapStatesToProp = (state) => {
  console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
};

export default connect(mapStatesToProp)(App);
