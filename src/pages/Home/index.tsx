import * as S                                                                 from './styles'
import AboutMeImg                                                             from '../../assets/oliver-pecker-HONJP8DyiSM-unsplash.jpg'
import { FaWhatsappSquare as WhatsAppIcon, FaRegHandshake as HandshakeIcon }  from 'react-icons/fa'
import { AiFillLinkedin as LinkedinIcon, AiFillGithub as GitHubIcon }         from 'react-icons/ai'
import { AiFillGitlab as GitLabIcon, AiOutlineMobile as MobileIcon }          from 'react-icons/ai'
import { SiMinutemailer as EmailIcon, SiWebstorm as WebstormIcon }            from 'react-icons/si'
import { SiServerfault as SeverIcon, SiMaterialdesign as MaterialdesignIcon } from 'react-icons/si'
import { IoLaptopOutline as LaptopIcon }                                      from 'react-icons/io5'
import { BiSearchAlt as SearchIcon }                                          from 'react-icons/bi'
import { Nav }                                                                from '../../components/NavDeskMob'
import { useEffect, useState }                                                from 'react'
import DoIt                                                                   from '../../assets/do-it.png'
import Tasky                                                                  from '../../assets/Tasky.png'
import Phoneshop                                                              from '../../assets/Phoneshop.png'
import CapStore                                                               from '../../assets/CapStore.png'
import { useLanguage }                                                        from '../../provider/language'

interface MyServicesObject {
  title: string,
  icon: ({}: object) => void,
  description: string
}

