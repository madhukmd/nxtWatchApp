import ToggleContext from '../../context/ToggleContext'

import {
  GamingListItemContainer,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
  GamingNavLink,
} from './styledComponents'

const GamingVideoCard = props => {
  const {eachVideo} = props
  const {id, title, thumbnailUrl, viewCount} = eachVideo

  return (
    <ToggleContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <GamingNavLink to={`/videos/${id}`}>
            <GamingListItemContainer>
              <GamingThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle gametitle={`${darkTheme}`}>{title}</GamingTitle>
                <GamingViewsAndDate gamingdate={`${darkTheme}`}>
                  {viewCount} Watching Worldwide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItemContainer>
          </GamingNavLink>
        )
      }}
    </ToggleContext.Consumer>
  )
}

export default GamingVideoCard
