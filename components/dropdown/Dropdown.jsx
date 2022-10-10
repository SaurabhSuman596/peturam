import React from 'react';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Dropdown;
