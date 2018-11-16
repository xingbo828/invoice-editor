import React from 'react';

import Container from '../Shared/Container'
import Heading from '../Shared/Heading'

import ProductSummary from './ProductSummary'
import PriceSummary from './PriceSummary'

const Invoice = () => {
  return (
    <Container>
      <Heading wrapperTag="h1" centered size="md">Your invoice</Heading>
      <ProductSummary />
      <PriceSummary />
    </Container>
  );
};

export default Invoice;