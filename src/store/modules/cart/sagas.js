import { select, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ pokemon }) {
  const pokemonExists = yield select((state) =>
    state.cart.find((p) => p.id === pokemon.id),
  );
  const currentAmount = pokemonExists ? pokemonExists.amount : 0;

  const amount = currentAmount + 1;

  if (pokemonExists) {
    yield put(updateAmountSuccess(pokemon.id, amount));
  } else {
    const data = {
      ...pokemon,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
