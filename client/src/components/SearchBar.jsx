import React from 'react';
import styles from '../styles/SearchBar.css';

const SearchBar = (props) => {
  const { handleSearchValChange, handleSearchSubmit, symbol } = props;
  return (
    <div className={styles.root}>
      <form className={styles.symbolForm} onSubmit={handleSearchSubmit} >
        <input id={styles.symbolInput} type="text" placeholder="Stock symbol, e.g. aapl" value={symbol} onChange={handleSearchValChange}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar;