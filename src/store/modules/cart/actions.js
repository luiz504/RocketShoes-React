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

export function updateAmount(id, amount) {
  return {
    type: '@cart/Update',
    id,
    amount,
  };
}
