import React, { Component } from "react";
import PropTypes from "prop-types";
import { API_URL } from "../../config/config";

export default class OAuthButton extends Component {
  state = {
    disabled: ""
  };

  componentDidMount() {
    const { socket, provider, setUser, setSession } = this.props;

    socket.on(provider, data => {
      const { user, session } = data
      setUser(user);
      setSession(session);
      this.popup.close();
    });
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
        this.setState({ disabled: "" });
      }
    }, 1000);
  }

  openPopup() {
    const { provider, socket } = this.props;
    const width = 600,
      height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/${provider}?socketId=${socket.id}`;

    return window.open(
      url,
      "",
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    );
  }

  startAuth = () => {
    if (!this.state.disabled) {
      this.popup = this.openPopup();
      this.checkPopup();
      this.setState({ disabled: "disabled" });
    }
  };

  render() {
    const { provider } = this.props;
    const { disabled } = this.state;

    return (
      <div>
          <div className="button-wrapper fadein-fast">
            <button
              onClick={this.startAuth}
              className={`${provider} ${disabled} button`}
            >
              Sign in with Twitter
            </button>
          </div>
      </div>
    );
  }
}

OAuthButton.propTypes = {
  provider: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired
};
