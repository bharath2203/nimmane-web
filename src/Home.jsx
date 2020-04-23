import React from "react";
import "./App.css";
import PropertyUploadForm from "./Forms/PropertyUploadForm/PropertyUploadForm";
import PropertyList from "../src/Property/PropertyList";
import { Switch, Route } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/new" component={PropertyUploadForm} />
        <Route path="/props" component={PropertyList} />
        <Route path="/" component={PropertyList} />
      </Switch>
    </React.Fragment>
  );
}
