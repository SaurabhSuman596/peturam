import Image from 'next/image';
import React from 'react';
import styles from './Product.module.css';

const Product = ({ data }) => {
  return (
    <a href={data.link}>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={data.image} width={250} height={300} />
        </div>
        <p>{data.name}</p>
        <p className={styles.price}>{data.price} / packet</p>
      </div>
    </a>
  );
};

export default Product;
