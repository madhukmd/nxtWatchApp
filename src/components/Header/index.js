import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ToggleContext from '../../context/ToggleContext'

import {
  NavBarContainer,
  DesktopContainer,
  WebsiteLogo,
  ProfileImage,
  ThemeButton,
  LogoutButton,
  ModalContainer,
  ModalHeading,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  MobileContainer,
  LogoutIcon,
  HamburgerIcon,
  Cont,
  HamNavListContainer,
  NavLink,
  NavItem,
  NavText,
  CrossButton,
} from './styledComponents'

const overlayStyle = {background: 'rgba(0,0,0,0.5)'}

const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => (
  <ToggleContext.Consumer>
    {value => {
      const {activeTab, darkTheme, toggleTheme, changeTab} = value
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

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavBarContainer theme={darkTheme}>
          <Link to="/">
            <WebsiteLogo
              src={darkTheme ? darkThemeLogo : lightThemeLogo}
              alt="website logo"
            />
          </Link>
          <DesktopContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
              iconColor={darkTheme}
              title="change Theme"
            >
              {darkTheme ? (
                <BsBrightnessHigh size={33} />
              ) : (
                <BsMoon size={33} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              {...{overlayStyle}}
              trigger={
                <LogoutButton type="button" iconColor={darkTheme}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={darkTheme}>
                  <ModalHeading>Are you sure, you want to logout?</ModalHeading>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      buttonColor={darkTheme}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </DesktopContainer>
          <MobileContainer>
            <ThemeButton
              type="button"
              iconColor={darkTheme}
              onClick={onChangeTheme}
            >
              <BsBrightnessHigh size={25} />
            </ThemeButton>

            <Popup
              modal
              trigger={
                <HamburgerIcon haMColor={darkTheme}>
                  <GiHamburgerMenu size={25} />
                </HamburgerIcon>
              }
            >
              {close => (
                <>
                  <Cont hambg={`${darkTheme}`}>
                    <CrossButton type="button" onClick={() => close()}>
                      &#10006;
                    </CrossButton>
                    <HamNavListContainer>
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
                            color={
                              activeTab === 'Trending' ? '#ff0b37' : '#909090'
                            }
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
                            color={
                              activeTab === 'Gaming' ? '#ff0b37' : '#909090'
                            }
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
                            color={
                              activeTab === 'Saved Videos'
                                ? '#ff0b37'
                                : '#909090'
                            }
                          />
                          <NavText>Saved Videos</NavText>
                        </NavItem>
                      </NavLink>
                    </HamNavListContainer>
                  </Cont>
                </>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIcon type="button" logoutIcon={darkTheme}>
                  <FiLogOut size={25} />
                </LogoutIcon>
              }
            >
              {close => (
                <ModalContainer bgColor={darkTheme}>
                  <ModalHeading>Are you sure, you want to logout?</ModalHeading>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="closeButton"
                      onClick={() => close()}
                      buttonColor={darkTheme}
                    >
                      Cancel
                    </CloseButton>

                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </MobileContainer>
        </NavBarContainer>
      )
    }}
  </ToggleContext.Consumer>
)
export default withRouter(Header)
