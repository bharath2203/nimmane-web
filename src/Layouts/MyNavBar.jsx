import React, { Component } from "react";
import { logoutUser } from "../store/actions/firebaseAuth";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import { Navbar, Icon, NavItem, Dropdown } from "materialize-css";

class MyNavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <React.Fragment>
        <ul id="navDropDown" class="dropdown-content">
          <li>
            <NavLink to="/rents">Rents</NavLink>
          </li>
          <li>
            <NavLink to="/leases">Leases</NavLink>
          </li>
          <li>
            <NavLink to="/sales">Sales</NavLink>
          </li>
        </ul>
        <nav>
          <div class="nav-wrapper">
            <a href="/" class="brand-logo">
              NIMMANE
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/new">Upload</NavLink>
              </li>
              <li>
                <a class="dropdown-trigger" href="#!" data-target="navDropDown">
                  Navigate<i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default MyNavBar;
