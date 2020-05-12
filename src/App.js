import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar.component';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home.component';
import SignIn from './components/SignIn/SignIn.component';
import SignUp from './components/SignUp/SignUp.component';
import MoreInformations from './components/Home/MoreInformations.component';
import Informations from './components/Home/Informations.component';
import { auth } from './configs/firebase.config';
import { setCurrentUser, clearCurrentUser } from './redux/auth/auth.actions';



import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";





function App({ currentUser, setCurrentUser, clearCurrentUser }) {
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
        //if the user object exist set the current user
      } else {
        clearCurrentUser();
        //we dont have to pass the user in here cuz onli one used signs in at a time
        //if the use doesnt exist clar current user
      }
    })
    return () => unsubscribeFromAuth();
  }, [currentUser, setCurrentUser, clearCurrentUser]);
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '5%'
    },
    paper: {
      padding: '5%',
      height: "60vh",
      width: "40%",
      backgroundColor: '#f7e5c4'
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  /*
  {/*
        <Route exact path="/more_informations" component={MoreInformations} />
        }*/
  return (
    <div className="app">


      {currentUser ? (
        <>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Paper className={classes.paper}>
                  <Route path="/home" component={Home} />
                  <Route exact path="/home/more_informations" component={MoreInformations} />
                  <Route exact path="/home/informations" component={Informations} />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) :
        (
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Paper className={classes.paper}>
                  <Navbar />
                  <Switch>
                    <Route exact path="/sign-in" component={SignIn} />
                    <Route exact path="/sign-up" component={SignUp} />
                  </Switch>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        )
      }


    </div >
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);