import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  text: {
    width: "100%",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  image: {
    width: "80%",
  },
}));

export default function Goodslistitem(props) {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.paper}>
      <img className={classes.image} src={props.image} />
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom className={classes.text}>
          {props.title}
        </Typography>
      </div>
    </Paper>
  );
}
