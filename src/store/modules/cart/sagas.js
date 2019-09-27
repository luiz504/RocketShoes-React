import { call, put, all, takeLatest } from 'redux-saga/effects';
// Call - deal with async methods that return promises. (api.get)
// Put - trigger an action into the middleware
// all- run multi tasks at parallel (Promise #all)
// takeLatest - multi click during request recognize only one.
// taleEvery - recognize all clicks during the request.
import api from '../../../services/api';
import { addToCartSucess } from './actions';

function* addToCart({ id }) {
  // this response atm receive the product data coming from API
  const response = yield call(api.get, `/products/${id}`);
  // 1° param declare the request method.
  // 2°+ params the params usually passed inside the api.get()

  yield put(addToCartSucess(response.data));
  // trigger this action
}

export default all([takeLatest('@cart/ADD_REQ', addToCart)]);
// 1° param - the heard action.
// 2° param - witch function you want trigger.
