import { IoMdMenu as BurguerMenu }  from 'react-icons/io'
import styled                       from 'styled-components'

interface MobileModal {
  openMenu: boolean
}


export const Nav = styled.nav `
  /* position: relative; */
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 3;
  gap: 40px;
  background-color: var(--header-cover-color);
  .first-link {
    margin-left: auto;
  }

  .last-link {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export const H1 = styled.h1 `
  color: white;
  font-size: 40px;
  font-weight: 100;
  padding: 0 0 0 25px;
`

export const DivLinks = styled.div `
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  background-color: rosybrown;
`

export const H3 = styled.h3 `
  font-size: 15px;
  color: white;
  font-weight: 100;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }

  &:hover {
    color: rgb(200, 200, 200, 1)
  }
`

export const LangMenu = styled.div `
  color: white;
  transition: .5s;

  ul {
    visibility: hidden;
    position: absolute;
    transition: .3s;
    height: 0px;
    overflow: hidden;
  }

  &:hover h3 {
    color: rgb(200, 200, 200, 1)
  }

  &:hover ul {
    visibility: visible;
    height: 90px;
  }

  li {
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
`

export const NavMobile = styled.nav `
  background-color: var(--header-cover-color);
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const MenuBurguerStyled = styled(BurguerMenu) `
  cursor: pointer;
` 

export const PositionHeaderItems = styled.div `
  width: 95%;
  display: flex;
`

export const H1Mobile = styled.h1 `
  color: white;
  font-size: 40px;
  font-weight: 100;
  padding: 0 0 0 25px;
  margin-left: auto;
`

export const MenuModal = styled.div<MobileModal> `
  background-color: var(--custom-black);
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  visibility: ${({openMenu}) => openMenu ? 'visible' : 'hidden'};
  z-index: 2;
  overflow: hidden;
  opacity: ${({openMenu}) => openMenu ? '1' : '0'};
  transform: translateX(${({openMenu}) => openMenu ? '0' : '-100vw'});
  transition: .9s;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const PositionalHeaderMenuMobileItems = styled.div `
  width: 95%;
  display: flex;
  align-items: center;
  height: 62px;

  svg {
    margin-top: 12px;
  }
`

export const PositionalModalMobileItems = styled.div `
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const H3Mobile = styled.h3 `
  font-size: 55px;
  color: white;
  font-weight: 100;
  cursor: pointer;
`