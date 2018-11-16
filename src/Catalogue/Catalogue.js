import React from 'react';

import Product from './Product';
import data from './data.json';

import { ProductsContainer } from './styles';

import Button from '../Shared/Button'
import Heading from '../Shared/Heading'
import Container from '../Shared/Container'

const Catalogue = ({ handleCheckout }) => {
  const renderProducts = products =>
    products.map(product => (
      <Product key={product.id} productDetail={product} unit="Quantity" />
    ));
  return (
    <Container>
      <Heading wrapperTag="h1" centered size="md">Product catalogue</Heading>
      <ProductsContainer>
        {renderProducts(data)}
      </ProductsContainer>
      <Button onClick={handleCheckout} style={{float: 'right'}}>Checkout</Button>
    </Container>
  );
};

export default Catalogue;
