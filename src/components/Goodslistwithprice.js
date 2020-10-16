import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Goodsitemwithprice from "../components/Goodsitemwithprice";
import glasses from "../data/glasses";
import Price1 from "../img/price1.jpg";
import Price2 from "../img/price2.jpg";
import Price3 from "../img/price3.jpg";
import Price4 from "../img/price4.jpg";
import Price5 from "../img/price5.jpg";
import Price6 from "../img/price6.jpg";
import Price7 from "../img/price7.jpg";
import { Container, Typography } from "@material-ui/core";

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
const items2 = <glasses />;
const items = [
  {
    title: "Monarch",
    image: Price1,
    price: "300$",
    rate: 4,
    prevprice: "500$",
  },
  { title: "Saker", image: Price2, price: "300$", rate: 4, prevprice: "500$" },
  { title: "WES", image: Price3, price: "300$", rate: 4, prevprice: "500$" },
  {
    title: "Stockholm",
    image: Price4,
    price: "300$",
    rate: 4,
    prevprice: "500$",
  },
  { title: "Mel", image: Price5, price: "300$", rate: 4, prevprice: "0" },
  {
    title: "Jackson",
    image: Price6,
    price: "300$",
    rate: 4,
    prevprice: "500$",
  },
  {
    title: "Madness",
    image: Price7,
    price: "300$",
    rate: 4,
    prevprice: "500$",
  },
];
export default function Goodslist() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography align="center" variant="h5">
          Top rated
        </Typography>
      </Container>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid className={classes.item} item xs={12} md={6} lg={4}>
            <Goodsitemwithprice
              to={item.title}
              image={item.image}
              title={item.title}
              price={item.price}
              rate={item.rate}
              prevprice={item.prevprice}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
