import { FC } from 'react'
import styled from 'styled-components'
import { colors } from '../../shared/theme'
import { useTabsContext } from './Tabs'

interface TabsNavigationProps {
  items: string[]
}

export const TabsNavigation: FC<TabsNavigationProps> = ({ items }) => {
  const { setActive, active } = useTabsContext()

  if (!setActive || active === undefined) {
    return null
  }

  return (
    <Wrapper>
      {items.map((item, index) => (
        <Tab
          onClick={() => setActive(index)}
          key={item}
          isActive={index === active}
        >
          {item}
        </Tab>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: inline-block;
  border-radius: 4px;
  background: ${colors.white};
  margin-bottom: 24px;
`

const Tab = styled.a<{ isActive?: boolean }>`
  display: inline-block;
  padding: 16px 16px 13px;
  cursor: pointer;
  border-bottom: 3px solid ${colors.white};
  color: ${colors.grey};

  &:last-child {
    border-bottom-right-radius: 4px;
  }

  &:first-child {
    border-bottom-left-radius: 4px;
  }

  ${({ isActive }) =>
    isActive &&
    `border-bottom: 3px solid ${colors.middleBlueGreen}; 
    font-weight: bold;
    color: ${colors.black};`}
`
