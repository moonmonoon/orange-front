import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import "./Nav.css";

function Nav(props) {
  return (
    <div>
      <div className="NavButton">
        <NavLink to="/inner">
          <button type="button" class="btn btn-outline-warning">
            Inner Persona
          </button>
        </NavLink>
        <NavLink to="/prism">
          <button type="button" class="btn btn-outline-warning">
            Prism
          </button>
        </NavLink>
        <NavLink to="/outer">
          <button type="button" class="btn btn-outline-warning">
             Outer Persona
          </button>
        </NavLink>
      </div>

    </div>
  );
}

export default Nav;
