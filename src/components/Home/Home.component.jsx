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

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FaceIcon from "@material-ui/icons/Face";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";

const Home = ({ currentUser }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "5%",
    },
    control: {
      padding: theme.spacing(2),
    },
    menu: {
      width: "30%",
    },
    avatar: {
      display: "flex",
      "& > *": {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },
    },
  }));
  const classes = useStyles();
  let user = currentUser;

  return (
    <div className="home">
      <div className={classes.avatar}>
        <Avatar alt="Remy Sharp" src={user.photoURL} />
      </div>
      <h2>You are logged in as {`${currentUser.email}`}</h2>
      {user.displayName ? <h3>Nick: {`${user.displayName}`}</h3> : null}
      <h3>Do you want to add more information to your profile?</h3>

      <a className={classes.menu}>
        <NavLink to="/home/more_informations">
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<AddIcon />}
          />
        </NavLink>
        <NavLink to="/home/more_informationsPhoto">
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FaceIcon />}
          />
        </NavLink>
      </a>

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
