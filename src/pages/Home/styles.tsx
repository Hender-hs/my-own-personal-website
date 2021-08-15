import HomeHeaderImg  from '../../assets/frederic-koberl-RrJCrlU2yZs-unsplash.jpg'
import styled         from 'styled-components'
import TestImage      from '../../assets/james-harrison-vpOeXr5wmR4-unsplash.jpg'
import DoIt           from '../../assets/do-it.png'

interface TransitionProp {
  'inScreen': boolean
}

export const MainDiv = styled.div `
  /* width: 99,9vw; */
  height: 100vh;
  background-color: var(--custom-black);
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;

  header, article, footer {
    scroll-snap-align: start;
  }
`
export const Header = styled.header `
  width: 100%;
  height: 100vh;
  background-image: url(${HomeHeaderImg});
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivTitle = styled.div `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
  z-index: 1;
  text-align: center;
  background-color: var(--header-cover-color);

  h1 {
    font-size: var(--mobile-titles);
  }

  span {
    background-color: var(--orange);
  }

  h4 { 
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 35%;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 80px;
    }
    h4 {
      font-size: 24px;
      margin-bottom: 10%;
    }
  }
`

export const Main = styled.main `
  display: flex;
  flex-direction: column;
`

export const FirstArticle = styled.article<TransitionProp> `
  height: 100vh;
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  overflow-x: hidden;
  padding: 150px 0;

  section, .about-image {
    opacity: ${({inScreen}) => inScreen ? '1' : '0'};
    transform: translateX(${({inScreen}) => inScreen ? '0px' : '-850px'});
    transition: cubic-bezier(.17,.84,.44,1) 1.5s;
    transition-delay: 0.8s;
  }

  .about-image {
    transform: translateX(${({inScreen}) => inScreen ? '0px' : '250px'});
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const DivSections = styled.div `

  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 40px 0;

  p {
    font-size: 15px;
    margin: 10px
  }

  strong {
    font-weight: 700;
    font-size: 18px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  h1 {
    font-size: calc(var(--mobile-titles) - 5px);
    font-weight: 100;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .third-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .last-section {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }

  .icons-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 60%;

    h1 {
      font-size: var(--desktop-titles);
      margin-left: 70px;
      margin-bottom: unset;
    }

    .third-section {
      width: 70%;
      flex-direction: row;
    }

    .last-section {
      width: 90%;
      flex-direction: row;
      margin: unset;
    }

    .icons-section {
      width: 35%;
    }
  }
`

export const Button = styled.button `
  border: none;
  width: 150px;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: .3s;
  margin: 30px 0;
  border: 1px solid black;

  &:hover {
    color: black;
    background-color: white;
  }

  @media (min-width: 768px) {
    width: unset;
    font-size: 20px;
    margin: unset;
  }
`

export const Img = styled.img `
  display: none;

  @media (min-width: 1600px) {
    display: unset;
    width: 588px;
    height: 650px;
  }
`

export const SecondArticle = styled.article<TransitionProp> `
  height: auto;
  width: 100%;
  background-color: var(--custom-black);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 150px 0;

  .services-title {
    font-size: var(--mobile-titles);
    font-weight: 100;
    color: white;
    margin-bottom: 20px;
    opacity: ${({inScreen}) => inScreen ? '1' : '0'};
    transition-duration: 1.5s;
    transition-delay: 0.4s;
  }

  .transition-services {
    opacity: ${({inScreen}) => inScreen ? '1' : '0'};
    transform: translateY(${({inScreen}) => inScreen ? '0px' : '850px'});
    transition: cubic-bezier(.17,.84,.44,1);
    transition-delay: 0.7s;
  }

  .service0 {
    transition-duration: 1.3s;
  }

  .service1 {
    transition-duration: 1.8s;
  }

  .service2 {
    transition-duration: 2s;
  }

  .service3 {
    transition-duration: 2.2s;
  }

  .service4 {
    transition-duration: 2.4s;
  }

  .service5 {
    transition-duration: 2.6s;
  }

  @media (min-width: 768px) {
    height: auto;
    padding: 0;

    .services-title {
      font-size: var(--desktop-titles);
      font-size: calc(var(--mobile-titles) + 10px);
    }
  }

  @media (min-width: 1600px) {
    height: 100vh;
  }

`

export const SectionSquares = styled.section `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

    div {
      border: none;
    }
  
  @media (min-width: 1650px) {
    div:nth-child(3n - 1) {
      border-left: 1px solid rgb(255, 255, 255, 0.3);
      border-image: linear-gradient( to bottom, rgb(255, 255, 255, 0.6), rgba(0, 0, 0, 0)) 30 100%;
    }

    div:nth-child(3n) {
      border-left: 1px solid rgb(255, 255, 255, 0.3);
      border-image: linear-gradient( to bottom, rgb(255, 255, 255, 0.6), rgba(0, 0, 0, 0)) 30 100%;
    }

    div:nth-child(3) {
      border-left: 1px solid rgb(255, 255, 255, 0.3);
      border-image: linear-gradient( to top, rgb(255, 255, 255, 0.6), rgba(0, 0, 0, 0)) 30 100%;
    }

    div:nth-child(2) {
      border-left: 1px solid rgb(255, 255, 255, 0.3);
      border-image: linear-gradient( to top, rgb(255, 255, 255, 0.6), rgba(0, 0, 0, 0)) 30 100%;
    }
  }
`

export const DivEachSquareOfMyService = styled.div `
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  svg {
    margin: 10px;
  }

  h1 {
    color: white;
    font-size: 18px;
  }

  hr {
    width: 80px;
    height: 1px;
    background-color: white;
  }

  p {
    text-align: center;
    width: 350px;
    height: 60px;
    font-size: 13px;
    color: white;
  }

  @media (min-width: 768px) {
    width: 550px;
  }
`

export const ThirdArticle = styled.article<TransitionProp> `
  width: 100%;
  height: auto;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: .5s;
  
  @media (min-width: 768px) {
    height: 180vh;
    padding: 30px 0 100px 0;
  }

  @media (min-width: 1500px) {
    height: 100vh;
  }

  h1, .img-one, .img-two {
    opacity: ${({inScreen}) => inScreen ? '1' : '0'};
  }

  h1 {
    transition-duration: 1s;
    transition-delay: 1s;
  }

  .img-one {
    transition-duration: 1s;
    transition-delay: 1.3s;
    transform: scale(${({inScreen}) => inScreen ? '1' : '0.96'});
  } 

  .img-two {
    transition-duration: 1s;
    transition-delay: 1.5s;
    transform: scale(${({inScreen}) => inScreen ? '1' : '0.96'});
  }
` 

export const AuxPosition = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: calc(var(--mobile-titles) - 5px);
    font-weight: 100;
  }

  @media (min-width: 768px) {
    align-items: unset;

    h1 {
      width: 30%;
      margin-left: 14%;
      font-size: calc(var(--desktop-titles) + 10px);
      margin-top: 45px;
    }
  }
