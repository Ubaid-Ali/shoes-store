import React from 'react'
import '../App.css'
import Shoes from '../shoes.json'
// Material Ui Card
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    gridRoot: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: "space-around",
        TextDecoderation: 'none'
    },

    root: {
        maxWidth: 345,
        minWidth: 345,
        textAlign: 'center'
    },
    media: {
        height: 140,
    },
    nameP: {
        rowGap: '5px'
    }


}));

const Products = () => {
    const classes = useStyles();

    return (

        <div className='products'>
            <Grid container spacing={3} className={classes.gridRoot}>
                {Object.keys(Shoes).map(arrVal => {
                    const shoes = Shoes[arrVal];
                    return (

                        <Grid key={Math.random()} item xs={12} sm={6}>
                            <Link to={`/products/${arrVal}`} className="products-link">
                                <Paper className={classes.paper}>

                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={shoes.img[0]}
                                                title={shoes.name}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    ${shoes.price}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.nameP}>
                                                    {shoes.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>

                                        <CardActions>
                                            <Button size="small" color="primary">
                                                
                                            </Button>
                                        </CardActions>
                                    </Card>

                                </Paper>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    )
}

export default Products
