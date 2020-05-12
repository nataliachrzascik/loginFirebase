import React, { useState } from "react";
import { connect } from "react-redux";
import { auth } from "../../configs/firebase.config";

const Informations = ({ currentUser }) => {
  let user = currentUser;

  const [name, setName] = useState(user.firstName);
  const [nick, setNick] = useState(user.displayName);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  return (
    <div>
      {console.log(name)}
      <div>Name {`${name}`}</div>
      <div>Nick {`${nick}`}</div>
      <div>City {`${city}`}</div>
      <div>Country {`${country}`}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Informations);
