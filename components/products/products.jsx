import React from 'react';
import styles from './Products.module.css';
import productData from '../../productdata';
import Product from '../product/Product';

const products = () => {
  return (
    <div className={styles.container} id="product">
      <h1>Our Product</h1>
      <div className={styles.products}>
        {productData.map((data, index) => (
          <Product data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default products;
