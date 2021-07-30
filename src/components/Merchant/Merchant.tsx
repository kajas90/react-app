import React, { FC } from 'react'
import styled from 'styled-components'
import { MerchantDto } from '../../shared/types'
import { colors } from '../../shared/theme'

import { Button } from '../Button/Button'
import { Chevron } from '../Chevron'

interface MerchantProps {
  merchant: MerchantDto
}

export const Merchant: FC<MerchantProps> = ({ merchant }) => (
  <Wrapper>
    <Title>{merchant.name}</Title>
    <Actions>
      <Button>do stuff</Button>
      <StyledChevron />
    </Actions>
  </Wrapper>
)

const Wrapper = styled.li`
  padding: 24px;
  box-shadow: 1px 0px 5px 1px ${colors.grey};
  background: ${colors.white};
  border-radius: 4px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
`

const StyledChevron = styled(Chevron)`
  margin-left: 16px;
`
