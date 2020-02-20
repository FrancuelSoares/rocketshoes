import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import { formatPrice } from '../../../utils/format';
import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';

// * = generator
function* addToCart({ id }) {
  // Acessar estado do Redux
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;

    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
