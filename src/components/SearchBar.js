import React from 'react';
export default function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={e => props.onFilterTextChange(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly} 
          onChange={e => props.onInStockChange(e.target.checked)}
        />{' '}
        only show products in stock
      </p>
    </form>
  );
}
