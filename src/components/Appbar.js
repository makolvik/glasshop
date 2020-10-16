import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: "2",
    flexGrow: 1,
  },
  root2: {
    position: "sticky",
    top: 0,
    zIndex: "2",
    opacity: 0.6,
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.0rem",
    },
  },
  app: {
    backgroundColor: "black",
    padding: "0 80px 0 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px 0 10px",
    },
  },
  button: {
    fontSize: "0.8rem",
  },
}));

export default function Barmenu() {
  const classes = useStyles();
  const prevScroll = useRef(0);
  const [curScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const curentScroll = window.scrollY;
      prevScroll.current = curentScroll;
      prevScroll.current === 0 ? setScroll(false) : setScroll(true);
      console.log(prevScroll, curScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [curScroll]);

  return (
    <div className={curScroll ? classes.root2 : classes.root1}>
      <AppBar className={classes.app} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Meteor Glasses
          </Typography>
          <Button className={classes.button} color="inherit">
            <NavLink to="/">Main</NavLink>
          </Button>
          <Button className={classes.button} color="inherit">
            <NavLink to="/Glass">Shop</NavLink>
          </Button>

          <NavLink to="/Cart">
            <ShoppingCartOutlinedIcon />
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
