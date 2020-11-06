import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 25,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  text: {
    width: "100%",
    maxWidth: 500,
  },
  image: {
    width: "100%",
  },
}));

export default function Review(props) {
  const classes = useStyles();
  const item = props.item;

  return (
    <Grid className={classes.root} container spacing={0} xs={12}>
      <Grid
        spacing={0}
        item
        xs={12}
        sm={5}
        style={{ paddingBottom: "0px", display: "flex", alignItems: "center" }}
      >
        <Avatar />
        {/* </Grid> */}
        {/* <Grid container spacing={1} item xs={12} sm={4}>
        <Grid
          style={{ paddingBottom: "0px", display: "flex" }}
          item
          xs={12}
          sm={8}
          alignItems="center"
        > */}
        <Box>
          <Rating name="read-only" value={item.rating} readOnly size="small" />{" "}
          <Typography variant="subtitle1">{item.author}</Typography>
        </Box>
        <Typography
          style={{ padding: "0px", fontSize: "0.5rem" }}
          variant="caption"
        >
          {item.date}
        </Typography>{" "}
        {/* </Grid>
        <Grid item xs={12}> */}
        {/* </Grid> */}
      </Grid>
      <Grid style={{ paddingTop: "10px" }} item xs={12}>
        <Typography variant="h6">{item.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{item.text}</Typography>{" "}
      </Grid>
    </Grid>
  );
}
