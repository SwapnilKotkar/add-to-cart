import React from "react";
import { Grid, CircularProgress } from  '@mui/material'
import { useSelector } from 'react-redux';

import Product from "./Product/Product";
import useStyles from './styles';

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.productsReducer)
  const classes = useStyles();

  if( !products.length && !isLoading ) return 'No products';

  return (
    isLoading ? <CircularProgress/> : (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {
          products.map((product) => (
            <Grid key={product._id} item xs={12} md={6} lg={4}>
              <Product product={product}/>
            </Grid>
          ))
        }
      </Grid>
    )
  );
};

export default Products;
