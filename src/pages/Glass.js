import React, { useState, useContext } from "react";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import Reviews from "../components/Reviews";
import { ContextApp } from "../context/reducer";
import ModalCart from "../modal/ModalCart";
import Gallery from '../components/Gallery'

import Price1 from "../img/price1.jpg";
import Price2 from "../img/price2.jpg";
import Price3 from "../img/price3.jpg";
import Price4 from "../img/price4.jpg";
import Price5 from "../img/price5.jpg";
import Price6 from "../img/price6.jpg";
import Price7 from "../img/price7.jpg";
import gallery1_1 from "../img/gallery1_1.jpg";
import gallery1_2 from "../img/gallery1_2.jpg";
import gallery1_3 from "../img/gallery1_3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
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

const items = [
  {
    id: 1,
    title: "Monarch",
    image: Price1,
    price: 300,
    rate: 4,
    prevprice: 500,
    images: [gallery1_1, gallery1_2, gallery1_3],
    reviews: {
      total: 43,
      comments: [
        {
          date: "22 / 10 / 2020",
          author: "Dan Balan0",
          rating: 4,
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22 / 10 / 2020",
          rating: 5,
          author: "Dan Balan0",
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22 / 10 / 2020",
          rating: 5,
          author: "Dan Balan0",
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22 / 10 / 2020",
          rating: 5,
          author: "Dan Balan0",
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22 / 10 / 2020",
          rating: 5,
          author: "Dan Balan0",
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22 / 10 / 2020",
          rating: 5,
          author: "Dan Balan0",
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
        {
          date: "22 / 10 / 2020",
          rating: 5,
          author: "Dan Balan0",
          title: "Rocks",
          text:
            "Once I got the legend pro on my hand The glasses feel sturdy and look good. Don't know how well the scratch resistance is yet, but they provided you a lifetime warranty so I'm not too worry about it.",
        },
      ],
    },
  },
  
];


export default function Glass(props) {
  let { id } = useParams();
  id = items.findIndex( it => it.id === Number(id));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(ContextApp);
  const [localState, setState] = useState(items);

  const reviewHandler = (stateReview) => { 
    items[id].reviews.comments.push(stateReview);
  };

  const handleOpen = () => {

    dispatch({ type: "add_item", payload: localState[id] });
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

      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <img className={classes.image} src={items[id].image} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container>
            <Typography style={{ lineHeight: "1.8em" ,fontWeight: '600', fontSize: '1.5rem'}}>
              {items[id].title}
            </Typography>
            <Grid container spacing={1}>
              <Grid>
                 <Box
              style={{
                display: "flex",
                justifyContent: "left",
                margin: "10px 0 10px 0",
              }}
            >
              <Rating
                name="read-only"
                value={items[id].rate}
                readOnly
                size="small"
              />
              </Box>
              </Grid>
              <Grid>
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
                {items[id].reviews.total} reviews
              </Typography>
              </Grid>
              </Grid>

            <Typography style={{ lineHeight: "1.8em" }}>
              See More Clearly with Cassette ColorBoost Lenses!
            </Typography>
            <Typography style={{ lineHeight: "1.8em" , fontWeight: '600', fontSize: '1.2rem' }}>
              {items[id].price}${" "}
              <span>
                <span className={classes.prevprice}> {items[id].prevprice}$</span>{" "}
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
          <Gallery images={items[id].images}></Gallery>
          <image src={items[id].images[0]} alt='d' />
        </Grid>
        <Grid item xs={12}>
          <hr className={classes.hritem} />

          <Reviews comments={items[id].reviews.comments} reviewHandler={reviewHandler}/>
        </Grid>
      </Grid>
    </div>
  );
}
