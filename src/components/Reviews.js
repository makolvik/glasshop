import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Review from "./Review";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";

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
    maxWidth: 500,
  },
  image: {
    width: "100%",
  },
  formitem: {
    flexDirection: "row",
    display: "flex",
  },
  pagination: {
    width: "auto",
    margin: "auto",
    marginTop: "30px",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Reviews(props) {
  const classes = useStyles();
  const [state, setReviewState] = useState(props.comments);
  console.log(state, "review");
  const [displayForm, setDisplay] = useState(false);
  const [page, setpage] = useState(1);
  const [reviewState, setReview] = useState({
    title: "",
    text: "",
    rating: 0,
    author: "Dan dan",
    date: "11/22/2099",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    const handler = props.reviewHandler;
    handler(reviewState);
    // const newState = {
    //   ...itemState,
    //   itemrating: {
    //     ...itemState.itemrating,
    //     comments: [...itemState.itemrating.comments, reviewState],
    //   },
    // };
    // itemState = newState;
    // dispatch({ type: "add_comments", payload: reviewState });
    setReview({
      title: "",
      text: "",
      rating: 0,
      author: "Dan dan",
      date: "11/22/2099",
    });
    setDisplay(false);
  };
  const changeText = (event) => {
    setReview({ ...reviewState, text: event.target.value });
  };
  const changeTitle = (event) => {
    setReview({ ...reviewState, title: event.target.value });
  };
  const changeRating = (event) => {
    setReview({ ...reviewState, rating: Number(event.target.value) });
  };
  const formHandler = () => {
    displayForm ? setDisplay(false) : setDisplay(true);
  };
  const handleChange = (event, value) => {
    setpage(value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Button onClick={() => formHandler()} variant="outlined">
          Write review
        </Button>{" "}
      </Grid>
      {displayForm && (
        <Grid item xs={12}>
          <form
            onSubmit={submitHandler}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Name"
              className={classes.formitem}
              value={reviewState.title}
              onChange={(event) => changeTitle(event)}
            />
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              value={reviewState.text}
              className={classes.formitem}
              onChange={(event, newValue) => {
                changeText(event);
              }}
            />
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="simple-controlled"
                value={reviewState.rating}
                onChange={(event, newValue) => {
                  changeRating(event);
                }}
              />
            </Box>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </form>
        </Grid>
      )}
      {state.slice(page * 5 - 5, page * 5).map((item) => {
        return <Review item={item} />;
      })}
      <Container maxWidth="sm">
        <Pagination
          className={classes.pagination}
          count={Math.ceil(state.length / 5)}
          page={page}
          onChange={handleChange}
        />
      </Container>
    </Grid>
  );
}
