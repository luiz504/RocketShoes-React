import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';

import PropTypes from 'prop-types';

import colors from '../../styles/color';

import { formatPrice } from '../../Util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList, LoadingContainer, LoadingAnimation } from './styles';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: false,
      houvered: null,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await api.get('products');

    const data = await response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data, loading: false });
  }

  handleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  handleHouver = id => {
    this.setState({ houvered: id });
  };

  render() {
    const { products, loading, houvered } = this.state;
    const { quantity } = this.props;

    return loading ? (
      <LoadingContainer>
        <LoadingAnimation color={colors.purple} size={60} />
      </LoadingContainer>
    ) : (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={houvered === product.id ? product.image2 : product.image}
              alt={product.title}
              onFocus={() => this.handleHouver(product.id)}
              onMouseEnter={() => this.handleHouver(product.id)}
              onMouseOut={() => this.handleHouver(null)}
              onBlur={() => this.handleHouver(product.id)}
            />

            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddToCart(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {quantity[product.id] || 0}
              </div>
              <span> ADD TO CART </span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
const mapStateToProps = state => ({
  quantity: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  quantity: PropTypes.objectOf(PropTypes.number).isRequired,
};
