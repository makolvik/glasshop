import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  text: {
    width: "100%",
    // maxWidth: 500,
  },
  image: {
    width: "80%",
  },
  prevprice: {
    color: "red",
    textDecoration: "line-through",
  },
}));

export default function Goodslistitem(props) {
  const classes = useStyles();

  return (
    <Link to={`/Glass/${props.id}`}>
      <Paper elevation={0} className={classes.paper}>
        <div style={{ height: "auto" }}>
          <img className={classes.image} src={props.image} />
        </div>
        <div className={classes.root}>
          <Typography variant="h6" gutterBottom className={classes.text}>
            {props.title}
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Rating name="read-only" value={props.rate} readOnly size="small" />
            <Typography
              variant="h6"
              gutterBottom
              className={classes.text}
              style={{ fontSize: "0.7em", width: "auto", marginLeft: "0.3em" }}
            >
              43 reviews
            </Typography>
          </Box>
          <Typography>
            {props.prevprice === "0" ? (
              ""
            ) : (
              <span>
                <span className={classes.prevprice}>{props.prevprice}</span>{" "}
              </span>
            )}
            {props.price}
          </Typography>
        </div>
      </Paper>
    </Link>
  );
}
