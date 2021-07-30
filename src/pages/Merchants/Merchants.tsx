import { useState, useEffect } from 'react'
import { MerchantsList } from './components/MerchantsList'
import { Tabs } from '../../components/Tabs'
import { Page } from '../../components/Page'

export const Merchants = () => {
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
    <Page>
      <Tabs activeTab="merchants" items={['merchants', 'other']} />
      <MerchantsList items={merchants} />
    </Page>
  )
}
