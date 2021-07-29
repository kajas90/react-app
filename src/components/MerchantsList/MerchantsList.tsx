import React, { FC } from 'react'
import { Merchant } from '../Merchant'
import { MerchantDto } from '../../shared/types'

interface MerchantsListProps {
  items: MerchantDto[]
}

export const MerchantsList: FC<MerchantsListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Merchant key={item.id} merchant={item} />
      ))}
    </ul>
  )
}
