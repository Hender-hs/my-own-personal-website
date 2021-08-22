import * as S                           from './styles'
import { useState }                     from 'react'
import { useLanguage } from '../../provider/language'
import { AiFillCaretDown as DownArrow } from 'react-icons/ai'

export const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const {languageText, switchLanguage} = useLanguage()

  return (
    <>
      <S.Nav>
        <S.H1><a href='#'>{languageText.header.links.navTitle}</a></S.H1>
        <S.H3 className='first-link' ><a href='#'>{languageText.header.links.home}</a></S.H3>
        {/* <S.H3><a href='#services'>Knowledge</a></S.H3> */}
        <S.H3><a href='#services'>{languageText.header.links.services}</a></S.H3>
        <S.H3><a href='#projects'>{languageText.header.links.projects}</a></S.H3>
        <S.H3><a href='#contact-me'>{languageText.header.links.contact}</a></S.H3>
        <S.LangMenu>
          <S.H3>{languageText.header.links.languages.language}<DownArrow color='white' /> </S.H3>
          <ul>
            <li onClick={() => switchLanguage('pt-BR')} >{languageText.header.links.languages.pt}</li>
            <li onClick={() => switchLanguage('en-US')} >{languageText.header.links.languages.en}</li>
            <li onClick={() => switchLanguage('es-ES')} >{languageText.header.links.languages.es}</li>
          </ul>
        </S.LangMenu>
        <S.H3 className='last-link' ><a href='#about-me'>{languageText.header.links.aboutMe}</a></S.H3>
      </S.Nav>
      <S.NavMobile>
        <S.PositionHeaderItems>
          <S.MenuBurguerStyled color='white' size='50' onClick={() => setOpenMenu(true)} />
          <S.H1Mobile><a href='#'>{languageText.header.links.navTitle}</a></S.H1Mobile>
        </S.PositionHeaderItems>
        <S.MenuModal openMenu={openMenu} >
          <S.PositionalHeaderMenuMobileItems>
            <S.MenuBurguerStyled color='white' size='50' onClick={() => setOpenMenu(false)} />
            <S.H1Mobile><a href='#'>{languageText.header.links.navTitle}</a></S.H1Mobile>
          </S.PositionalHeaderMenuMobileItems>
          <S.PositionalModalMobileItems>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#'>{languageText.header.links.home}</a></S.H3Mobile>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#services'>Services</a></S.H3Mobile>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#projects'>Projects</a></S.H3Mobile>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#contact-me'>Contact-me</a></S.H3Mobile>
            <S.LangMenu>
               <S.H3>{languageText.header.links.languages.language}<DownArrow color='white' /> </S.H3>
               <ul>
                 <li onClick={() => switchLanguage('pt-BR')} >Portuguese</li>
                 <li onClick={() => switchLanguage('en-US')} >English</li>
                 <li onClick={() => switchLanguage('es-ES')} >Spanish</li>
               </ul>
             </S.LangMenu>
            <S.H3Mobile className='last-link' ><a href='#about-me'>{languageText.header.links.aboutMe}</a></S.H3Mobile>
          </S.PositionalModalMobileItems>
        </S.MenuModal>
      </S.NavMobile>
    </>
  )
}