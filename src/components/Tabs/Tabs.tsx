import React, { useContext, useState, FC, Children } from 'react'
import { TabsNavigation } from './TabsNavigation'
import { TabsContent } from './TabsContent'

interface ContextProps {
  active: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}

export const tabsContext = React.createContext<Partial<ContextProps>>({
  active: 0
})

export const Tabs = ({ children }: { children: React.ReactElement[] }) => {
  const [active, setActive] = useState(0)
  const ContextProvider = tabsContext.Provider

  const labels = Children.map(children, (child) => child.props.label)

  return (
    <ContextProvider value={{ active, setActive }}>
      <TabsNavigation items={labels} />
      <TabsContent>{children}</TabsContent>
    </ContextProvider>
  )
}

export const Tab: FC<{ label: string }> = ({ children }) => <>{children}</>

export const useTabsContext = () =>
  useContext<Partial<ContextProps>>(tabsContext)
