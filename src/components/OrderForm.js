import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { ContextApp } from "../context/reducer";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  // orderform: {

  //     // display: "flex",
  //     // alignItems: "right",
  //     // justifyContent: "right",
  //     width: "450px",
  //     // backgroundColor: "black",
  //     // color: "white",
  //     [theme.breakpoints.down("sm")]: {
  //       width: "100%",
  //     },
  //   },
  paper: {
    position: "absolute",
    top: "100px",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  textfield: {
    width: "80%",
  },
}));
export default function Glass(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(ContextApp);
  const [open, setOpen] = useState(false);
  const [stateInput, setInput] = useState({
    fname: "",
    lname: "",
    phone: 380,
  });

  const changeFname = (event) => {
    setInput({ ...stateInput, fname: event.target.value });
  };
  const changeLname = (event) => {
    setInput({ ...stateInput, lname: event.target.value });
  };
  const changePhone = (event) => {
    console.log(event.target.value);
    setInput({ ...stateInput, phone: Number(event.target.value) });
  };
  const closeHanlder = () => {
    props.hanldeClose();
    // setInput({
    //   fname: "",
    //   lname: "",
    //   phone: 380,
    // });
    // open ? setOpen(false) : setOpen(true);
  };
  const handleSendOrder = () => {
    const order = {
      client: {
        Firstname: stateInput.fname,
        Lastname: stateInput.lname,
        Phone: stateInput.phone,
      },
      order: state,
    };
    axios
      .post("http://localhost:8000/Order/", order)
      .then(console.log(order))
      .then((response) => console.log(response))
      .then(dispatch({ type: "send_order" }))
      .then(closeHanlder())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.hanldeClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.orderform}
      >
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Quik order</h2>
          <p id="simple-modal-description">Fill in form</p>
          <Grid className={classes.root} container spacing={2}>
            <Grid className={classes.total} item xs={12}>
              <TextField
                className={classes.textfield}
                id="standard-basic"
                label="First name"
                value={stateInput.fname}
                onChange={(event) => changeFname(event)}
              />
            </Grid>
            <Grid className={classes.total} item xs={12}>
              <TextField
                className={classes.textfield}
                id="standard-basic"
                label="Last name"
                value={stateInput.lname}
                onChange={(event) => changeLname(event)}
              />
            </Grid>
            <Grid className={classes.total} item xs={12}>
              <TextField
                className={classes.textfield}
                type="number"
                id="standard-basic"
                label="Number"
                value={stateInput.phone}
                onChange={(event) => changePhone(event)}
              />
            </Grid>
            <Grid className={classes.total} item xs={12}>
              <Button variant="contained">Close</Button>{" "}
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
                onClick={() => handleSendOrder()}
              >
                Send
              </Button>
            </Grid>
            <Grid className={classes.total} item xs={12}></Grid>
          </Grid>
        </div>
      </Modal>
    </div>
  );
}
