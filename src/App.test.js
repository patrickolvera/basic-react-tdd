import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

let mockProducts,
    wrapper;

beforeEach(() => {
  // Mock products
  mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'CMockBrandZ'},
    {id: 2, name: 'Mock Product 2', brand: 'BMockBrandY'},
    {id: 3, name: 'Mock Product 3', brand: 'AMockBrandX'},
  ];

  // Create the wrapper 
  wrapper = shallow(
    <App/>
  );

  // Set the state.selectedProducts of our wrapper to equal mockProducts
  wrapper.setState({ selectedProducts: mockProducts, products: mockProducts });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should display the number of items in the cart', () => {
  // Find the cart in our shallow(App)
  const cart = wrapper.find('#cart');

  // The number of items in the cart should be rendered somewhere
  expect(cart.text()).toEqual(`Cart: ${mockProducts.length}`);
});

it('should be able to sort products by name or brand', () => {
  // If the option of "name" is selected, the product list 
  // should be sorted by name

  // Select name option
  wrapper
    .find('select')
    .simulate('change', { target: { value: 'brand' } });

  expect(mockProducts[0].brand).toEqual('AMockBrandX');
});