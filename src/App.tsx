import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Merchants } from './pages/Merchants'
import { colors } from './shared/theme'

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
    <>
      <BaseStyles />
      <Merchants />
    </>
  )
}

export default App
