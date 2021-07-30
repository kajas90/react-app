import { FC } from 'react'
import styled from 'styled-components'
import { Merchant } from '../Merchant'
import { MerchantDto } from '../../shared/types'

interface MerchantsListProps {
  items: MerchantDto[]
}

export const MerchantsList: FC<MerchantsListProps> = ({ items }) => {
  return (
    <ListWrapper>
      {items.map((item) => (
        <Merchant key={item.id} merchant={item} />
      ))}
    </ListWrapper>
  )
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
