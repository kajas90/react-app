import {
  merchant,
  merchantsInitialState,
  patchMerchant,
  receiveMerchants,
  patchMerchantSuccess
} from './../merchants'

describe('#ducks/merchants', () => {
  const merchantExample = {
    categoryId: 1,
    iconUrl:
      'https://pbs.twimg.com/profile_images/1151788824093188097/wHfb5mYZ_bigger.png',
    id: '5a5caa1efe33900100fd8ed5',
    isBill: false,
    name: 'Vodafone',
    transactions: [
      {
        amount: 12.34,
        date: '2018-01-13',
        id: 36
      }
    ]
  }
  test('properly receives items', () => {
    expect(
      merchant(merchantsInitialState, receiveMerchants([merchantExample]))
    ).toEqual({
      ...merchantsInitialState,
      items: [merchantExample]
    })
  })

  test('set state to loading when patching element', () => {
    expect(merchant(merchantsInitialState, patchMerchant('1', true))).toEqual({
      ...merchantsInitialState,
      isLoading: true
    })
  })

  test('replaces data when patch is sucessfull', () => {
    expect(
      merchant(
        { isLoading: true, items: [merchantExample] },
        patchMerchantSuccess({ ...merchantExample, isBill: true })
      ).items[0].isBill
    ).toBeTruthy()
  })
})
