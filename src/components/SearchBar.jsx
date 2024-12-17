// import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ searchText, setSearchText, showOnlyInStock, setShowOnlyInStock }) {
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleShowOnlyInStockChange = (event) => {
    setShowOnlyInStock(event.target.checked);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showOnlyInStock}
            onChange={handleShowOnlyInStockChange}
          />
          Only show products in stock
        </label>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  showOnlyInStock: PropTypes.bool.isRequired,
  setShowOnlyInStock: PropTypes.func.isRequired
};

export default SearchBar;