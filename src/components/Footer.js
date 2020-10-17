import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography, Button } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "grey",
    color: "white",
    height: "220px",
  },
  paper: {
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
    },
    padding: theme.spacing(2),
    textAlign: "center",
    marginTop: "50px",

    color: "white",
    backgroundColor: "grey",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <Container>
              <Typography>Follow</Typography>
            </Container>
            <FacebookIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} className={classes.paper}>
            <Container>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <Link href="#">U.S. MILITARY DISCOUNT</Link>
                  {"  "}
                  <Link href="#"> COLLABORATION</Link>
                  {"  "}
                  <Link href="#">BRAND AMBASSADOR</Link>
                </Grid>
              </Grid>
            </Container>
            <Container>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <MailOutlineIcon fontSize="large" />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="email" />
                </Grid>
                <Grid item>
                  <Button style={{ color: "white" }}>Send</Button>
                </Grid>
              </Grid>
              <Typography
                style={{ fontSize: "10px", marginTop: "40px" }}
                align="left"
              >
                © 2020 Cassette Optics. POS and Ecommerce by Shopify POS and
                Ecommerce by Shopify
              </Typography>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
