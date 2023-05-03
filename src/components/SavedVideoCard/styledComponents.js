import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SaveVideoListItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`

export const ThumbNailImage = styled.img`
  width: 325px;
  border-radius: 6px;
  @media screen and (max-width: 567px) {
    width: 100%;
  }
`

export const SaveVideoDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 20px;
  @media screen and (max-width: 567px) {
    padding-left: 0;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 10px;
  margin-top: 20px;
  margin-left: 0;
  @media screen and (min-width: 568px) {
    display: none;
  }
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 50px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-height: 1.2;
  color: ${props => (props.colorText === 'true' ? '#f1f1f1' : '#231f20')};
  font-weight: 500;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 6px;
  margin-bottom: 6px;
  color: ${props => (props.nameText === 'true' ? '#94a3b8' : '#231f20')};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0;
  color: ${props => (props.nameText === 'true' ? '#94a3b8' : '#231f20')};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
