import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { MdAdd, MdRemove, MdDeleteForever } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, RmFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

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
                  <button type="button" onClick={() => increment(product)}>
                    <MdAdd size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemove size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong> USD 700,00</strong>
              </td>
              <td>
                <button type="button" onClick={() => RmFromCart(product.id)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
