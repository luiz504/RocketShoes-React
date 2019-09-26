import React from 'react';
import { connect } from 'react-redux';

import { MdAdd, MdRemove, MdDeleteForever } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdAdd size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <MdRemove size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong> USD 700,00</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
                  }
                >
                  <MdDeleteForever size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Checkout</button>
        <Total>
          <span> Request total</span>
          <strong>USD 1000,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart,
  cartSize: state.cart.length,
});
export default connect(mapStateToProps)(Cart);
