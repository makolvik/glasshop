import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalItem from "../modal/ModalItem";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { ContextApp } from "../context/reducer";

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
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    minWidth: 300,
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
    width: "450px",
    backgroundColor: "black",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  prevprice: {
    color: "red",
    textDecoration: "line-through",
  },
  cartConreiner: {
    margin: 20,
    width: "85%",
  },
}));

export default function ModalCart(props) {
  const classes = useStyles();

  const { state, dispatch } = useContext(ContextApp);
  const handlerAdd = (event) => {
    const id = event.currentTarget.id;
    dispatch({ type: "add_quant_test", payload: id });
  };

  const handlerMinus = (event) => {
    const id = event.currentTarget.id;
    dispatch({ type: "minus_quant_test", payload: id });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={() => props.handleClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div>
          <Grid container className={classes.cartConreiner}>
            {state.cart.map((item, index) => {
              return (
                <ModalItem
                  quant={item.quant}
                  id={item.id}
                  price={item.price}
                  total={item.total}
                  handlerAdd={handlerAdd}
                  handlerMinus={handlerMinus}
                  image={
                    images[images.findIndex((glass) => glass.id == item.id)]
                      .image
                  }
                />
              );
            })}

            <Grid xs={12} style={{ display: "flex" }}>
              <Typography style={{ alignSelf: "center" }}>
                Sub total:{" "}
              </Typography>
              <Typography style={{ fontWeight: "bold", fontSize: "25px" }}>
                {state.total}$
              </Typography>
            </Grid>
            <Grid container xs={12}>
              <Grid xs={6}>
                <Button
                  onClick={() => props.handleClose()}
                  color="secondary"
                  style={{ width: "80%", margin: "10px 0 10px 0" }}
                >
                  BACK
                </Button>
              </Grid>
              <Grid xs={6}>
                <Link to="/Cart">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "80%", margin: "10px 5px 10px 5px  " }}
                  >
                    <Typography variant="button">TO CART</Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
