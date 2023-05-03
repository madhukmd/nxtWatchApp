import {Component} from 'react'

import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import Navbar from '../Navbar'
import SavedVideoCard from '../SavedVideoCard'
import ToggleContext from '../../context/ToggleContext'

import {
  AppContainer,
  ResponsiveContainer,
  SavedVideosContainer,
  SavedVideosItems,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
  SaveVideosHeadingContainer,
  TitleIconContainer,
  SavedHeading,
} from './styledComponents'

const noSavedVideosImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

class SavedVideos extends Component {
  render() {
    return (
      <ToggleContext.Consumer>
        {value => {
          const {darkTheme, savedVideos} = value
          const textColor = darkTheme ? '#f9f9f9' : '#231f20'

          const status = savedVideos.length
          return (
            <>
              <AppContainer>
                <Header />
                <ResponsiveContainer>
                  <Navbar />
                  <SavedVideosContainer
                    data-testid="savedVideos"
                    saveVideoBg={`${darkTheme}`}
                  >
                    <SaveVideosHeadingContainer trendbg={`${darkTheme}`}>
                      <TitleIconContainer iconcolor={`${darkTheme}`}>
                        <CgPlayListAdd size={35} color="#ff0000" />
                      </TitleIconContainer>
                      <SavedHeading color={textColor}>
                        Saved Videos
                      </SavedHeading>
                    </SaveVideosHeadingContainer>
                    <SavedVideosItems>
                      {status > 0 ? (
                        <>
                          {savedVideos.map(eachItem => (
                            <SavedVideoCard
                              eachVideo={eachItem}
                              key={eachItem.id}
                            />
                          ))}
                        </>
                      ) : (
                        <NoSavedVideosContainer>
                          <NoSavedVideosImage
                            src={noSavedVideosImage}
                            alt="no saved videos"
                          />
                          <NoSavedVideosHeading headingColor={`${darkTheme}`}>
                            No saved videos found
                          </NoSavedVideosHeading>
                          <NoSavedVideosText TextColor={`${darkTheme}`}>
                            You can save your videos while watching them
                          </NoSavedVideosText>
                        </NoSavedVideosContainer>
                      )}
                    </SavedVideosItems>
                  </SavedVideosContainer>
                </ResponsiveContainer>
              </AppContainer>
            </>
          )
        }}
      </ToggleContext.Consumer>
    )
  }
}

export default SavedVideos
