import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    minHeight: "500px",
    backgroundSize: "Cover",
    backgroundRepeat: "norepeat",
  },
  text: {
    color: "white",
  },
  CheckButton: {
    color: "white",
  },
}));

export default function Carouselitem(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ backgroundImage: `url(${props.item.backgroundimage})` }}
    >
      <Container maxWidth="sm" className={classes.text}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Button variant="contained" color="secondary">
          Check it out!
        </Button>{" "}
      </Container>
    </div>
  );
}
