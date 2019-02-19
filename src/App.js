import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  state = {
    selectedProducts: [],
    products: [
      {id: 1, name: 'AirMax 90', brand: 'Nike'},
      {id: 2, name: 'Yeezy', brand: 'Adidas'},
      {id: 3, name: 'Classic', brand: 'Reebok'},
    ],
    value: ''
  }

  handleProductSelect = (product) => {
    this.setState(prevState => {
      return {
        selectedProducts: [product, ...prevState.selectedProducts]
      }
    })
  }

  sortProducts = (value) => {
    this.setState(prevState => {
      // Sort Products by a given value
      const sorted = prevState.products.sort((a, b) => {
        const nameA = a[value].toUpperCase(); // ignore upper and lowercase
        const nameB = b[value].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });

      return {
        products: [...sorted]
      }
    })
  }

  handleSelect = (event) => {
    this.sortProducts(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <h1>My Product Store</h1>
        <p id="cart">Cart: {this.state.selectedProducts.length}</p>
        <p>Sort By:</p>
        <select 
          value={this.state.value}
          onChange={this.handleSelect}
          name="sort" 
          id="sort"
        >
          <option value=""></option>
          <option value="name">Name</option>
          <option value="brand">Brand</option>
        </select>
        <ProductList 
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    );
  }
}

export default App;
