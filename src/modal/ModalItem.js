import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import gallery2 from "../img/gallery2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
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
  text: {
    fontSize: "10px",
  },
  buttonquant: {
    minWidth: "0px",
    width: "20px",
    padding: 0,
  },
  hritem: {
    border: 0,
    height: 0,
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    color: "white",
  },
  buttonText: {
    fontWeight: 600,

  }
}));

export default function ModalItem(props) {
  const classes = useStyles();
  return (
    <Grid xs={12} style={{ marginTop: "15px" }} container>
      <Grid xs={3}>
        <img className={classes.image} src={gallery2} />
      </Grid>
      <Grid style={{ paddingLeft: "5px" }} xs={5}>
        <Typography variant="subtitle1" className={classes.text}>
          Legend PRo/Matte Black and Red/ Fire Mirror/{" "}
        </Typography>
      </Grid>
      <Grid xs={1}>
        <Typography align="center" variant="subtitle1" style={{fontSize: '15px'}}>
          {props.price}$
        </Typography>
      </Grid>
      <Grid style={{ display: "flex",  }} xs={3}>
        <div
          style={{
            width: '100%',
            display: "flex",
            justifyContent: 'space-around',
            height: "30px",
            marginTop: "5px",
          }}
        >
          <Button
            id={props.id}
            style={{ color: "white" }}
            className={classes.buttonquant}
            onClick={(event) => props.handlerAdd(event)}
          >
             <Typography className={classes.buttonText}>
                +</Typography>
          </Button>
          <Typography>{props.quant}</Typography>
          <Button
            id={props.id}
            style={{ color: "white" }}
            className={classes.buttonquant}
            onClick={(event) => props.handlerMinus(event)}
          >
              <Typography className={classes.buttonText}>
                - </Typography>
          </Button>{" "}
        </div>
      </Grid>
      <Grid xs={12}>
        <hr className={classes.hritem} />
      </Grid>
    </Grid>
  );
}
