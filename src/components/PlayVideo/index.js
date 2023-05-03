import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ToggleContext from '../../context/ToggleContext'

import {
  VideoPlayContainer,
  VideoTitle,
  VideoContentContainer,
  VideoViewsContainer,
  VideoButtonsContainer,
  CustomButton,
  ActionButton,
  ButtonText,
  VideoChannelContainer,
  ChannelImage,
  ChannelContainer,
  ChannelNameText,
  ChannelSubscribers,
  ChannelDescription,
  ChannelDescriptionS,
  ButtonTextSpan,
} from './styledComponents'

const PlayVideo = props => {
  const {videoDetails, isLiked, isDisLiked, renderLiked, renderDisliked} = props

  const Like = () => {
    renderLiked()
  }

  const DisLike = () => {
    renderDisliked()
  }

  return (
    <ToggleContext.Consumer>
      {value => {
        const {darkTheme, addVideo, savedVideos} = value
        const titleColor = darkTheme ? '#ffffff' : '#181818'
        const textColor = darkTheme ? '#64748b' : '#231f20'
        const channelName = darkTheme ? '#ffffff' : '#181818'
        const desColor = darkTheme ? '#ffffff' : '#64748b'
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'
        let isSaved

        const status = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (status === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saved = isSaved ? '#2563eb' : '#64748b'

        const Save = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayContainer>
            <ReactPlayer
              url={videoDetails.videoUrl}
              controls
              width="100%"
              height="var(--ht)"
            />
            <VideoTitle titleColor={titleColor}>
              {videoDetails.title}
            </VideoTitle>
            <VideoContentContainer>
              <VideoViewsContainer textColor={textColor}>
                {videoDetails.viewCount} views &#8226;
                {videoDetails.publishedAt}
              </VideoViewsContainer>
              <VideoButtonsContainer>
                <CustomButton>
                  <ActionButton type="button" onClick={Like}>
                    <AiOutlineLike color={likeIconColor} size={25} />
                    <ButtonTextSpan IconColor={likeIconColor}>
                      Like
                    </ButtonTextSpan>
                  </ActionButton>
                </CustomButton>
                <CustomButton>
                  <ActionButton type="button" onClick={DisLike}>
                    <AiOutlineDislike size={25} color={dislikeIconColor} />
                    <ButtonTextSpan IconColor={dislikeIconColor}>
                      Dislike
                    </ButtonTextSpan>
                  </ActionButton>
                </CustomButton>
                <CustomButton>
                  <ActionButton type="button" onClick={Save}>
                    <BiListPlus size={25} color={saved} />
                    <ButtonText buttoncolor={saved}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </ActionButton>
                </CustomButton>
              </VideoButtonsContainer>
            </VideoContentContainer>
            <hr style={{border: '1px solid #909090'}} />
            <VideoChannelContainer>
              <ChannelImage
                src={videoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelContainer>
                <ChannelNameText channelName={channelName}>
                  {videoDetails.name}
                </ChannelNameText>
                <ChannelSubscribers>
                  {videoDetails.subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription desColor={desColor}>
                  {videoDetails.description}
                </ChannelDescription>
              </ChannelContainer>
            </VideoChannelContainer>
            <ChannelDescriptionS desColor={desColor}>
              {videoDetails.description}
            </ChannelDescriptionS>
          </VideoPlayContainer>
        )
      }}
    </ToggleContext.Consumer>
  )
}

export default PlayVideo
