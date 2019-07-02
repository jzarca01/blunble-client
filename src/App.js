import React from "react";
import io from "socket.io-client";
import { connect } from "react-redux";

import { API_URL } from "./config/config";

import OAuth from "./components/oauth-button";
import Intro from "./components/intro";
import Dashboard from "./components/dashboard";

import "./App.css";

const socket = io(API_URL);

const App = ({ isLoggedIn }) => (
  <div className="wrapper fadein-fast">
    <h1>Blunble</h1>
    {!isLoggedIn && (
      <React.Fragment>
        <Intro />
        <div className="container">
          <OAuth provider={"twitter"} key={"twitter"} socket={socket} />
        </div>
      </React.Fragment>
    )}
    {isLoggedIn && <Dashboard />}
  </div>
);

const mapStateToProps = state => ({
  isLoggedIn: state.root.isLoggedIn
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
