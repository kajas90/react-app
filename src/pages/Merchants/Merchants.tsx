import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  requestMerchants,
  potentialBillMerchantsSelector
} from '../../ducks/merchants'
import { MerchantsList } from './components/MerchantsList'
import { Tab, Tabs } from '../../components/Tabs'
import { Page } from '../../components/Page'

export const Merchants = () => {
  const dispatch = useDispatch()
  const merchants = useSelector(potentialBillMerchantsSelector(true))

  useEffect(() => {
    dispatch(requestMerchants())
  }, [dispatch])

  return (
    <Page>
      <Tabs>
        <Tab label="bills">
          <MerchantsList items={merchants} />
        </Tab>
        <Tab label="potential bills">
          <MerchantsList items={[]} />
        </Tab>
      </Tabs>
    </Page>
  )
}
