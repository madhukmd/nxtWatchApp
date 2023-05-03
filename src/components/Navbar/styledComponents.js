import {Link} from 'react-router-dom'
import styled from 'styled-components'

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
export const NavbarMobileContainer = styled.nav`
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

export const NavListContainer = styled.ul`
  padding: 0;
  list-style: none;
  flex-grow: 1;
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
