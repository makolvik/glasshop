import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Carouselmain from "../components/Carouselmain";
import Baner from "../components/Baner";
import Price1 from "../img/price1.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Barmenu from "../components/Appbar";
import Box from "@material-ui/core/Box";
import Map from "../components/Map";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import logo from "../img/logo.jpg";
import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";
import Goodslist from "../components/Goodslist";
import Goodsitemwithprice from "../components/Goodslistwithprice";
import Gallery from "react-grid-gallery";
import Reviews from "../components/Reviews";
import { ContextApp } from "../context/reducer";
import ModalCart from "../modal/ModalCart";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "50px auto 100px auto",
    lineHeight: "1.8em",

    "& > *": {
      margin: 0,
      //   backgroundColor: "white",
      width: "100%",
      //   height: 200,
      borderRadius: 0,
    },
  },
  image: {
    width: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "right",
    justifyContent: "right",
    width: "400px",
    backgroundColor: "black",
    color: "white",
  },

  prevprice: {
    color: "red",
    textDecoration: "line-through",
  },
  hritem: {
    border: 0,
    height: 0,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
  },
}));

const IMAGES = [
  {
    src: gallery1,
    thumbnail: gallery1,
    thumbnailWidth: 320,
    thumbnailHeight: 150,

    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    src: gallery2,
    thumbnail: gallery2,
    thumbnailWidth: 320,
    thumbnailHeight: 150,

    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: gallery3,
    thumbnail: gallery3,
    thumbnailWidth: 320,
    thumbnailHeight: 150,
  },
  {
    src: gallery1,
    thumbnail: gallery1,
    thumbnailWidth: 320,
    thumbnailHeight: 150,

    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

const items = {
  title: "FIRE MIRROR COLORBOOST  POLARIZED SMOKE LENS",
  price: 450,
  art: 125,
  prevprice: 500,
  id: 21322,
  itemrating: {
    total: 43,
    rating: 4,
    comments: [
      {
        date: "22 / 10 / 2020",
        author: "Dan Balan0",
        title: "Rocks",
        text:
          "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
      },
      {
        date: "22 / 10 / 2020",
        author: "Dan Balan0",
        title: "Rocks",
        text:
          "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
      },
    ],
  },
};

export default function Item() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch, itemState } = useContext(ContextApp);

  const [localState, setState] = useState(items);

  console.log(localState);

  const handleOpen = () => {
    dispatch({ type: "add_item", payload: localState });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddtoCart = () => {
    setState(items);
    console.log(localState, "ssd");
  };

  return (
    <div className={classes.root}>
      <ModalCart open={open} handleClose={handleClose} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <img className={classes.image} src={gallery2} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container>
            <Typography style={{ lineHeight: "1.8em" }}>
              {items.title}
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "left",
                margin: "10px 0 10px 0",
              }}
            >
              <Rating
                name="read-only"
                value={items.itemrating.rating}
                readOnly
                size="small"
              />
              <Typography
                variant="h6"
                gutterBottom
                className={classes.text}
                style={{
                  fontSize: "0.7em",
                  width: "auto",
                  marginLeft: "0.3em",
                  lineHeight: "1.8em",
                }}
              >
                {items.itemrating.reviews} reviews
              </Typography>
            </Box>
            <Typography style={{ lineHeight: "1.8em" }}>
              See More Clearly with Cassette ColorBoost Lenses!
            </Typography>
            <Typography style={{ lineHeight: "1.8em" }}>
              {items.price}${" "}
              <span>
                <span className={classes.prevprice}> {items.prevprice}$</span>{" "}
              </span>
            </Typography>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="secondary"
              style={{ width: "100%", margin: "10px 0 10px 0" }}
            >
              ADD TO CART
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <hr className={classes.hritem} />
            <Typography
              style={{ lineHeight: "1.8em" }}
              variant="body1"
              align="center"
              gutterBottom
            >
              COLOR, CLARITY, CONTRAST
            </Typography>
            <Typography
              style={{ lineHeight: "1.8em" }}
              variant="body2"
              align="center"
              gutterBottom
            >
              The Legend never dies. It is what happens when high performance
              and lifestyle meet.
            </Typography>
            <Typography
              style={{ lineHeight: "1.8em" }}
              variant="body2"
              align="center"
              gutterBottom
            >
              The Legend frames are made from a Dual Injection Mold using
              Grilamid® TR90 Thermoplastic and Performance Grip Rubber. The
              hinges feature our bombproof Cam-Lock design that works perfectly
              day-in and day-out, whether on your face or clipped to your
              T-Shirt.
            </Typography>

            <Typography
              style={{ lineHeight: "1.8em" }}
              variant="body2"
              align="center"
              gutterBottom
            >
              The Legend features our new ColorBoost Lenses. With 2 years of
              development, the Cassette ColorBoost Lenses attenuate certain
              wavelengths of light to equalize, enhance, brighten and give
              contrast to colors while reducing overall light to a comfortable
              level. Better color contrast & recognition gives you more visual
              sensitivity and clarity. Cassette ColorBoost, Superior Color,
              Superior Clarity
            </Typography>
            <hr className={classes.hritem} />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Gallery images={IMAGES}></Gallery>
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hritem} />

          <Reviews />
        </Grid>
      </Grid>
    </div>
  );
}
