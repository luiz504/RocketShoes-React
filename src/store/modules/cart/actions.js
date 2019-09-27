export function addToCart(product) {
  return {
    type: '@cart/Add',
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
