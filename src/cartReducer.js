import {
  always,
  converge,
  path,
  pathOr,
  assoc,
  dissoc,
  cond,
  ifElse,
  propEq,
  T,
  gt,
  __,
  pipe,
  prop,
  multiply,
  map,
  values,
  sum
} from 'ramda';

import { UPDATE_PRODUCT } from './cartAction';

const updateProduct = state =>
  ifElse(
    pipe(
      path(['data', 'quantity']),
      gt(__, 0)
    ),
    converge(assoc, [
      path(['data', 'product', 'id']),
      prop('data'),
      always(state)
    ]),
    converge(dissoc, [path(['data', 'product', 'id']), always(state)])
  );

export default (state = {}, action) =>
  cond([
    [propEq('type', UPDATE_PRODUCT), updateProduct(state)],
    [T, always(state)]
  ])(action);

// selectors
export const getProductQuantity = id => pathOr(0, ['cart', id, 'quantity']);
export const getProducts = pipe(
  prop('cart'),
  values
);
export const getProductsTotal = pipe(
  getProducts,
  map(converge(multiply, [path(['product', 'price']), prop('quantity')])),
  sum
);
