import { useState, useEffect } from 'react'
import { MerchantsList } from './components/MerchantsList'
import { Tabs, TabsContent } from '../../components/Tabs'
import { Page } from '../../components/Page'
import { MerchantDto } from '../../shared/types'

export const Merchants = () => {
  const [merchants, setMerchants] = useState<MerchantDto[]>([])
  const [activeTab, setActiveTab] = useState<number>(0)

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
      <Tabs
        activeTab={activeTab}
        changeTab={setActiveTab}
        items={['merchants', 'other']}
      />
      <TabsContent selectedKey={activeTab}>
        <MerchantsList
          items={merchants.filter((merchant) => merchant.isBill)}
        />
        <MerchantsList
          items={merchants.filter((merchant) => !merchant.isBill)}
        />
      </TabsContent>
    </Page>
  )
}
