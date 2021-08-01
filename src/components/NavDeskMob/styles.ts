import styled from 'styled-components'

export const Nav = styled.nav `
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 3;
  gap: 40px;

  .first-link {
    margin-left: auto;
  }

  .last-link {
    margin-right: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const H1 = styled.h1 `
  color: white;
  font-size: 40px;
  font-weight: 100;
  padding: 0 0 0 25px;
  cursor: pointer;
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