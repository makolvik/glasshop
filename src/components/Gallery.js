import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Gallery(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        {props.images.map(image => {
             return <Grid item xs={12} sm={6} ><Image src={image} aspectRatio={16/6} /></Grid>
        })}
        </Grid>
        </div>
    )
}
