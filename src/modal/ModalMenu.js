import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  
  modal: {
    
    display: "flex",
    alignItems: "right",
    justifyContent: "right",
    width: "90px",
    backgroundColor: "black",
    color: "white",
    height: '100%'
  },

  button: {
      margin: 10
  }
}));

export default function ModalCart(props) {
  const classes = useStyles();


  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={() => props.handleClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open} style={{width: '100%'}}>
       <div>
         <Button className={classes.button} onClick={()=> {props.handleClose()}} color="inherit">
            <NavLink to="/">Main</NavLink>
          </Button>
          <Button className={classes.button} onClick={()=> {props.handleClose()}} color="inherit">
            <NavLink to="/Shop">Shop</NavLink>
          </Button>
          <Button className={classes.button} onClick={()=> {props.handleClose()}} >
            <NavLink to="/Cart">
            <ShoppingCartOutlinedIcon />
          </NavLink>
          </Button>  
       </div>
        
       
      </Fade>
    </Modal>
  );
}
