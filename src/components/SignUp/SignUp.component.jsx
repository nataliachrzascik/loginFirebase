import React, { useState } from "react";
import { auth } from "../../configs/firebase.config";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => console.log(user))
        .catch((err) => console.log(err));
    } else {
      alert("Password do not match");
    }
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "80%",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className="sign-up">
      <h1>Sign up page</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
        />
        <TextField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
        />
        <TextField
          type="password"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          label="Password Confirmation"
          variant="outlined"
        />
        <Button
          onClick={handleSignUp}
          variant="outlined"
          style={{
            width: "30%",
            height: "5vh",
            marginLeft: "50%",
            backgroundColor: "#def6c6",
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
