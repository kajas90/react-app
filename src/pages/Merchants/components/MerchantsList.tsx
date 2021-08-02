import { FC } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { potentialBillMerchantsSelector } from '../../../ducks/merchants'
import { Merchant } from './Merchant'

interface MerchantsListProps {
  isBill?: boolean
  title: string
}

export const MerchantsList: FC<MerchantsListProps> = ({
  isBill = false,
  title
}) => {
  const merchants = useSelector(potentialBillMerchantsSelector(isBill))
  return (
    <>
      <h2>{title}</h2>
      <ListWrapper>
        {merchants.map((item) => (
          <Merchant key={item.id} merchant={item} />
        ))}
      </ListWrapper>
    </>
  )
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
