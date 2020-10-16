import React from "react";
import Carouselmain from "../components/Carouselmain";
import Baner from "../components/Baner";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Map from "../components/Map";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Goodslist from "../components/Goodslist";
import Goodsitemwithprice from "../components/Goodslistwithprice";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "15px auto 0 auto",

      //   backgroundColor: "white",
      width: "100%",
      //   height: 200,
      borderRadius: 0,
    },
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={0} id="About" style={{ margin: "0 auto 0 auto" }}>
        <Carouselmain />
      </Paper>
      <Paper elevation={0} id="Forms">
        <Goodslist />
      </Paper>
      <Paper elevation={0}>
        <Baner />
      </Paper>
      <Paper elevation={0} id="Top">
        <Goodsitemwithprice />
      </Paper>
      <Paper elevation={0}>
        <Container>
          <Typography align="center" variant="h5">
            Our shop
          </Typography>
        </Container>
        <Map />
      </Paper>
    </div>
  );
}
