import React from 'react';
import SearchBar from './SearchBar';
import styles from '../styles/Header.css';

const Header = (props) => {
  const { handleSearchValChange, handleSearchSubmit, symbol } = props;

  return (
    <div className={styles.root}>
      <div className={styles.header}>
      <a href='/'>
        <img className={styles.logo} src='vectorImg.gif' />
      </a>
      <h1>Market Zoom</h1>
      </div>
      <div className={styles.SearchBar}>
        <SearchBar
          handleSearchValChange={handleSearchValChange}
          handleSearchSubmit={handleSearchSubmit}
          symbol={symbol}
        />
      </div>
    </div>
  )
};

export default Header;