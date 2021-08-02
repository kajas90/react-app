import { FC, useState, useCallback } from 'react'
import styled from 'styled-components'
import { MerchantDto } from '../../../shared/types'
import { colors } from '../../../shared/theme'

import { Button } from '../../../components/Button'
import { Chevron, Direction } from '../../../components/Chevron'
import { useDispatch, useSelector } from 'react-redux'
import {
  patchMerchant,
  merchantsLoadingSelector
} from '../../../ducks/merchants'

interface MerchantProps {
  merchant: MerchantDto
}

export const Merchant: FC<MerchantProps> = ({ merchant }) => {
  const [isExpanded, setExpanded] = useState(false)
  const toggleDetails = useCallback(() => setExpanded((flag) => !flag), [])
  const dispatch = useDispatch()
  const isLoading = useSelector(merchantsLoadingSelector)

  const updateMerchant = useCallback(() => {
    if (!isLoading) {
      dispatch(patchMerchant(merchant.id, !merchant.isBill))
    }
  }, [isLoading, merchant.id, merchant.isBill, dispatch])

  return (
    <Wrapper onClick={toggleDetails} data-test="merchant-wrapper">
      <Header>
        <Title>{merchant.name}</Title>
        <Counter>{merchant.transactions.length} transactions</Counter>
        <Actions>
          <Button disabled={isLoading} onClick={updateMerchant}>
            {merchant.isBill ? 'remove bill' : 'set as bill'}
          </Button>
          <StyledChevron
            direction={isExpanded ? Direction.DOWN : Direction.RIGHT}
          />
        </Actions>
      </Header>
      {isExpanded && (
        <Details>
          {merchant.transactions.map((transaction, index) => (
            <div key={`${transaction.date}${index}`}>
              {transaction.date} {transaction.amount}
            </div>
          ))}
        </Details>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  background: ${colors.white};
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 24px;

  &:hover {
    border-left: 3px solid ${colors.middleBlueGreen};
  }
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
`

const Counter = styled.span`
  padding: 4px 8px;
  background: ${colors.middleBlueGreen};
  color: ${colors.white};
  margin: 0 8px;
  border-radius: 4px;
  font-size: 12px;
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
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Details = styled.div`
  padding-top: 16px;
`
