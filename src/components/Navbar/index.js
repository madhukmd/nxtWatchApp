import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ToggleContext from '../../context/ToggleContext'

import {
  NavbarContainerList,
  NavbarDesktopContainer,
  NavListContainer,
  NavItem,
  NavText,
  ContactsContainer,
  ContactsUs,
  ContactIcons,
  ContactImage,
  ContactDescription,
  NavbarMobileContainer,
  NavLink,
} from './styledComponents'

const Navbar = () => (
  <ToggleContext.Consumer>
    {value => {
      const {darkTheme, activeTab, changeTab} = value
      const activeBg = darkTheme ? '#475569' : '#cbd5e1'

      const onClickHomeTab = () => {
        changeTab('Home')
      }
      const onClickTrendingTab = () => {
        changeTab('Trending')
      }
      const onClickGamingTab = () => {
        changeTab('Gaming')
      }
      const onClickSavedTab = () => {
        changeTab('Saved Videos')
      }

      return (
        <NavbarContainerList navbg={`${darkTheme}`}>
          <NavbarDesktopContainer>
            <NavListContainer>
              <NavLink to="/" navcolor={`${darkTheme}`}>
                <NavItem
                  key="Home"
                  onClick={onClickHomeTab}
                  active={activeTab === 'Home' ? activeBg : ''}
                >
                  <AiFillHome
                    size={28}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText>Home</NavText>
                </NavItem>
              </NavLink>
              <NavLink to="/trending" navcolor={`${darkTheme}`}>
                <NavItem
                  key="Trending"
                  onClick={onClickTrendingTab}
                  active={activeTab === 'Trending' ? activeBg : ''}
                >
                  <HiFire
                    size={28}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText>Trending</NavText>
                </NavItem>
              </NavLink>
              <NavLink to="/gaming" navcolor={`${darkTheme}`}>
                <NavItem
                  key="Gaming"
                  onClick={onClickGamingTab}
                  active={activeTab === 'Gaming' ? activeBg : ''}
                >
                  <SiYoutubegaming
                    size={28}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText>Gaming</NavText>
                </NavItem>
              </NavLink>
              <NavLink to="/saved-videos" navcolor={`${darkTheme}`}>
                <NavItem
                  key="Saved Videos"
                  onClick={onClickSavedTab}
                  active={activeTab === 'Saved Videos' ? activeBg : ''}
                >
                  <CgPlayListAdd
                    size={28}
                    color={activeTab === 'Saved Videos' ? '#ff0b37' : '#909090'}
                  />
                  <NavText>Saved Videos</NavText>
                </NavItem>
              </NavLink>
            </NavListContainer>
            <ContactsContainer navcolor={`${darkTheme}`}>
              <ContactsUs>Contact Us</ContactsUs>
              <ContactIcons>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
                <ContactDescription>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactIcons>
            </ContactsContainer>
          </NavbarDesktopContainer>
          <NavbarMobileContainer navcolor={`${darkTheme}`}>
            <NavLink to="/" navcolor={`${darkTheme}`}>
              <AiFillHome
                size={27}
                onClick={onClickHomeTab}
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/trending" navcolor={`${darkTheme}`}>
              <HiFire
                size={27}
                onClick={onClickTrendingTab}
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/gaming" navcolor={`${darkTheme}`}>
              <SiYoutubegaming
                size={27}
                onClick={onClickGamingTab}
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/saved-videos" navcolor={`${darkTheme}`}>
              <CgPlayListAdd
                size={27}
                onClick={onClickSavedTab}
                color={activeTab === 'Saved Videos' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
          </NavbarMobileContainer>
        </NavbarContainerList>
      )
    }}
  </ToggleContext.Consumer>
)

export default Navbar
