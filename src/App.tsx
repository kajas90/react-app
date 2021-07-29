import React, { useState, useEffect } from 'react'
import { MerchantsList } from './components/MerchantsList'

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
      <MerchantsList items={merchants} />
    </>
  )
}

export default App
