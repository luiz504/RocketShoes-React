export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQ',
    id,
  };
}
export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCESS',
    product,
  };
}

export function RmFromCart(id) {
  return {
    type: '@cart/Rm',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQ',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/Update_AMOUNT_SUCESS',
    id,
    amount,
  };
}
