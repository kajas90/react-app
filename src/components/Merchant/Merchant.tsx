import React, { FC, useState, useCallback } from 'react'
import styled from 'styled-components'
import { MerchantDto } from '../../shared/types'
import { colors } from '../../shared/theme'

import { Button } from '../Button/Button'
import { Chevron, Direction } from '../Chevron'

interface MerchantProps {
  merchant: MerchantDto
}

export const Merchant: FC<MerchantProps> = ({ merchant }) => {
  const [isExpanded, setExpanded] = useState(false)

  const toggleDetails = useCallback(
    () => setExpanded((flag) => !flag),
    [isExpanded]
  )
  return (
    <Wrapper onClick={toggleDetails}>
      <Header>
        <Title>{merchant.name}</Title>
        <Actions>
          <Button>do stuff</Button>
          <StyledChevron
            direction={isExpanded ? Direction.DOWN : Direction.RIGHT}
          />
        </Actions>
      </Header>
      {isExpanded && (
        <>
          {merchant.transactions.map((transaction) => (
            <div>{transaction.amount}</div>
          ))}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  box-shadow: 1px 0px 5px 1px ${colors.grey};
  background: ${colors.white};
  border-radius: 4px;
  margin-bottom: 16px;

  &:hover {
    border-left: 3px solid ${colors.middleBlueGreen};
  }
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

const StyledChevron = styled(Chevron)`
  margin-left: 16px;
`

const Header = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
