export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const updateProduct = ({ product, quantity }) => ({
  type: UPDATE_PRODUCT,
  data: { product, quantity }
});