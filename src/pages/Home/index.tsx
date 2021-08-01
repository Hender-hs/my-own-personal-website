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


interface MyServicesObject {
  title: string,
  icon: ({}: object) => void,
  description: string
}

export const Home = () => {

  const SectionMyServicesObj: MyServicesObject[] = [
    { 'title': 'Front-end Development',  'icon': WebstormIcon,        'description': 'With languages as HTML, CSS, JavaScript, TypeScript and libs as ReactJS, I build greats web sites with the most modern tecnologies.'  },
    { 'title': 'Web Development',        'icon': LaptopIcon,          'description': 'Web development to Desktop web sites and mobile web sites.'                                                                           },
    { 'title': 'Mobile Development',     'icon': MobileIcon,          'description': 'Development to mobile applications with ReactJS Native'                                                                               },
    { 'title': 'Back-end Development',   'icon': SeverIcon,           'description': 'Building a complete system to your necessities and your buissines with the most modern languages and tecnologies avaible today.'      },
    { 'title': 'Design Development',     'icon': MaterialdesignIcon,  'description': 'A design to follow your buissines and your necessities. Made with your following desires'                                             },
    { 'title': 'My support',             'icon': HandshakeIcon,       'description': 'My whole support for everything, everytime and everywhere.'                                                                           },
  ]

  const printSectionMyServicesObj = ({title, icon, description}: MyServicesObject, index: number) => {
    console.log(icon({}))
    const size = 100
    const color = 'white'
    return (
      <S.DivEachSquareOfMyService key={index} >
        {icon({size, color})}
        <h1>{title}</h1>
        <p>{description}</p>
      </S.DivEachSquareOfMyService>
    )
  }

  return (
    <S.MainDiv>
      <S.Header>
        <Nav />
        <div className='div-cover' />
        <S.DivTitle>
          <h1>Hi. I'm Hende<span>rson</span></h1>
          <h4>A Full stack Web Developer</h4>
        </S.DivTitle>
      </S.Header>
      <S.Main>
        <S.FirstArticle>
          <S.DivSections>
            <section>
              <h1>About my Job</h1>
            </section>
            <section>
              <p> I’m a profissional developer as front-end and back-end.  I live in Brazil, one of the most beatiful tropical countries. </p>
              <p> I create beatiful web sites using the most modern tecnologies and with excelent pratices to anyone can work out after the project built. </p>
              <p>I give some importance things to create one web site, like: create a excelent web site for anybody can access, accessibility; confortable layouts to make the clients and visitors feel in their home; simple things, eleagant and beatiful to create a good feeling when they’re using your web site. </p>
              <p>I came from the best actual programmer school in the world, Kenzie Academy.</p>
            </section>
            <section className='third-section' >
              <div>
                <p> <strong>Name</strong>: Henderson Fernandes Pereira </p>
                <p> <strong>Email</strong>: Henderson.F.P@hotmail.com </p>
              </div>
              <div>
                <p> <strong>Location</strong>: Brazil, Belo Horizonte </p>
                <p> <strong>Phone</strong>: (31) 9 8599-3183 </p>
              </div>
            </section>
            <section className='last-section' >
              <section className='icons-section' >
                <WhatsAppIcon size='40' />
                <LinkedinIcon size='40' />
                <EmailIcon size='40' />
                <GitHubIcon size='40' />
                <GitLabIcon size='40' />
              </section>
              <section>
                <S.Button>Download CV</S.Button>
              </section>
            </section>
          </S.DivSections>
          <figure>
            <S.Img src={AboutMeImg} alt='Workspace Image' />
          </figure>
        </S.FirstArticle>
        <S.SecondArticle>
          <section>
            <h1 className='services-title' >My Services</h1>
          </section>
          <S.SectionSquares>
            { SectionMyServicesObj.map(printSectionMyServicesObj) }
          </S.SectionSquares>
        </S.SecondArticle>
        <S.ThirdArticle>
          <S.AuxPosition>
            <section>
              <h1>My Favorite Projects</h1>
            </section>
            <S.SectionImg>
                <S.DivOutImg>
                  <S.FirstDivImgIn>
                    <div className='cover' >
                      <SearchIcon className='cover-child' size='100' />
                      <h5 className='cover-child' >Click to know more about this project</h5>
                    </div>
                  </S.FirstDivImgIn>
                </S.DivOutImg>
                <S.DivOutImg>
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
      </S.Main>
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