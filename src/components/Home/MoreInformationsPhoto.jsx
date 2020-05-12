import React from "react";
import { connect } from "react-redux";
import { auth } from "../../configs/firebase.config";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import image from "../../images/cat.jpg";
import image1 from "../../images/fire.jpg";
import image2 from "../../images/fox.jpg";
import image3 from "../../images/girl.jpg";
import image4 from "../../images/lego.jpg";

const tileData = [
  {
    img: image,
    title: "Image",
    cols: 2,
    url: "https://cdn.pixabay.com/photo/2020/03/28/15/20/cat-4977436_1280.jpg",
  },
  {
    img: image1,
    title: "Image",
    cols: 1,
    url:
      "https://cdn.pixabay.com/photo/2019/09/25/06/29/fire-4502710_960_720.jpg",
  },
  {
    img: image2,
    title: "Image",
    cols: 3,
    url: "https://cdn.pixabay.com/photo/2014/02/27/16/09/fox-275958_1280.jpg",
  },
  {
    img: image3,
    title: "Image",
    cols: 2,
    url: "https://cdn.pixabay.com/photo/2018/08/23/22/29/girl-3626901_1280.jpg",
  },
  {
    img: image4,
    title: "Image",
    cols: 1,
    url: "https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891_1280.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#e1d7b8",
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const MoreInformationsPhoto = ({ currentUser }) => {
  const classes = useStyles();
  let nick, number;
  let user = currentUser;
  let history = useHistory();

  const handleLetterNick = (e) => {
    nick = e.target.value;
    return nick;
  };

  const handleButton = (url) => {
    console.log(user);
    //jak nie ma czegos podanego to undefined
    user
      .updateProfile({
        photoURL: url,
        //zdjecie moze byc wybierane z przykladow lub z pliku
      })
      .then(function () {
        console.log(user.photoURL);
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
      <h3>Select Photo</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  onClick={() => handleButton(tile.url)}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>

        <Button
          variant="outlined"
          style={{
            width: "20%",
            height: "5vh",
            marginLeft: "75%",
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

export default connect(mapStateToProps)(MoreInformationsPhoto);
