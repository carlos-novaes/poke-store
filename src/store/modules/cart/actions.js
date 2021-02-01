export function addToCartRequest(pokemon) {
  return {
    type: '@cart/ADD_REQUEST',
    pokemon,
  };
}

export function addToCartSuccess(pokemon) {
  return {
    type: '@cart/ADD_SUCCESS',
    pokemon,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
