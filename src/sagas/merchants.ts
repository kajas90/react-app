import { MerchantsActionTypes } from './../ducks/merchants'
import { takeEvery, put } from 'redux-saga/effects'

function* fetchMerchants() {
  try {
    const response = yield fetch('http://localhost:3002/merchants')
    const data = yield response.json()
    yield put({ type: MerchantsActionTypes.RECEIVE_MERCHANTS, data })
  } catch (err) {
    yield put({ type: MerchantsActionTypes.REQUEST_MERCHANTS_ERROR })
  }
}

export function* watchMerchantsRequestSaga() {
  yield takeEvery(MerchantsActionTypes.REQUEST_MERCHANTS, fetchMerchants)
}
