import * as S                           from './styles'
import { useState }                     from 'react'

export const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <S.Nav>
        <S.H1><a href='#'>.Portifolio</a></S.H1>
        <S.H3 className='first-link' ><a href='#'>Home</a></S.H3>
        {/* <S.H3><a href='#services'>Knowledge</a></S.H3> */}
        <S.H3><a href='#services'>Services</a></S.H3>
        <S.H3><a href='#projects'>Projects</a></S.H3>
        <S.H3><a href='#contact-me'>Contact-me</a></S.H3>
        {/* <S.LangMenu>
          <S.H3>Language <DownArrow color='white' /> </S.H3>
          <ul>
            <li>Portuguese</li>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </S.LangMenu> */}
        <S.H3 className='last-link' ><a href='#about-me'>About me</a></S.H3>
      </S.Nav>
      <S.NavMobile>
        <S.PositionHeaderItems>
          <S.MenuBurguerStyled color='white' size='50' onClick={() => setOpenMenu(true)} />
          <S.H1Mobile><a href='#'>.Portifolio</a></S.H1Mobile>
        </S.PositionHeaderItems>
        <S.MenuModal openMenu={openMenu} >
          <S.PositionalHeaderMenuMobileItems>
            <S.MenuBurguerStyled color='white' size='50' onClick={() => setOpenMenu(false)} />
            <S.H1Mobile><a href='#'>.Portifolio</a></S.H1Mobile>
          </S.PositionalHeaderMenuMobileItems>
          <S.PositionalModalMobileItems>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#'>Home</a></S.H3Mobile>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#services'>Services</a></S.H3Mobile>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#projects'>Projects</a></S.H3Mobile>
            <S.H3Mobile><a onClick={() => setOpenMenu(false)} href='#contact-me'>Contact-me</a></S.H3Mobile>
            {/* <S.LangMenu>
              <S.H3>Language <DownArrow color='white' /> </S.H3>
              <ul>
                <li>Portuguese</li>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </S.LangMenu> */}
            <S.H3Mobile className='last-link' ><a href='#about-me'>About me</a></S.H3Mobile>
          </S.PositionalModalMobileItems>
        </S.MenuModal>
      </S.NavMobile>
    </>
  )
}