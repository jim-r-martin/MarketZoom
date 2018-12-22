import React from 'react';

const SearchBar = (props) => {
  const { handleSearchValChange, handleSearchSubmit, symbol } = props;
  return (
    <div>
      <form onSubmit={handleSearchSubmit} >
        <input type="text" value={symbol} onChange={handleSearchValChange}></input>
        <button type="submit" />
      </form>
    </div>
  )
}

export default SearchBar;