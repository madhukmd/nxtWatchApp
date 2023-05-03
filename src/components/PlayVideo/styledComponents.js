import styled from 'styled-components'

export const VideoPlayContainer = styled.div``
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.titleColor};
`
export const VideoContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`

export const VideoViewsContainer = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.textColor};
`
export const VideoButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const CustomButton = styled.div`
  display: flex;
`
export const ActionButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.IconColor};
  cursor: pointer;
`
export const ButtonText = styled.span`
  margin-left: 5px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.buttoncolor};
`
export const ButtonTextSpan = styled.span`
  margin-left: 5px;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  color: ${props => props.IconColor};
`
export const VideoChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 0;
  margin-right: 20px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`
export const ChannelNameText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 2px;
  margin-bottom: 3px;
  color: ${props => props.channelName};
`
export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-bottom: 20px;
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.desColor};
  @media screen and (max-width: 566px) {
    display: none;
  }
`
export const ChannelDescriptionS = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.desColor};
  @media screen and (min-width: 567px) {
    display: none;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`
