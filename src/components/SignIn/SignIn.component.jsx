import React, { useState } from "react";
import { auth } from "../../configs/firebase.config";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    props.history.push("/home");

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
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
    <div className="sign-in">
      <h1>Sign in page</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          type="text"
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

        <Button
          onClick={handleSignIn}
          variant="outlined"
          style={{
            width: "30%",
            height: "5vh",
            marginLeft: "50%",
            backgroundColor: "#def6c6",
          }}
        >
          Sign In
        </Button>
      </form>
      <h3>
        If you don't have an account yet, you can register here{" "}
        <NavLink to="sign-up">
          <span style={{ color: "black" }}>Sign Up</span>
        </NavLink>
      </h3>
    </div>
  );
};

export default SignIn;
