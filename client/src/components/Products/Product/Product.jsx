import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux'

import useStyles from './styles';
import { deleteProduct, addToCart } from '../../../actions/products'

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n) + " ..." : str;
  };
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.Image_Src || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.Title} />
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{product.Tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{truncate(product.Title, 23)}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{truncate(product.Body, 120)}</Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.price} variant="body2" color="textSecondary" component="p">₹{product.Variant_Price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant='contained' color='primary' size='small' style={{textTransform: 'none'}} onClick={() => { dispatch(addToCart(product)) }}>Add to Cart</Button>
        <Button size="small" color="primary" onClick={() => { dispatch(deleteProduct(product._id)) }}><DeleteIcon fontSize="small"/> Delete</Button>

      </CardActions>
    </Card>
  )
}

export default Product