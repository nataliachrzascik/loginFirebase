import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../configs/firebase.config";
import { connect } from "react-redux";
import logo from "../../images/logo.png";
const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <div className="navbar_logo"></div>

      <div className="links">
        <ul>
          <NavLink to="/sign-in">
            <h2 style={{ color: "black" }}>Sign In</h2>
          </NavLink>
          {currentUser && currentUser ? (
            <li>
              <button onClick={() => auth.signOut()}>Sign out</button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps, null)(Navbar);
