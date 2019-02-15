import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

it('should render a list of products as an unordered list', () => {
  const mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  const wrapper = shallow(<ProductList products={mockProducts}/>);
  expect(wrapper.find('li').length).toEqual(mockProducts.length); // 3
});

it('should display a product name in each `<li>` element', () => {
  const mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  const wrapper = shallow(<ProductList products={mockProducts}/>);
  const firstElement = wrapper.find('li').first();
  // Check that the product name is contained within this element
  expect(firstElement.contains(mockProducts[0].name)).toEqual(true);
});

it('should display the brand name in each `<li>` element', () => {
  const mockProducts = [
    {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
    {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
    {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
  ];
  const wrapper = shallow(<ProductList products={mockProducts}/>);
  const firstElement = wrapper.find('li').first();
  expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
});