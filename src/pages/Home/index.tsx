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

interface MyServicesObject {
  title: string,
  icon: ({}: object) => void,
  description: string
}

export const Home = () => {

  const [firstArticleIntersection, setfirstArticleIntersection]   = useState<boolean>(false)
  const [secondArticleIntersection, setSecondArticleIntersection] = useState<boolean>(false)
  const [thirdArticleIntersection, setThirdArticleIntersection]   = useState<boolean>(false)

  const sectionsOnScreeObserve = () => {
    
  	const option = {
      root: document.body,
      rootMargin: '0px',
      threshold: 0.6
  	}
  
  	const sections = document.getElementsByClassName('intersection')

    const sectionsArray = Object.values(sections)

    sectionsArray.forEach( 
    
      (HTMLelement) => { 
      
        const CallbackIntersection = (elementEvent: any[]) => {

          const isIntersectingEvent = elementEvent[0].isIntersecting

          const intersectedElementID = elementEvent[0].target.id

          switch (intersectedElementID) {

            case 'firstArticle':
              setfirstArticleIntersection(isIntersectingEvent)
              break

            case 'secondArticle':
              setSecondArticleIntersection(isIntersectingEvent)
              break
              
            case 'thirdArticle':
              setThirdArticleIntersection(isIntersectingEvent)
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
        <S.FirstArticle id='firstArticle' className='intersection' inScreen={firstArticleIntersection} >
          <S.DivSections>
            <section className='about-title' >
              <h1>About my Job</h1>
            </section>
            <section className='about-txt' >
              <p> I’m a profissional developer as front-end and back-end.  I live in Brazil, one of the most beatiful tropical countries. </p>
              <p> I create beatiful web sites using the most modern tecnologies and with excelent pratices to anyone can work out after the project built. </p>
              <p>I give some importance things to create one web site, like: create a excelent web site for anybody can access, accessibility; confortable layouts to make the clients and visitors feel in their home; simple things, eleagant and beatiful to create a good feeling when they’re using your web site. </p>
              <p>I came from the best actual programmer school in the world, Kenzie Academy.</p>
            </section>
            <section className='third-section about-adress' >
              <div>
                <p> <strong>Name</strong>: Henderson Fernandes Pereira </p>
                <p> <strong>Email</strong>: Henderson.F.P@hotmail.com </p>
              </div>
              <div>
                <p> <strong>Location</strong>: Brazil, Belo Horizonte </p>
                <p> <strong>Phone</strong>: (31) 9 8599-3183 </p>
              </div>
            </section>
            <section className='last-section ' >
              <section className='icons-section about-icons' >
                <WhatsAppIcon size='40' />
                <LinkedinIcon size='40' />
                <EmailIcon size='40' />
                <GitHubIcon size='40' />
                <GitLabIcon size='40' />
              </section>
              <section className='about-cv' >
                <S.Button>Download CV</S.Button>
              </section>
            </section>
          </S.DivSections>
          <figure>
            <S.Img src={AboutMeImg} alt='Workspace Image' className='about-image' />
          </figure>
        </S.FirstArticle>
        <S.SecondArticle id='secondArticle' className='intersection' inScreen={secondArticleIntersection} >
          <section id='servicesTitle'  >
            <h1 className='services-title' >My Services</h1>
          </section>
          <S.SectionSquares className='sections-services' >
            { SectionMyServicesObj.map(printSectionMyServicesObj) }
          </S.SectionSquares>
        </S.SecondArticle>
        <S.ThirdArticle id='thirdArticle' className='intersection' inScreen={thirdArticleIntersection} >
          <S.AuxPosition>
            <section id='projectsTitle' >
              <h1>My Favorite Projects</h1>
            </section>
            <S.SectionImg id='projectImgs'  >
                <S.DivOutImg className='img-one' >
                  <S.FirstDivImgIn>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
                    </div>
                  </S.FirstDivImgIn>
                </S.DivOutImg>
                <S.DivOutImg className='img-two' >
                  <S.SecondDivImgIn>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
                    </div>
                  </S.SecondDivImgIn>
                </S.DivOutImg>
            </S.SectionImg>
          </S.AuxPosition>
        </S.ThirdArticle>
      {/* </S.Main> */}
      <S.Footer>
        <S.SendMeAMessage>
          <h1>Contact Me</h1>
          <div className='send-me-field' >
            <S.DivInputs>
              <label>Name</label>
              <S.StyledTextField/>
            </S.DivInputs>
            <S.DivInputs>
              <label>Email</label>
              <S.StyledTextField/>
            </S.DivInputs>
            <S.DivInputs>
              <label>Message</label>
              <S.StyledTextField/>
            </S.DivInputs>
            <S.ButtonSend>Send</S.ButtonSend>
          </div>
        </S.SendMeAMessage>
        <S.SectionFooterIcons className='icons-footer' >
              <WhatsAppIcon color='white' size='40' />
              <LinkedinIcon color='white' size='40' />
              <EmailIcon    color='white' size='40' />
              <GitHubIcon   color='white' size='40' />
              <GitLabIcon   color='white' size='40' />
        </S.SectionFooterIcons>
      </S.Footer>
    </S.MainDiv>
  )
}