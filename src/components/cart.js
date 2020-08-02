import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import buyFnc from './productItem'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: '2%'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    delete: {
        margin: theme.spacing(1),
    },
}));

export default function Cart() {
    const classes = useStyles();

    const [total, setTotal] = useState(0.00);
    const [buyList, setBuyList] = useState([]);

    return (
        <div className={classes.root}>
            <ul> {buyList.map((arrItem) => { //arrItem = shoe
                console.log(arrItem)

                return (
                    <li key={arrItem.name}>

                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={arrItem.img[0]} />
                                    </ButtonBase>
                                </Grid>

                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                Price:
                                        </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Product name:
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {arrItem.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                <IconButton aria-label="delete" onClick={() => {
                                                    setBuyList(buyList.filter((item) => {
                                                        return (
                                                            item.name !== arrItem.name
                                                        )
                                                    }))
                                                }} >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">${arrItem.price}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </li>
                )
            })}
            </ul>
        </div>
    );
}
