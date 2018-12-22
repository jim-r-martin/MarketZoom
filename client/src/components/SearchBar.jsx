import React from 'react';

const SearchBar = (props) => {
  const { handleSearchValChange, handleSearchSubmit, value } = props;
  return (
    <div>
      <input type="text" value={value} onChange={handleSearchValChange}></input>
      <button type="submit" onSubmit={handleSearchSubmit} />
    </div>
  )
}

export default SearchBar;