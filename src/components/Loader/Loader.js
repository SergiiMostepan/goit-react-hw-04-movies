import React from 'react';
import styles from './Loader.module.css';
import Loader from 'react-loader-spinner';

const LoaderSpiner = () => (
  <div className={styles.container}>
    <Loader
      className={styles.loader}
      type="Rings"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={5000}
    />
    Loading...
  </div>
);

export default LoaderSpiner;
