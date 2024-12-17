import  { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
];

function ProductList() {
  const [searchText, setSearchText] = useState('');
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const filteredProducts = PRODUCTS.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const stockMatch = showOnlyInStock ? product.stocked : true;
    return nameMatch && stockMatch;
  });

  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        showOnlyInStock={showOnlyInStock}
        setShowOnlyInStock={setShowOnlyInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductList;