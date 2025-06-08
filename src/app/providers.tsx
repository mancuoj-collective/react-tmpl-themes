import { Provider } from 'jotai'
import type { PropsWithChildren } from 'react'

import { TwScreenIndicator } from '@/components/tw-screen-indicator'

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <Provider>
      <div className="font-sans antialiased">
        {children}
        <TwScreenIndicator />
      </div>
    </Provider>
  )
}
