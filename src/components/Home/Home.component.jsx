import React from "react";
import { connect } from "react-redux";
import { auth } from "../../configs/firebase.config";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const Home = ({ currentUser }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "5%",
    },
    paper: {
      padding: "5%",
      height: "60vh",
      width: "60%",
      backgroundColor: "#e1d7b8",
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  /*
  sprawdzenie  wyswietlenie danych
  let user = currentUser;
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.displayName);
      // User is signed in.
      /*
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });*/
  /* 2 opcja
  let user = currentUser;
  let name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }*/
  /*
  aktualizowanie danych
  var user = currentUser;
  
  user
    .updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
    .then(function () {
      console.log(user.displayName);
      console.log("Update succesfull");
      // Update successful.
    })
    .catch(function (error) {
      console.log("Error");
      // An error happened.
    });*/

  return (
    <div className="home">
      <h1 style={{ textAlign: "center", marginBottom: "10%" }}>Home Page</h1>
      <h2>You are logged in as {`${currentUser.email}`}</h2>
      <h3>Do you want to add more information to your profile?</h3>
      <NavLink to="/home/more_informations">
        <div>Add More Informations</div>
      </NavLink>
      <Button
        variant="outlined"
        style={{
          width: "20%",
          height: "5vh",
          marginLeft: "40%",
          backgroundColor: "#def6c6",
        }}
        onClick={() => auth.signOut()}
      >
        Loggout
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Home);
