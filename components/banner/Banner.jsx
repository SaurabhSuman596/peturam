import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import banner from '../../public/banner.png';

const Banner = () => {
  return (
    <div className={styles.container}>
      <Image src={banner} layout="responsive" />
    </div>
  );
};

export default Banner;
