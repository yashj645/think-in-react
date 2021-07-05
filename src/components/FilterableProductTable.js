import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
export default function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div className="flex flex-col pt-10 item-center min-h-screen w-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold m-b-5">Product</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={text => setFilterText(text)}
        onInStockChange={stock => setInStockOnly(stock)}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
