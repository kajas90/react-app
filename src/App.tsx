import React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { Merchants } from './pages/Merchants'
import { colors } from './shared/theme'
import { store } from './config/store'

const BaseStyles = createGlobalStyle`
  body {
    font-family: Helvetica, Arial, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: normal;
    background: ${colors.lightGrey};
    color: ${colors.black};
  }
`

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BaseStyles />
      <Merchants />
    </Provider>
  )
}

export default App
