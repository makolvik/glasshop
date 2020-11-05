import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Goodsitemwithprice from "../components/Goodsitemwithprice";
import Price1 from "../img/price1.jpg";
import Price2 from "../img/price2.jpg";
import Price3 from "../img/price3.jpg";
import Price4 from "../img/price4.jpg";
import Price5 from "../img/price5.jpg";
import Price6 from "../img/price6.jpg";
import Price7 from "../img/price7.jpg";
import { Container, Typography } from "@material-ui/core";
import axios from "axios";
import { set } from "mongoose";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  item: {},
}));
const items = [
  {
    id: 1,
    image: Price1,
  },
  {
    id: 2,
    image: Price2,
  },
  {
    id: 3,
    image: Price3,
  },
  {
    id: 4,
    image: Price4,
  },
  {
    id: 5,
    image: Price5,
  },
  {
    id: 6,
    image: Price6,
  },
  {
    id: 7,
    image: Price7,
  },
];
export default function Shop() {
  const classes = useStyles();
  const [state, setState] = useState(null);
  useEffect(() => {
    axios.get("/Glass").then((res) => {
      setState(res.data);
      console.log(res);
    });
  }, []);

  return (
    state && (
      <div className={classes.root}>
        <Grid container spacing={1}>
          {state.map((item, order) => (
            <Grid className={classes.item} item xs={12} md={6} lg={4}>
              <Goodsitemwithprice
                to={item.title}
                image={items[order].image}
                title={item.title}
                price={item.price}
                rate={item.rate}
                prevprice={item.prevprice}
                id={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  );
}
