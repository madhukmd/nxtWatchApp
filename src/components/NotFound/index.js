import Header from '../Header'
import Navbar from '../Navbar'

import {
  AppContainer,
  ResponsiveContainer,
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosText,
} from './styledComponents'

import ToggleContext from '../../context/ToggleContext'

const lightNotFound =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const darkNotFound =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NotFound = () => (
  <ToggleContext.Consumer>
    {value => {
      const {darkTheme} = value
      const notFoundImage = darkTheme ? darkNotFound : lightNotFound
      return (
        <>
          <AppContainer>
            <Header />
            <ResponsiveContainer>
              <Navbar />
              <NotFoundContainer bgcolor={`${darkTheme}`}>
                <NotFoundVideosView>
                  <NotFoundVideosImage src={notFoundImage} alt="not found" />
                  <NotFoundVideosHeading headingcolor={`${darkTheme}`}>
                    Page Not Found
                  </NotFoundVideosHeading>
                  <NotFoundVideosText textcolor={`${darkTheme}`}>
                    We are sorry, the page you requested could not be found.
                  </NotFoundVideosText>
                </NotFoundVideosView>
              </NotFoundContainer>
            </ResponsiveContainer>
          </AppContainer>
        </>
      )
    }}
  </ToggleContext.Consumer>
)
export default NotFound
