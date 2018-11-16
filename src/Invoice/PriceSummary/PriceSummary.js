import React from 'react';

import {
  PriceSummaryOuterContainer,
  PriceSummaryInnerContainer,
  PriceSummaryLineItem
} from './styles';

const PriceSummary = ({ formatter, total, tax, subtotal }) => (
  <PriceSummaryOuterContainer>
    <PriceSummaryInnerContainer>
      <PriceSummaryLineItem>
        <span>Subtotal</span>
        <span>{formatter.format(subtotal)}</span>
      </PriceSummaryLineItem>
      <PriceSummaryLineItem>
        <span>Tax (5%)</span>
        <span>{formatter.format(tax)}</span>
      </PriceSummaryLineItem>
      <PriceSummaryLineItem>
        <span>Total</span>
        <span>{formatter.format(total)}</span>
      </PriceSummaryLineItem>
    </PriceSummaryInnerContainer>
  </PriceSummaryOuterContainer>
);

export default PriceSummary;
