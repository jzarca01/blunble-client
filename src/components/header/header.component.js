import React from 'react';
import FontAwesome from "react-fontawesome";

import './style.css';

const Header = ({user, logout}) => (
    <div className="header">
        <div className="content">
            <span>@{user.name}</span>{' '}
            <img src={user.photo} alt={user.name} />
            <FontAwesome
              name="times-circle"
              className="close"
              onClick={logout}
            />
        </div>
    </div>
)

export default Header;