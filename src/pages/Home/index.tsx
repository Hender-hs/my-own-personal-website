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


interface MyServicesObject {
  title: string,
  icon: ({}: object) => void,
  description: string
}

export const Home = () => {

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
    if (statusSending === 'sending') return 'Sending your message...'
    if (statusSending === 'sent') return 'Your message was sent!'
    if (statusSending === 'error') return 'Occurred a error, try again!'
    if (statusSending === 'finalize-box') return 'Your message was sent!'
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
    { 'title': 'Front-end Development',  'icon': WebstormIcon,        'description': 'With languages as HTML, CSS, JavaScript, TypeScript and libs as ReactJS, I build greats web sites with the most modern tecnologies.'  },
    { 'title': 'Web Development',        'icon': LaptopIcon,          'description': 'Web development to Desktop web sites and mobile web sites.'                                                                           },
    { 'title': 'Mobile Development',     'icon': MobileIcon,          'description': 'Development to mobile applications with ReactJS Native'                                                                               },
    { 'title': 'Back-end Development',   'icon': SeverIcon,           'description': 'Building a complete system to your necessities and your buissines with the most modern languages and tecnologies avaible today.'      },
    { 'title': 'Design Development',     'icon': MaterialdesignIcon,  'description': 'A design to follow your buissines and your necessities. Made with your following desires'                                             },
    { 'title': 'My support',             'icon': HandshakeIcon,       'description': 'My whole support for everything, everytime and everywhere.'                                                                           },
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
          <h1>Hi. I'm Hende<span>rson</span></h1>
          <h4>A Full stack Web Developer</h4>
        </S.DivTitle>
      </S.Header>
      {/* <S.Main> */}
        <S.FirstArticle id='about-me' className='intersection' inScreen={firstArticleIntersection} >
          <S.DivSections>
            <section className='about-title' >
              <h1>About my Job</h1>
            </section>
            <section className='about-txt' >
              <p> I’m a profissional developer as front-end and back-end.  I live in Brazil, one of the most beatiful tropical countries. </p>
              <p> I create beatiful web sites using the most modern tecnologies and with excelent pratices to anyone can work out after the project built. </p>
              <p>I pay attention for some important things to create one web site, like: create a excelent web site for anybody can access, accessibility; confortable layouts to make the clients and visitors feel in their home; simple things, eleagant and beatiful to create a good feeling when they’re using your web site. </p>
              <p>I came from one of the most current programmer school in the world, Kenzie Academy.</p>
            </section>
            <section className='third-section about-adress' >
              <div>
                <p> <strong>Name</strong>: Henderson Fernandes Pereira </p>
                <p> <strong>Email</strong>: Developer.henderson@gmail.com </p>
              </div>
              <div>
                <p> <strong>Location</strong>: Brazil, Belo Horizonte </p>
                <p> <strong>Phone</strong>: (31) 9 8599-3183 </p>
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
                <a href='
                https://doc-0k-9k-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/qj303hqev9ug20cfs0k2suf0cocemhgh/mq7druspqfhuvduffg70i7d0rm8foq5r/1628479800000/3/*/APznzabcskLwrZ1aHKXCV4rIXRRH_RW1l8wl9jDeyb71CKMCAePtp3zilpcKnjDMQqBrurzKzbkG75uw2-g-RAHJIqvxjZVosDvM239boLCC33qCoXMlSb_q7EpjL2jTtskt6UNyR2gK99D1QcfgZ9vCrjRKbn_5-fTmUuzyrzQEAiYpPn1kxQEo4wI3RJaNBt5wxV8RrZNjDEQLkkwx8ptKZ_kh3ixyV5v18KKmvhi4bPM8JWCRvThj30u0xpCyK_56jDx8zxPIo7ecgNYe8d-DfDMp34RnVVVMIR7q2p3vhVJyMSoJkEdj7_j2RffT8E4HG_hJhyVY24xgv9GquDHw4R2PBNlwiBRFN20KHCc-J8KTLGdNfCg=?nonce=d6ercpvkgqgvs&user=101207791202472601559&hash=20l0s2k6be4o86u6dba3eo7cn2td6p5k
                ' target='blank'><S.Button>See My Resume</S.Button></a>
              </section>
            </section>
          </S.DivSections>
          <figure>
            <S.Img src={AboutMeImg} alt='Workspace Image' className='about-image' />
          </figure>
        </S.FirstArticle>
        <S.SecondArticle id='services' className='intersection' inScreen={secondArticleIntersection} >
          <section id='servicesTitle'  >
            <h1 className='services-title' >My Services</h1>
          </section>
          <S.SectionSquares className='sections-services' >
            { SectionMyServicesObj.map(printSectionMyServicesObj) }
          </S.SectionSquares>
        </S.SecondArticle>
        <S.ThirdArticle id='projects' className='intersection' inScreen={thirdArticleIntersection} >
          <S.AuxPosition>
            <section id='projectsTitle' >
              <h1>My Favorite Projects</h1>
            </section>
            <S.SectionImg id='projectImgs'  >
              <a target='blanck' href='https://tasky-six.vercel.app/'>
                <S.DivOutImg className='img-one' >
                  <S.DivImgIn url={Tasky}>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>  
              <a target='blanck' href='https://do-it-two.vercel.app/'>
                <S.DivOutImg className='img-two' >
                  <S.DivImgIn url={DoIt} >
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>
              <a target='blanck' href='https://cap-store.vercel.app/'>
                <S.DivOutImg className='img-one' >
                  <S.DivImgIn url={CapStore}>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
                    </div>
                  </S.DivImgIn>
                </S.DivOutImg>
              </a>
              <a target='blanck' href='https://phoneshop-eosin.vercel.app/'>
                <S.DivOutImg className='img-two' >
                  <S.DivImgIn url={Phoneshop}>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
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
          <h1>Contact Me</h1>
          <div className='send-me-field' >
            <S.DivInputs>
              <label>Name</label>
              <S.StyledTextField onChange={(event) => Object.defineProperty(ContactMe, 'name', { 'value': event.target.value, 'writable': true }) } />
            </S.DivInputs>
            <S.DivInputs>
              <label>Email</label>
              <S.StyledTextField onChange={(event) => Object.defineProperty(ContactMe, 'email', { 'value': event.target.value, 'writable': true }) } />
            </S.DivInputs>
            <S.DivInputs>
              <label>Message</label>
              <S.StyledTextField onChange={(event) => Object.defineProperty(ContactMe, 'message', { 'value': event.target.value, 'writable': true }) } />
            </S.DivInputs>
            <S.ButtonSend onClick={() => sendEmail()} >Send</S.ButtonSend>
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