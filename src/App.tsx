import React, { useState, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { MerchantsList } from './components/MerchantsList'
import { colors } from './shared/theme'

const BaseStyles = createGlobalStyle`
body {
  font-family: Helvetica, Arial, Verdana, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: normal;
  background: ${colors.lightGrey};
}
`

const App: React.FunctionComponent = () => {
  const [merchants, setMerchants] = useState([])

  const fetchData = async () => {
    const response = await fetch('http://localhost:3002/merchants')
    const data = await response.json()
    setMerchants(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <BaseStyles />
      <MerchantsList items={merchants} />
    </>
  )
}

export default App
