import { fireEvent, render, screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Merchant } from '../Merchant'

const mockStore = configureMockStore()

describe('#Merchant', () => {
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
  test('renders correctly Merchant item', () => {
    render(
      <Provider store={mockStore({ merchant: {} })}>
        <Merchant merchant={merchantExample} />
      </Provider>
    )

    expect(screen.queryByText(merchantExample.name)).toBeInTheDocument()
  })

  test('toggles transactions', () => {
    render(
      <Provider store={mockStore({ merchant: {} })}>
        <Merchant merchant={merchantExample} />
      </Provider>
    )

    fireEvent.click(screen.getByTestId('merchant-wrapper'))
    expect(
      screen.queryByText(
        `${merchantExample.transactions[0].date} ${merchantExample.transactions[0].amount}`
      )
    ).toBeInTheDocument()
  })
})
