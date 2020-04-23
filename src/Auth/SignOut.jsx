import React, { Component } from "react";
import { logoutUser } from "../store/actions/firebaseAuth";

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Logging Out....</div>;
  }
}

export default SignOut;
