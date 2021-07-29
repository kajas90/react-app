import React, { FC } from 'react'
import { MerchantDto } from '../../shared/types'

interface MerchantProps {
  merchant: MerchantDto
}

export const Merchant: FC<MerchantProps> = ({ merchant }) => (
  <li>{merchant.name}</li>
)
