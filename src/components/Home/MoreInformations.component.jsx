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
  let nick, number;
  let user = currentUser;
  let history = useHistory();

  const handleLetterNick = (e) => {
    nick = e.target.value;
    return nick;
  };

  const handleButton = (e) => {
    e.preventDefault();
    console.log("dane");
    console.log(nick);
    console.log(user);
    //jak nie ma czegos podanego to undefined
    user
      .updateProfile({
        displayName: nick,
      })
      .then(function () {
        console.log(user.displayName);
        console.log("Update succesfull");
        history.push("/home");
        // Update successful.
      })
      .catch(function (error) {
        console.log("Error");
        // An error happened.
      });

    //redux przekazujacy nick
  };
  const handleButtonCancel = (e) => {
    e.preventDefault();
    history.push("/home");
  };
  return (
    <div>
      <h3>New Nick</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="nick"
          style={{ width: "40%" }}
          label="Nick"
          onChange={handleLetterNick}
        />
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
        <Button
          variant="outlined"
          style={{
            width: "20%",
            height: "5vh",
            marginLeft: "40%",
            backgroundColor: "#def6c6",
          }}
          onClick={handleButtonCancel}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(MoreInformations);
