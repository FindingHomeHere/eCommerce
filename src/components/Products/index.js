import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product';
import useStyles from './ProductsStyles';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((el) => {
          return (
            <Grid item key={el.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={el} onAddToCart={onAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
