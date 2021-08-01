import { useState, useEffect } from 'react'
import { MerchantsList } from './components/MerchantsList'
import { Tab, Tabs } from '../../components/Tabs'
import { Page } from '../../components/Page'
import { MerchantDto } from '../../shared/types'

export const Merchants = () => {
  const [merchants, setMerchants] = useState<MerchantDto[]>([])

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
      <Tabs>
        <Tab label="merchants">
          <MerchantsList
            items={merchants.filter((merchant) => merchant.isBill)}
          />
        </Tab>
        <Tab label="merchants 2">
          <MerchantsList
            items={merchants.filter((merchant) => !merchant.isBill)}
          />
        </Tab>
      </Tabs>
    </Page>
  )
}
