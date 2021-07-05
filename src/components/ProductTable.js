import React from 'react';
import ProductRow from '../components/ProductRow.js';
import ProductCategoryRow from '../components/ProductCategoryRow.js';

export default function ProductTable(props) {
  const rows = [];
  let lastCategory = null;
  props.products.forEach(product => {
    if (product.name.indexOf(props.filterText) === -1) {
      return;
    }
    if (props.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr style={{ textAlign: 'left' }}>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
