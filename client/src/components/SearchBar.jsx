import React from 'react';
import { InputGroup, Input, Button } from 'reactstrap';
import styles from '../styles/SearchBar.css';

const SearchBar = (props) => {
  const { handleSearchValChange, handleSearchSubmit, symbol } = props;
  return (
    <div>
      <form className={styles.symbolForm} onSubmit={handleSearchSubmit} >
        <InputGroup>
          <Input placeholder="Stock symbol, i.e. aapl" value={symbol} onChange={handleSearchValChange} />
          <Button color="secondary" size="large" type="submit" className={styles.inputFormStyling} >Search</Button>
        </InputGroup>
      </form>
    </div>
  )
}

export default SearchBar;