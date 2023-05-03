import {Link} from 'react-router-dom'
import ToggleContext from '../../context/ToggleContext'
import './index.css'

import {
  SaveVideoListItem,
  ThumbNailImage,
  SaveVideoDescription,
  ProfileImage,
  VideoContent,
  Title,
  ChannelName,
  ViewsAndDate,
} from './styledComponents'

const SavedVideoCard = props => {
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
            <SaveVideoListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <SaveVideoDescription>
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
              </SaveVideoDescription>
            </SaveVideoListItem>
          </Link>
        )
      }}
    </ToggleContext.Consumer>
  )
}
export default SavedVideoCard
