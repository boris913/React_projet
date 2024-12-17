import React from 'react';
import PropTypes from 'prop-types';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(productsByCategory).map(category => (
          <React.Fragment key={category}>
            <tr>
              <th colSpan="2">{category}</th>
            </tr>
            {productsByCategory[category].map(product => (
              <ProductRow key={product.name} product={product} />
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default ProductTable;