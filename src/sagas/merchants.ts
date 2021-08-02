import {
  MerchantsActionTypes,
  PatchMerchant,
  receiveMerchants,
  requestMerchantsError,
  patchMerchantSuccess,
  patchMerchantsError
} from './../ducks/merchants'
import { takeEvery, put, call } from 'redux-saga/effects'

function* fetchMerchants() {
  try {
    const response = yield call(fetch, 'http://localhost:3002/merchants')
    const data = yield response.json()
    yield put(receiveMerchants(data))
  } catch (err) {
    yield put(requestMerchantsError())
  }
}

function* patchMerchant(action: PatchMerchant) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:3002/merchants/${action.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ isBill: action.isBill }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const data = yield response.json()
    yield put(patchMerchantSuccess(data))
  } catch (err) {
    yield put(patchMerchantsError())
  }
}

export function* watchMerchantsRequestSaga() {
  yield takeEvery(MerchantsActionTypes.REQUEST_MERCHANTS, fetchMerchants)
}

export function* watchMerchantPatchSaga() {
  yield takeEvery(MerchantsActionTypes.PATCH_MERCHANT, patchMerchant)
}
