import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui container">
      <div className="ui icon compact menu">
        <div className="item">
          <i className="home icon" />
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <i className="info icon" />
          <Link to="/">About</Link>
        </div>
        <div className="item">
          <i className="users icon" />
          <Link to="/">Contact</Link>
        </div>
        <div className="item right">
          <i className="user outline icon" />
          <Link to="/">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
