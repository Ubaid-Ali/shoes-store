import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    imgPaper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    shoeGrid: {
        textAlign: 'center'
    },
    sidebars: {
        background: "linear-gradient(45deg, rgb(164, 156, 238), blue)"
    },
    heading: {
        color: '#003d33'
    },
    iconButton: {
        color: '#003d33'
    }

}));


export default function ProductItem() {
    const classes = useStyles();


    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h3 className={classes.heading}>About Us</h3>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={2} className={classes.sidebars}>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.shoeGrid}>
                        <div className='ind-shoe-div'>
                            Please Contact for more details
                        </div>
                        <p>facebook.com/abcxyz</p>
                        <p>twitter.com/abcxyz</p>
                        <h3>Mobile:</h3>
                        <p> 0000-0000000</p>
                        <p> 0000-0000000</p>
                        <p> 0000-0000000</p>
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.sidebars}>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

