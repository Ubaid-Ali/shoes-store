import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import Grid from "@material-ui/core/Grid";

import Shoes from "../shoes.json";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let arr = Object.keys(Shoes);
const tutorialSteps = arr.map((name) => {
  const shoe = Shoes[name];
  console.log(shoe);
  return {
    label: shoe.name,
    imgPath: `${shoe.img[0]}`,
  };
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
    flexGrow: 1,
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  name: {
    textAlign: "center",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  root2: {
    flexGrow: 1,
  },
  paper2: {
    display: "flex",
    justifyContent: "space around",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bestShoes: {
    textAlign: "center",
    color: "#003d33",
    backgroundColor: "lightgrey",
    padding: "1% 0",
    boxShadow: "0 0 5px black",
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h2 className={classes.bestShoes}>BEST SHOES OF THE YEAR</h2>
        <Paper className={classes.paper2}>
          <div className={classes.root}>
            <Paper square elevation={0} className={classes.header}>
              <Typography>
                <h3 className={classes.name}>
                  {tutorialSteps[activeStep].label}
                </h3>
              </Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                </Button>
              }
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
