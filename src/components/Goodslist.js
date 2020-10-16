import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Goodslistitem from "../components/Goodslistitem";
import Item1 from "../img/item1.jpg";
import Item2 from "../img/item2.jpg";
import Item3 from "../img/item3.jpg";
import Item4 from "../img/item4.jpg";
import Item5 from "../img/item5.jpg";
import Item6 from "../img/item6.jpg";
import Item7 from "../img/item7.jpg";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  item: {},
}));
const items = [
  { title: "Monarch", image: Item1 },
  { title: "Saker", image: Item2 },
  { title: "WES", image: Item3 },
  { title: "Stockholm", image: Item4 },
  { title: "Mel", image: Item5 },
  { title: "Jackson", image: Item6 },
  { title: "Madness", image: Item7 },
];
export default function Goodslist() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography align="center" variant="h5">
          Forms
        </Typography>
      </Container>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid className={classes.item} item xs={6} md={6} lg={4}>
            <Goodslistitem image={item.image} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
