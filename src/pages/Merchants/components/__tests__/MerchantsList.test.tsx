import { render, screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MerchantsList } from '../MerchantsList'

const mockStore = configureMockStore()

describe('#MerchantsList', () => {
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
  test('renders correctly Merchants list', () => {
    render(
      <Provider store={mockStore({ merchant: { items: [merchantExample] } })}>
        <MerchantsList title="Bills" isBill />
      </Provider>
    )

    expect(screen.queryByText('Bills')).toBeInTheDocument()
  })

  test('renders correctly Merchants list with items', () => {
    render(
      <Provider store={mockStore({ merchant: { items: [merchantExample] } })}>
        <MerchantsList title="Bills" />
      </Provider>
    )

    expect(screen.queryByText('Vodafone')).toBeInTheDocument()
  })
})
