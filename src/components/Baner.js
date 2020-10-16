import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Baner1 from "../img/baner1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "500px",
    backgroundImage: `url(${Baner1})`,
    backgroundSize: "Cover",
    backgroundRepeat: "norepeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100%",
      height: "auto",
    },
  },
  container: {
    paddingTop: "28vh",
    width: "100%",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "4vh",
      paddingBottom: "4vh",
    },
  },
}));

export default function Baner(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography align="left" variant="h6" gutterBottom>
          The legend pros
        </Typography>
        <Typography align="left" variant="subtitle1" gutterBottom>
          High perfomance meets lifestyle
        </Typography>
        <Button variant="contained" color="secondary">
          Check it out!
        </Button>
      </Container>
    </div>
  );
}
