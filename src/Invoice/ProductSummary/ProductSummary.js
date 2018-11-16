import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Shared/Button';
import Icon from '../../Shared/Icon';
import {
  ProductSummaryList,
  ProductSummaryListHeading,
  ProductSummaryListItem
} from './styles';
const ProductSummary = ({ products, handleRemove }) => {
  const renderProductListItems = products => {
    return products.map(p => (
      <ProductSummaryListItem key={p.product.id}>
        <span><Link to="/catalogue">{p.product.title}</Link></span>
        <span>{p.quantity}</span>
        <span>${p.product.price}</span>
        <span>${p.quantity * p.product.price}</span>
        <span>
          <Button small danger onClick={handleRemove(p.product)}>
            <Icon size="lg" icon="trash" /><span style={{display: 'none'}}>Remove</span>
          </Button>
        </span>
      </ProductSummaryListItem>
    ));
  };
  return (
    <ProductSummaryList>
      <ProductSummaryListHeading>
        <span>Item</span>
        <span>Qty</span>
        <span>Price</span>
        <span>Total</span>
        <span>Action</span>
      </ProductSummaryListHeading>
      {renderProductListItems(products)}
    </ProductSummaryList>
  );
};

export default ProductSummary;
