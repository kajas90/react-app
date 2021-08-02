import { fireEvent, render, screen } from '@testing-library/react'
import { Tabs, Tab } from '../Tabs'

describe('#Tabs', () => {
  test('renders first tab by default', () => {
    render(
      <Tabs>
        <Tab label="tab1">cat</Tab>
        <Tab label="tab2">dog</Tab>
      </Tabs>
    )
    expect(screen.queryByText('cat')).toBeInTheDocument()
    expect(screen.queryByText('dog')).not.toBeInTheDocument()
  })

  test('switches the tab', () => {
    render(
      <Tabs>
        <Tab label="tab1">cat</Tab>
        <Tab label="tab2">dog</Tab>
      </Tabs>
    )

    fireEvent.click(screen.getByTestId('tab-nav-item-tab2'))
    expect(screen.queryByText('dog')).toBeInTheDocument()
  })
})
