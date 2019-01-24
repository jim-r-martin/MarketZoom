import React from 'react';
import SearchBar from './SearchBar';
import styles from '../styles/Intro.css';

const Intro = (props) => {
  const { handleSearchValChange, handleSearchSubmit, symbol } = props;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <img className={styles.logo} src='vectorImg.gif' />
      <h1>Market Zoom</h1>
      </div>
      <div>
        <SearchBar
          handleSearchValChange={handleSearchValChange}
          handleSearchSubmit={handleSearchSubmit}
          symbol={symbol}
        />
      </div>
      <h2>Enter any ticker symbol above.</h2>
    </div>
  )
};

export default Intro;