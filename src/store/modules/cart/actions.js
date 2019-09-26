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
