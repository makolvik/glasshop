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
import CartItem from "./CartItem";
import { ContextApp } from "../context/reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    margin: "50px auto 100px auto",

    "& > *": {
      margin: 0,
      //   backgroundColor: "white",
      width: "100%",
      //   height: 200,
      borderRadius: 0,
    },
  },
  item: {
    marginTop: "10px",
  },
  image: {
    width: "100%",
  },
  total: {
    color: "darkred",

    marginTop: "20px",
    backgroundColor: "lightgrey",
  },
  hritem: {
    border: 0,
    height: 0,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  },
}));

export default function Cart() {
  const classes = useStyles();
  const { state, dispatch } = useContext(ContextApp);

  const handleAddQuant = (event) => {
    const id = event.currentTarget.id;
    dispatch({ type: "add_quant_test", payload: id });
  };

  const handleMinusQuant = (event) => {
    const id = event.currentTarget.id;
    dispatch({ type: "minus_quant_test", payload: id });
  };
  const handleSendCart = () => {
    dispatch({ type: "send_order" });
    console.log("send");
  };

  return (
    <Grid className={classes.root} container spacing={2}>
      {state.total === 0 ? (
        <Grid className={classes.total} item xs={12}>
          <Typography>No items</Typography>
          <Link to="/Glass">
            <Button>Back to shop </Button>
          </Link>
        </Grid>
      ) : (
        <Grid className={classes.total} item xs={12}>
          {state.cart.map((item) => (
            <CartItem
              price={item.price}
              quant={item.quant}
              total={item.total}
              handleAddQuant={handleAddQuant}
              handleMinusQuant={handleMinusQuant}
              id={item.id}
            />
          ))}
          <Grid container className={classes.total} item xs={12}>
            <Grid item xs={8}>
              <Typography style={{ fontSize: "large" }}>
                Total: {state.total}$
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100%" }}
                onClick={() => handleSendCart()}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}