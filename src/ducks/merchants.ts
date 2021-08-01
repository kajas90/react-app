import { RootState } from './../config/store'
import { MerchantDto } from './../shared/types'
import { Action } from 'redux'
import { createSelector } from 'reselect'

interface MerchantsState {
  items: MerchantDto[]
}

export const merchantsInitialState: MerchantsState = {
  items: []
}

// Actions

export enum MerchantsActionTypes {
  REQUEST_MERCHANTS = 'merchants/request',
  RECEIVE_MERCHANTS = 'merchants/receive',
  REQUEST_MERCHANTS_ERROR = 'merchants/request/error'
}

export interface RequestMerchants extends Action {
  type: MerchantsActionTypes.REQUEST_MERCHANTS
}

export const requestMerchants = (): RequestMerchants => {
  return {
    type: MerchantsActionTypes.REQUEST_MERCHANTS
  }
}

export interface ReceiveMerchants extends Action {
  type: MerchantsActionTypes.RECEIVE_MERCHANTS
  data: MerchantDto[]
}

export const receiveMerchants = (data: MerchantDto[]): ReceiveMerchants => {
  return {
    type: MerchantsActionTypes.RECEIVE_MERCHANTS,
    data
  }
}

export interface RequestMerchantsError extends Action {
  type: MerchantsActionTypes.REQUEST_MERCHANTS_ERROR
}

export const requestMerchantsError = (): RequestMerchantsError => {
  return {
    type: MerchantsActionTypes.REQUEST_MERCHANTS_ERROR
  }
}

export type MerchantsAction =
  | RequestMerchants
  | ReceiveMerchants
  | RequestMerchantsError

// Reducer

export const merchant = (
  state: MerchantsState = merchantsInitialState,
  action: MerchantsAction
): MerchantsState => {
  switch (action.type) {
    case MerchantsActionTypes.RECEIVE_MERCHANTS:
      return {
        ...state,
        items: action.data
      }
    default:
      return state
  }
}

// Selectors

const merchantRootState = (state: RootState) => state.merchant

const merchantsSelector = createSelector<
  RootState,
  MerchantsState,
  MerchantDto[]
>(merchantRootState, (root) => root.items)

export const potentialBillMerchantsSelector = (isBill: boolean) =>
  createSelector<RootState, MerchantDto[], MerchantDto[]>(
    merchantsSelector,
    (merchants) => merchants.filter((merchant) => merchant.isBill === isBill)
  )