export const Home = () => {

  const { languageText } = useLanguage()
  
  const [firstArticleIntersection, setfirstArticleIntersection]   = useState<boolean>(false)
  const [secondArticleIntersection, setSecondArticleIntersection] = useState<boolean>(false)
  const [thirdArticleIntersection, setThirdArticleIntersection]   = useState<boolean>(false)
  const [sendEmailLib, setSendEmailLib]                           = useState<any>(null)
  const [statusSending, setStatusSending]                         = useState<string>('null')

  const ContactMe = {
    'name': '',
    'email': '',
    'message': '',
  }

  const getEmailObjFromWindowObj = () => {
    for (let key in window) {
      key == 'Email' && setSendEmailLib(window[key])
    }
  }

  const sendEmail = () => {
    setStatusSending('sending')
    sendEmailLib.send({
      'Host': 'smtp-mail.outlook.com',
      'Username': 'uiemi@hotmail.com',
      'Password': 'Abc:123456%',
      'To': 'developer.henderson@gmail.com',
      'From': 'uiemi@hotmail.com',
      'Subject': 'EMAIL FROM PORTIFOLIO PAGE',
      'Body': `\nName: ${ContactMe.name}; \nEmail: ${ContactMe.email}; \nMessage: ${ContactMe.message}`
    })
    .then(() => {
        setStatusSending('sent')
        setTimeout(() => setStatusSending('finalize-box'), 5000)
      }
    )
    .catch(() => {
        setStatusSending('error')
        setTimeout(() => setStatusSending('finalize-box'), 8000)
      }
    )
  }

  const sendMessageBox = () => {
    if (statusSending === 'sending') return languageText.popUpSendingMsg.sending
    if (statusSending === 'sent') return languageText.popUpSendingMsg.sent
    if (statusSending === 'error') return languageText.popUpSendingMsg.error
    if (statusSending === 'finalize-box') return languageText.popUpSendingMsg.finalizeBox
  }

  const sectionsOnScreeObserve = () => {
    
  	const option = {
      root: document.body,
      rootMargin: '0px',
      threshold: 0.05
  	}
  
  	const sections = document.getElementsByClassName('intersection')

    const sectionsArray = Object.values(sections)

    sectionsArray.forEach( 
    
      (HTMLelement) => { 
      
        const CallbackIntersection = (elementEvent: any[]) => {

          const isIntersectingEvent = elementEvent[0].isIntersecting

          const intersectedElementID = elementEvent[0].target.id

          switch (intersectedElementID) {

            case 'about-me':
              isIntersectingEvent && setfirstArticleIntersection(true)
              break

            case 'services':
              isIntersectingEvent && setSecondArticleIntersection(true)
              break
              
            case 'projects':
              isIntersectingEvent && setThirdArticleIntersection(true)
              break
          }
        }
      
        const observe = new IntersectionObserver(CallbackIntersection, option)
              observe.observe(HTMLelement)
      } 
    )
  }
  


  const SectionMyServicesObj: MyServicesObject[] = [
    { 'title': languageText.secondArticle.subtitle1,  'icon': WebstormIcon,        'description': languageText.secondArticle.description1},
    { 'title': languageText.secondArticle.subtitle2,  'icon': LaptopIcon,          'description': languageText.secondArticle.description2},
    { 'title': languageText.secondArticle.subtitle3,  'icon': MobileIcon,          'description': languageText.secondArticle.description3},
    { 'title': languageText.secondArticle.subtitle4,  'icon': SeverIcon,           'description': languageText.secondArticle.description4},
    { 'title': languageText.secondArticle.subtitle5,  'icon': MaterialdesignIcon,  'description': languageText.secondArticle.description5},
    { 'title': languageText.secondArticle.subtitle6,  'icon': HandshakeIcon,       'description': languageText.secondArticle.description6},
  ]

  const printSectionMyServicesObj = ({title, icon, description}: MyServicesObject, index: number) => {

    const size = 100

    const color = 'white'

    return (
      <S.DivEachSquareOfMyService className={`service${index} transition-services`} key={index} >
        {icon({size, color})}
        <h1>{title}</h1>
        <p>{description}</p>
      </S.DivEachSquareOfMyService>
    )
  }

  useEffect(() => sectionsOnScreeObserve())

  useEffect(() => getEmailObjFromWindowObj())


  return (
    <S.MainDiv>
      <S.Header>
        <Nav />
        <S.DivTitle>
          <h1>{languageText.header.title}<span>{languageText.header.emphasisWord}</span></h1>
          <h4>{languageText.header.subTitle}</h4>
        </S.DivTitle>
      </S.Header>
      {/* <S.Main> */}
        <S.FirstArticle id='about-me' className='intersection' inScreen={firstArticleIntersection} >
          <S.DivSections>
            <section className='about-title' >
              <h1>{languageText.firstArticle.title}</h1>
            </section>
            <section className='about-txt' >
              <p>{languageText.firstArticle.firstParagraph}</p>
              <p>{languageText.firstArticle.SecondParagraph}</p>
              <p>{languageText.firstArticle.thirdParagraph}</p>
              <p>{languageText.firstArticle.fouthParagraph}</p>
            </section>
            <section className='third-section about-adress' >
              <div>
                <p> <strong>{languageText.firstArticle.contact.name}</strong>: {languageText.firstArticle.contact.nameTxt}</p>
                <p> <strong>{languageText.firstArticle.contact.email}</strong>: {languageText.firstArticle.contact.emailTxt}</p>
              </div>
              <div>
                <p> <strong>{languageText.firstArticle.contact.location}</strong>: {languageText.firstArticle.contact.locationTxt} </p>
                <p> <strong>{languageText.firstArticle.contact.phone}</strong>: {languageText.firstArticle.contact.phoneTxt}</p>
              </div>
            </section>
            <section className='last-section ' >
              <section className='icons-section about-icons' >
              <a target='blank' href='https://wa.link/hi72rc' >                                                           <WhatsAppIcon color='black' size='40' /></a>
              <a target='blank' href='www.linkedin.com/in/dev-henderson-fernandes-pereira' > <LinkedinIcon color='black' size='40' /></a>
              <a target='blank' href='#contact-me' >                                         <EmailIcon    color='black' size='40' /></a>
              <a target='blank' href='https://github.com/Hender-hs' >                        <GitHubIcon   color='black' size='40' /></a>
              <a target='blank' href='https://gitlab.com/Hender-hs' >                        <GitLabIcon   color='black' size='40' /></a>
              </section>
              <section className='about-cv' >
                <a href='https://drive.google.com/file/d/1UJpnr9N-7ixp8PklP_987KQ-traoZsrd/view?usp=sharing' target='blank'><S.Button>{languageText.firstArticle.buttonCV}</S.Button></a>
              </section>
            </section>
          </S.DivSections>
          <figure>
            <S.Img src={AboutMeImg} alt='Workspace Image' className='about-image' />
          </figure>
        </S.FirstArticle>
        <S.SecondArticle id='services' className='intersection' inScreen={secondArticleIntersection} >
          <section id='servicesTitle'  >
            <h1 className='services-title' >{languageText.secondArticle.title}</h1>
          </section>
          <S.SectionSquares className='sections-services' >
            { SectionMyServicesObj.map(printSectionMyServicesObj) }
          </S.SectionSquares>
        </S.SecondArticle>
        <S.ThirdArticle id='projects' className='intersection' inScreen={thirdArticleIntersection} >
          <S.AuxPosition>
            <section id='projectsTitle' >
              <h1>{languageText.thirdArticle.title}</h1>
            </section>
            <S.SectionImg id='projectImgs'  >
              <a target='blanck' href='https://tasky-six.vercel.app/'>
                <S.DivOutImg className='img-one' >
                  <S.DivImgIn url={Tasky}>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >{languageText.thirdArticle.moreInfoProjects}</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>  
              <a target='blanck' href='https://do-it-two.vercel.app/'>
                <S.DivOutImg className='img-two' >
                  <S.DivImgIn url={DoIt} >
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >{languageText.thirdArticle.moreInfoProjects}</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>
              <a target='blanck' href='https://cap-store.vercel.app/'>
                <S.DivOutImg className='img-one' >
                  <S.DivImgIn url={CapStore}>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >{languageText.thirdArticle.moreInfoProjects}</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>
              <a target='blanck' href='https://phoneshop-eosin.vercel.app/'>
                <S.DivOutImg className='img-two' >
                  <S.DivImgIn url={Phoneshop}>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >{languageText.thirdArticle.moreInfoProjects}</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>
            </S.SectionImg>
          </S.AuxPosition>
        </S.ThirdArticle>
      {/* </S.Main> */}
      <S.Footer id='contact-me' >
        <S.BoxSendingStatus status={statusSending}><span>{sendMessageBox()}</span></S.BoxSendingStatus>
        <S.SendMeAMessage>
          <h1>{languageText.footer.title}</h1>
          <div className='send-me-field' >
            <S.DivInputs>
              <label>{languageText.footer.name}</label>
              <S.StyledTextField onChange={(event) => Object.defineProperty(ContactMe, 'name', { 'value': event.target.value, 'writable': true }) } />
            </S.DivInputs>
            <S.DivInputs>
              <label>{languageText.footer.email}</label>
              <S.StyledTextField onChange={(event) => Object.defineProperty(ContactMe, 'email', { 'value': event.target.value, 'writable': true }) } />
            </S.DivInputs>
            <S.DivInputs>
              <label>{languageText.footer.message}</label>
              <S.StyledTextField onChange={(event) => Object.defineProperty(ContactMe, 'message', { 'value': event.target.value, 'writable': true }) } />
            </S.DivInputs>
            <S.ButtonSend onClick={() => sendEmail()} >{languageText.footer.buttonSend}</S.ButtonSend>
          </div>
        </S.SendMeAMessage>
        <S.SectionFooterIcons className='icons-footer' >
              <a target='blank' href='https://wa.link/hi72rc' >                                                           <WhatsAppIcon color='white' size='40' /></a>
              <a target='blank' href='www.linkedin.com/in/dev-henderson-fernandes-pereira' > <LinkedinIcon color='white' size='40' /></a>
              <a target='blank' href='#contact-me' >                                         <EmailIcon    color='white' size='40' /></a>
              <a target='blank' href='https://github.com/Hender-hs' >                        <GitHubIcon   color='white' size='40' /></a>
              <a target='blank' href='https://gitlab.com/Hender-hs' >                        <GitLabIcon   color='white' size='40' /></a>
        </S.SectionFooterIcons>
      </S.Footer>
    </S.MainDiv>
  )
}