`

export const SectionImg = styled.section `
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const DivOutImg = styled.div `
  width: 350px;
  height: 216px;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 715px;
    height: 457px;
  }
`

export const FirstDivImgIn = styled.div `
  width: 100%;
  height: 100%;
  background-image: url(${DoIt});
  background-position: center;
  background-size: cover;
  transition: 0.5s;
  cursor: pointer;

  .cover {
    position: relative;
    width: 100%;
    height: 100%;
    visibility: hidden;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover-child {
    visibility: hidden;
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:hover .cover-child {
    visibility: visible;
  }
  &:hover .cover {
    background-color: rgba(255, 255, 255, 0.61);
    visibility: visible;
  }


  @media (min-width: 768px) {
    .cover-child {
      font-size: unset;
    }
  }
`

export const SecondDivImgIn = styled.div `
  width: 100%;
  height: 100%;
  background-image: url(${TestImage});
  background-position: center center;
  background-size: cover;
  transition: 0.5s;
  cursor: pointer;

  .cover {
    position: relative;
    width: 100%;
    height: 100%;
    visibility: hidden;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cover-child {
    visibility: hidden;
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:hover .cover-child {
    visibility: visible;
  }
  &:hover .cover {
    background-color: rgba(255, 255, 255, 0.61);
    visibility: visible;
  }

  @media (min-width: 768px) {
    .cover-child {
      font-size: unset;
    }
  }
`

export const Footer = styled.footer `
  height: auto;
  width: 100%;
  background-color: var(--custom-black);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SendMeAMessage = styled.section `
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    color: white;
    font-size: 40px;
    font-weight: 200;
  }

  .send-me-field {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 70%;
    width: 80%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 60vh;

    h1 {
      font-size: calc(var(--desktop-titles) - 15px);
      margin-bottom: 60px;
    }

    .send-me-field {
      width: 50%;
      height: 70%;
    }
  }
`

export const DivInputs = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
  height: 60px;

  @media (min-width: 768px) {
    width: 465px;
  }
`

export const StyledTextField = styled.input `
  background-color: rgb(255, 255, 255, 0);
  width: 100%;
  color: white;
  border: none;
  font-weight: 300;
  border-bottom: 1px solid white;
  margin-top: 10px;
  font-size: 17px;

  &:focus {
    outline: none;
  }
`

export const ButtonSend = styled.button `
  border: none;
  width: 260px;
  background-color: white;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: .3s;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 465px;
  }
`

export const SectionFooterIcons = styled.section `
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
`