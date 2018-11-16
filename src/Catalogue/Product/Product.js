import React from 'react';

import { Container, Image, Title, Price } from './styles';
import NumberField from './NumberField';

const Product = ({ handleChange, productDetail, quantity, unit }) => (
  <Container>
    <Image src={productDetail.image} />
    <Title>{productDetail.title}</Title>
    <Price>${productDetail.price}</Price>
    <NumberField onChange={handleChange} unit={unit} value={quantity} />
  </Container>
);

export default Product;
