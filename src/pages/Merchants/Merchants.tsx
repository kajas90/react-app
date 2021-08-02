import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { requestMerchants } from '../../ducks/merchants'
import { MerchantsList } from './components/MerchantsList'
import { Tab, Tabs } from '../../components/Tabs'
import { Page } from '../../components/Page'

export const Merchants = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestMerchants())
  }, [dispatch])

  return (
    <Page>
      <Tabs>
        <Tab label="bills">
          <MerchantsList isBill title="Bills" />
        </Tab>
        <Tab label="potential bills">
          <MerchantsList title="Potential bills" />
        </Tab>
      </Tabs>
    </Page>
  )
}
