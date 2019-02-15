import React from 'react';
import PropTypes from 'prop-types';

const ProductList = (props) => {
  return (
    <div>
      <div 
        style={{marginBottom: '1rem'}}
      >ProductList</div>
      {props.products.map(product =>
        <li key={product.id}>
          {product.name} {product.brand}
        </li>
      )}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList;