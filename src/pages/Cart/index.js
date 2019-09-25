import React from 'react';

import { MdAdd, MdRemove, MdDeleteForever } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://image-cdn.hypb.st/http%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2F2d%2F82%2FShoes_6_4-5cd57f665351358744a16753f568.jpg?q=60&w=460&fit=max&v=1"
                alt="Sneakers"
              />
            </td>
            <td>
              <strong> Nike React Langa</strong>
              <span>USD 350,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdAdd size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdRemove size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong> USD 700,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDeleteForever size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
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
