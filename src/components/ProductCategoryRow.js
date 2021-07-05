import React from 'react';
export default function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th style={{ textAlign: 'left' }} colSpan="2">
        {category}
      </th>
    </tr>
  );
}
