// import React from 'react';
import PropTypes from 'prop-types';

function ProductRow({ product }) {
  const style = product.stocked ? {} : { color: 'red' };

  return (
    <tr>
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stocked: PropTypes.bool.isRequired
  }).isRequired
};

export default ProductRow;