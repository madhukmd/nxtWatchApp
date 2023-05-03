import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 80px;
  //   border-bottom: 1px solid #909090;
  background-color: ${props => {
    switch (props.theme) {
      case true:
        return '#181818'
      default:
        return '#ffffff'
    }
  }};
  @media screen and (max-width: 566px) {
    height: 60px;
  }
`
export const WebsiteLogo = styled.img`
  width: 200px;
  height: 45px;
  border: 1px solid red;
  @media screen and (max-width: 566px) {
    width: 130px;
    height: 35px;
  }
`
export const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 566px) {
    display: none;
  }
`
export const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 567px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 33px;
  width: 33px;
  margin-left: 20px;
`
export const ThemeButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
  color: ${props => (props.iconColor ? '#ffffff' : '#000000')};
`
export const LogoutButton = styled.button`
  border: 2px solid ${props => (props.iconColor ? '#ffffff' : '#00306e')};
  color: ${props => (props.iconColor ? '#ffffff' : '#00306e')};
  outline: none;
  background-color: transparent;
  padding: 8px 18px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 20px;
`
export const LogoutIcon = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${props => (props.logoutIcon ? '#ffffff' : '#000000')};
`
export const HamburgerIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${props => (props.haMColor ? '#ffffff' : '#000000')};
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
  padding: 20px;
  border-radius: 5px;
  color: ${props => (props.bgColor ? '#ffffff' : '')};
`
export const ModalHeading = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 5px;
`

export const ButtonsContainer = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
`
export const CloseButton = styled.button`
  border: 2px solid ${props => (props.buttonColor ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.buttonColor ? '#ffffff' : '#4f46e5')};
  outline: none;
  background-color: transparent;
  padding: 6px 16px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  margin: 10px;
`
export const ConfirmButton = styled.button`
  border: 2px solid #4f46e5;
  color: #ffffff;
  outline: none;
  background-color: #4f46e5;
  padding: 6px 16px;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  margin: 5px;
`

export const NavbarContainerList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.navbg === 'true' ? '#181818' : '#ffffff'};
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`
export const NavbarDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  flex-grow: 1;
  margin-top: -16px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavbarMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  padding: 20px;
  margin: 0;
  margin-right: 20px;
  width: 100%;
  background-color: ${props =>
    props.navcolor === 'true' ? '#181818' : '#ffffff'};
  color: ${props => (props.navcolor === 'true' ? '#f9f9f9' : '#231f20')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.navcolor === 'true' ? '#f9f9f9' : '#231f20')};
`

export const HamNavListContainer = styled.ul`
  padding: 0;
  list-style: none;
`
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 20px;

  background-color: ${props => props.active};
  cursor: pointer;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  margin: 10px;
  margin-left: 10px;
`
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  color: ${props => (props.navcolor === 'true' ? '#f9f9f9' : '#231f20')};
`
export const ContactsUs = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 900;
`
export const ContactIcons = styled.div``
export const ContactImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  font-family: 'Roboto'
  font-size: 16px;
`
export const Cont = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props =>
    props.hambg === 'true' ? '#000000' : '#ffffff'};
`
export const CrossButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 30px;
  right: 30px;
`
