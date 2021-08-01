import { all } from 'redux-saga/effects'
import { watchMerchantsRequestSaga } from './merchants'

export function* rootSaga() {
  yield all([watchMerchantsRequestSaga()])
}
