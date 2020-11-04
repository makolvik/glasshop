import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CartItem from "./CartItem";
import { ContextApp } from "../context/reducer";
import OrderForm from "../components/OrderForm";

import Price1 from "../img/price1.jpg";
import Price2 from "../img/price2.jpg";
import Price3 from "../img/price3.jpg";
import Price4 from "../img/price4.jpg";
import Price5 from "../img/price5.jpg";
import Price6 from "../img/price6.jpg";
import Price7 from "../img/price7.jpg";

const images = [
  {
    id: 1,
    image: Price2,
  },
  {
    id: 2,
    image: Price1,
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    textAlign: "center",
    margin: "50px auto 100px auto",

    "& > *": {
      margin: 0,
      width: "100%",
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
    // backgroundColor:'#e9e9e9y',
  },
  hritem: {
    border: 0,
    height: 0,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  },
  fillname: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Cart() {
  const classes = useStyles();
  const { state, dispatch } = useContext(ContextApp);
  const [open, setOpen] = React.useState(false);

  const handleAddQuant = (event) => {
    const id = event.currentTarget.id;
    dispatch({ type: "add_quant_test", payload: id });
  };

  const handleMinusQuant = (event) => {
    const id = event.currentTarget.id;
    dispatch({ type: "minus_quant_test", payload: id });
  };

  const hanldeClose = () => {
    open ? setOpen(false) : setOpen(true);
  };
  // const handleSendCart = () => {
  //   hanldeClose();
  //   // dispatch({ type: "send_order" });
  // };
  return (
    <Grid className={classes.root} container spacing={2}>
      <OrderForm open={open} hanldeClose={hanldeClose} />
      {state.total === 0 ? (
        <Grid className={classes.total} item xs={12}>
          <Typography>No items</Typography>
          <Link to="/Glass">
            <Button>Back to shop </Button>
          </Link>
        </Grid>
      ) : (
        <Grid className={classes.total} item xs={12}>
          <Grid
            className={classes.fillname}
            container
            xs={12}
            justify="flex-end"
          >
            <Grid item xs={3}>
              <Typography style={{ color: "grey" }}>Price</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography style={{ color: "grey" }}>Sum</Typography>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            {state.cart.map((item) => (
              <CartItem
                price={item.price}
                quant={item.quant}
                total={item.total}
                handleAddQuant={handleAddQuant}
                handleMinusQuant={handleMinusQuant}
                id={item.id}
                image={
                  images[images.findIndex((glass) => glass.id == item.id)].image
                }
              />
            ))}
          </Grid>
          <Grid container className={classes.total} item xs={12}>
            <Grid item xs={8}>
              <Typography variant="h3" style={{ fontSize: "26px" }}>
                Total: {state.total}$
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "100%" }}
                onClick={() => hanldeClose()}
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
