import cartReducer, {
  getProductQuantity,
  getProductsTotal,
  getProducts
} from './cartReducer'
import { updateProduct } from './cartAction'

const productA = { id:'pa', title: 'PA', price: 120 }
const productB = { id:'pb', title: 'PB', price: 210 }


describe('cart reducer', () => {
  it('can add product into cart', () => {
    const newState = cartReducer(undefined, updateProduct({ product: productA, quantity: 2 }))
    expect(newState.pa.product).toEqual(productA)
    expect(newState.pa.quantity).toEqual(2)
  })
  it('can remove product from cart', () => {
    let state = cartReducer(undefined, updateProduct({ product: productA, quantity: 2 }))
    state = cartReducer(state, updateProduct({ product: productA, quantity: 0 }))
    expect(state).toEqual({})
  })
})

describe('cart selector', () => {
  it('can give quantity of a product', () => {
    const newState = cartReducer(undefined, updateProduct({ product: productA, quantity: 2 }))
    expect(getProductQuantity('pa')({ cart: newState })).toEqual(2)
  })
  it('can select all products in cart', () => {
    let state = cartReducer(undefined, updateProduct({ product: productA, quantity: 2 }))
    state = cartReducer(state, updateProduct({ product: productB, quantity: 3 }))
    expect(getProducts({ cart: state })[0].product).toEqual(productA)
    expect(getProducts({ cart: state })[1].product).toEqual(productB)
  })
  it('can give subtotal of cart', () => {
    let state = cartReducer(undefined, updateProduct({ product: productA, quantity: 2 }))
    state = cartReducer(state, updateProduct({ product: productB, quantity: 3 }))
    expect(getProductsTotal({ cart: state })).toEqual(870)
  })
})
