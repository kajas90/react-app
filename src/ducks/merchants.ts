import { RootState } from './../config/store'
import { MerchantDto } from './../shared/types'
import { Action } from 'redux'
import { createSelector } from 'reselect'

interface MerchantsState {
  items: MerchantDto[]
  isLoading: boolean
}

export const merchantsInitialState: MerchantsState = {
  items: [],
  isLoading: false
}

// Actions

export enum MerchantsActionTypes {
  REQUEST_MERCHANTS = 'merchants/request',
  RECEIVE_MERCHANTS = 'merchants/receive',
  REQUEST_MERCHANTS_ERROR = 'merchants/request/error',
  PATCH_MERCHANT = 'merchants/patch',
  PATCH_MERCHANT_SUCCESS = 'merchants/patch/success',
  PATCH_MERCHANT_ERROR = 'merchants/patch/error'
}

export interface PatchMerchant extends Action {
  type: MerchantsActionTypes.PATCH_MERCHANT
  id: string
  isBill: boolean
}

export const patchMerchant = (id: string, isBill: boolean): PatchMerchant => {
  return {
    type: MerchantsActionTypes.PATCH_MERCHANT,
    id,
    isBill
  }
}

export interface PatchMerchantSuccess extends Action {
  type: MerchantsActionTypes.PATCH_MERCHANT_SUCCESS
  merchant: MerchantDto
}

export const patchMerchantSuccess = (
  merchant: MerchantDto
): PatchMerchantSuccess => {
  return {
    type: MerchantsActionTypes.PATCH_MERCHANT_SUCCESS,
    merchant
  }
}

export interface PatchMerchantsError extends Action {
  type: MerchantsActionTypes.PATCH_MERCHANT_ERROR
}

export const patchMerchantsError = (): PatchMerchantsError => {
  return {
    type: MerchantsActionTypes.PATCH_MERCHANT_ERROR
  }
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
  | PatchMerchant
  | PatchMerchantSuccess

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

    case MerchantsActionTypes.PATCH_MERCHANT:
      return {
        ...state,
        isLoading: true
      }
    case MerchantsActionTypes.PATCH_MERCHANT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: state.items.map((item) =>
          item.id === action.merchant.id ? action.merchant : item
        )
      }
    default:
      return state
  }
}

// Selectors

const merchantRootState = (state: RootState) => state.merchant

export const merchantsLoadingSelector = createSelector<
  RootState,
  MerchantsState,
  boolean
>(merchantRootState, (root) => root.isLoading)

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
