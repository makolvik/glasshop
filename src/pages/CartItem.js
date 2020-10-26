import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import gallery1 from "../img/gallery1_1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
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
    margin: "5px",
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
  cancel: {
    display: "none",
    marginTop: "10px",
  },
  buttonText : {
    fontWeight: 600

  }
}));

export default function CartItem(props) {
  const classes = useStyles();
  const quant = props.quant;
  return (
    <Grid className={classes.item} container xs={12} spacing={2}>
      <Grid xs={12} sm={3}>
        <img className={classes.image} src={gallery1} />
      </Grid>

      <Grid item xs={12} sm={3}>
        <div
          style={{
            maxWidth: 100,
            margin: "0 auto 0 auto",
            display: "flex",
            height: "30px",
          }}
        >
          <Button
            onClick={(event) => props.handleAddQuant(event)}
            size="small"
            className={classes.buttonquant}
            id={props.id}
          >
            <Typography className={classes.buttonText}>
              +
            </Typography>
            
          </Button>
          <Typography>{props.quant}</Typography>
          <Button
            onClick={(event) => props.handleMinusQuant(event)}
            size="small"
            className={classes.buttonquant}
            id={props.id}
          >
            <Typography className={classes.buttonText}>
              -
            </Typography>
            
          </Button>{" "}
        </div>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography>{props.price}$</Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography>{props.total}$</Typography>
      </Grid>
      <Grid item xs={12}>
        <hr className={classes.hritem} />
      </Grid>
    </Grid>
  );
}
