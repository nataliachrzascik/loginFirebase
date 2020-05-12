import React from "react";
import { connect } from "react-redux";
import { auth } from "../../configs/firebase.config";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const MoreInformations = ({ currentUser }) => {
  const classes = useStyles();
  let nick, name, country, city;
  let user = currentUser;
  let history = useHistory();

  const handleLetterNick = (e) => {
    nick = e.target.value;
    return nick;
  };
  const handleLetterName = (e) => {
    name = e.target.value;
    return name;
  };
  const handleLetterCountry = (e) => {
    country = e.target.value;
    return country;
  };
  const handleLetterCity = (e) => {
    city = e.target.value;
    return city;
  };
  const handleButton = (e) => {
    e.preventDefault();
    console.log("dane");
    console.log(nick, name, country, city);
    console.log(user);
    //jak nie ma czegos podanego to undefined
    user
      .updateProfile({
        displayName: nick,
        city: city,
        country: country,
        firstName: name,

        //photoURL: "https://example.com/jane-q-user/profile.jpg",
        //zdjecie moze byc wybierane z przykladow lub z pliku
      })
      .then(function () {
        console.log(user.displayName);
        console.log("Update succesfull");
        // Update successful.
      })
      .catch(function (error) {
        console.log("Error");
        // An error happened.
      });
    history.push("/home/informations");
  };
  return (
    <div>
      <h3>More informations</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="nick" label="Nick" onChange={handleLetterNick} />
        <TextField id="name" label="Name" onChange={handleLetterName} />
        <TextField
          id="country"
          label="Country"
          onChange={handleLetterCountry}
        />
        <TextField id="city" label="City" onChange={handleLetterCity} />
        {/* photo */}
        <Button
          variant="outlined"
          style={{
            width: "20%",
            height: "5vh",
            marginLeft: "40%",
            backgroundColor: "#def6c6",
          }}
          onClick={handleButton}
        >
          Send It
        </Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(MoreInformations);
