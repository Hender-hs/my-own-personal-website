import { createContext, useState, ReactNode, useContext } from 'react'
import { en }                                 from './en-lang'
import { es }                                 from './es-lang'
import { pt }                                 from './pt-lang'
import { LanguageSections }                   from './LangInterface'
import { useEffect } from 'react'

interface LanguageContext {
  'switchLanguage': (lang: string) => void,
  'languageText': LanguageSections,
}

interface ProviderProp {
  'children': ReactNode
}

export const LanguageContext = createContext<LanguageContext>({} as LanguageContext)

export const LanguageProvider = ({children}: ProviderProp) => {

  const storagedCurrLang = localStorage.getItem('@Portifolio/lang') || 'en-US'

  const [languageText, serLanguageText] = useState<LanguageSections>(en as LanguageSections)

  const switchLanguage = (lang: string) => {

    switch (lang) {

      case 'en-US':
        serLanguageText(en)
        localStorage.setItem('@Portifolio/lang', 'en-US')  
        break

      case 'es-ES':
        serLanguageText(es)
        localStorage.setItem('@Portifolio/lang', 'es-ES')  
        break

      case 'pt-BR':
        serLanguageText(pt)
        localStorage.setItem('@Portifolio/lang', 'pt-BR')  
        break
    }
  }

  useEffect(() => {
    switchLanguage(storagedCurrLang)
  })

  useEffect(() => {
    console.log(languageText)
  }, [languageText])

  return (
    <LanguageContext.Provider value={{languageText, switchLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)