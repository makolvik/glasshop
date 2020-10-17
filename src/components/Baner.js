import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Baner1 from "../img/baner1.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    backgroundImage: `url(${Baner1})`,
    backgroundSize: "Cover",
    backgroundRepeat: "norepeat",
    [theme.breakpoints.down("xs")]: {
      display: 'none'
      
    },
  },
  container: {
    padding: "10vh 10vh 10vh 10vh",
    width: "100%",
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "4vh 10vh 4vh 10vh",
      
    },
  },
  text: {
    fontSize: "1.6rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  }
}));

export default function Baner(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.text} align="left" variant="h6" gutterBottom>
          The legend pros
        </Typography>
        <Typography className={classes.text} align="left" variant="subtitle1" gutterBottom>
          High perfomance meets lifestyle
        </Typography>
        <Button variant="outlined" color="secondary">
          Check it out!
        </Button>
      </Container>
    </div>
  );
}
