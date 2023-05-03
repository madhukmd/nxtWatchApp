import {Link} from 'react-router-dom'
import ToggleContext from '../../context/ToggleContext'

import './index.css'

import {
  VideoListItem,
  ThumbNailImage,
  VideoDescription,
  ProfileImage,
  VideoContent,
  Title,
  ChannelName,
  ViewsAndDate,
} from './styledComponents'

const VideoCard = props => {
  const {eachVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = eachVideo
  return (
    <ToggleContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <Link to={`/videos/${id}`} className="linkItem">
            <VideoListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescription>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <Title title={title} colorText={`${darkTheme}`}>
                    {title}
                  </Title>
                  <ChannelName nameText={`${darkTheme}`}>{name}</ChannelName>
                  <ViewsAndDate nameText={`${darkTheme}`}>
                    {viewCount} views &#8226; {publishedAt}
                  </ViewsAndDate>
                </VideoContent>
              </VideoDescription>
            </VideoListItem>
          </Link>
        )
      }}
    </ToggleContext.Consumer>
  )
}
export default VideoCard
