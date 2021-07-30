import React, { FC } from 'react'
import styled from 'styled-components'
import { MerchantDto } from '../../shared/types'
import { colors } from '../../shared/theme'

import { Button } from '../Button/Button'

interface MerchantProps {
  merchant: MerchantDto
}

export const Merchant: FC<MerchantProps> = ({ merchant }) => (
  <Wrapper>
    {merchant.name}
    <Button>do stuff</Button>
  </Wrapper>
)

const Wrapper = styled.li`
  padding: 24px;
  border: 1px solid ${colors.grey};
  background: ${colors.white};
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
