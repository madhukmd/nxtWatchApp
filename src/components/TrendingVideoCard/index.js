import ToggleContext from '../../context/ToggleContext'

import {
  TrendingsVideoListItem,
  TrendingsThumbNailImage,
  TrendingsSaveVideoDescription,
  TrendingsProfileImage,
  TrendingsVideoContent,
  TrendingsTitle,
  TrendingsChannelName,
  TrendingsViewsAndDate,
  TrendingsNavLink,
} from './styledComponents'

const TrendingVideoCard = props => {
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
          <TrendingsNavLink to={`/videos/${id}`}>
            <TrendingsVideoListItem>
              <TrendingsThumbNailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingsSaveVideoDescription>
                <TrendingsProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingsVideoContent>
                  <TrendingsTitle title={title} colorText={`${darkTheme}`}>
                    {title}
                  </TrendingsTitle>
                  <TrendingsChannelName nameText={`${darkTheme}`}>
                    {name}
                  </TrendingsChannelName>
                  <TrendingsViewsAndDate nameText={`${darkTheme}`}>
                    {viewCount} views &#8226; {publishedAt}
                  </TrendingsViewsAndDate>
                </TrendingsVideoContent>
              </TrendingsSaveVideoDescription>
            </TrendingsVideoListItem>
          </TrendingsNavLink>
        )
      }}
    </ToggleContext.Consumer>
  )
}
export default TrendingVideoCard
