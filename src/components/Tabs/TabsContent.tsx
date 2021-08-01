import { Children, FC } from 'react'

interface TabsContentProps {
  selectedKey: number
}

export const TabsContent: FC<TabsContentProps> = ({
  children,
  selectedKey = 0
}) => {
  if (!children) {
    return null
  }

  const childrenArray = Children.toArray(children) as JSX.Element[]
  return childrenArray[selectedKey]
}
