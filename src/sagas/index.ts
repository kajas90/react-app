import { all } from 'redux-saga/effects'
import { watchMerchantsRequestSaga, watchMerchantPatchSaga } from './merchants'

export function* rootSaga() {
  yield all([watchMerchantsRequestSaga(), watchMerchantPatchSaga()])
}
