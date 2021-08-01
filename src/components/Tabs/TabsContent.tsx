import { Children, FC } from 'react'
import { useTabsContext } from './Tabs'

export const TabsContent: FC = ({ children }) => {
  const { active } = useTabsContext()

  if (!children || active === undefined) {
    return null
  }

  const childrenArray = Children.toArray(children) as JSX.Element[]
  return childrenArray[active]
}
