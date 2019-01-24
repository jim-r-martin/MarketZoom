import React from 'react';
import SearchBar from './SearchBar';
import styles from '../styles/Header.css';

const Header = (props) => {
  const { handleSearchValChange, handleSearchSubmit, symbol } = props;

  return (
    <div className={styles.root}>
      <a href="https://www.vectorstock.com/royalty-free-vector/stylish-sticker-on-paper-graph-and-magnifier-vector-7912658" target="_blank"></a>
      <h1>Market Zoom</h1>
      <SearchBar
        handleSearchValChange={handleSearchValChange}
        handleSearchSubmit={handleSearchSubmit}
        symbol={symbol}
      />
    </div>
  )
};

export default Header;