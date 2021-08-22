import { ReactNode } from 'react'
import { LanguageProvider } from './language'

interface ProviderProp {
  'children': ReactNode
}

export const Provider = ({children}: ProviderProp) => {

  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}