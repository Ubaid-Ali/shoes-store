import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "../shoes.json";
import "../App.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";

import TextMobileStepper from "./shoeSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  imgPaper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  shoeGrid: {
    textAlign: "center",
  },
  sidebars: {
    background: "linear-gradient(45deg, rgb(164, 156, 238), blue)"
  },
  heading: {
    color: "#003d33",
  },
  iconButton: {
    color: "#003d33",
  },
}));

export default function ProductItem() {
  const classes = useStyles();

  const { id } = useParams();
  const shoe = Shoes[id];
  // console.log(shoe);

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h3 className={classes.heading}>SHOE DETAIL</h3>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={2} className={classes.sidebars}></Grid>
          <Grid item xs={12} sm={8} className={classes.shoeGrid}>
            <div className="ind-shoe-div">
              <TextMobileStepper shoe={shoe} />
            </div>
            <h2> ${shoe.price} </h2>
            <p>{shoe.name}</p>
            <IconButton
              className={classes.iconButton}
              aria-label="add to shopping cart"
            >
              <AddShoppingCartIcon />
            </IconButton>
            <p>{shoe.detail}</p>
          </Grid>
          <Grid item xs={12} sm={2} className={classes.sidebars}></Grid>
        </Grid>
      </div>
    </div>
  );
}
