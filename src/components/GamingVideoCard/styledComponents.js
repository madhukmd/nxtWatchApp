import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingNavLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 190px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 466px) {
    width: 140px;
  }
`
export const GamingThumbNailImage = styled.img`
  width: 100%;
  border-radius: 6px;
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
`
export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-height: 1.5;
  color: ${props => (props.gametitle === 'true' ? '#f9f9f9' : '#231f20')};
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 10px;
`
export const GamingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0;
  color: ${props => (props.gamingdate === 'true' ? '#94a3b8' : '#231f20')};
`
