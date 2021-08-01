import * as S from './styles'
import { AiFillCaretDown as DownArrow } from 'react-icons/ai'

export const Nav = () => {

  return (
    <S.Nav>
      <S.H1>.Portifolio</S.H1>
      <S.H3 className='first-link' >Home</S.H3>
      <S.H3>Knowledge</S.H3>
      <S.H3>Projects</S.H3>
      <S.LangMenu>
        <S.H3>Language <DownArrow color='white' /> </S.H3>
        <ul>
          <li>Portuguese</li>
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </S.LangMenu>
      <S.H3 className='last-link' >About me</S.H3>
    </S.Nav>
  )
}