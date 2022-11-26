import React from "react";
import { Grid, CircularProgress } from  '@material-ui/core'
import { useSelector } from 'react-redux';

import Product from "./Product/Product";
import useStyles from './styles';

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.products)
  const classes = useStyles();

  if( !products.length && !isLoading ) return 'No posts';

  return (
    isLoading ? <CircularProgress/> : (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {
          products.map((product) => (
            <Grid key={product._id} item xs={12} md={6} lg={3}>
              <Product product={product}/>
            </Grid>
          ))
        }
      </Grid>
    )
  );
};

export default Products;
