import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Navbar from '../Navbar'
import FailureView from '../FailureView'
import GamingVideoCard from '../GamingVideoCard'

import ToggleContext from '../../context/ToggleContext'

import {
  AppContainer,
  ResponsiveContainer,
  GamingVideosContainer,
  GamingVideosContent,
  GamingHeadingContainer,
  GamingTitleIconContainer,
  GamingHeading,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      //   console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosContent>
        {gamingVideos.map(eachItem => (
          <GamingVideoCard eachVideo={eachItem} key={eachItem.id} />
        ))}
      </GamingVideosContent>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ToggleContext.Consumer>
        {value => {
          const {darkTheme} = value
          const bgColor = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = darkTheme ? '#f9f9f9' : '#231f20'

          return (
            <AppContainer>
              <Header />
              <ResponsiveContainer>
                <Navbar />
                <GamingVideosContainer data-testid="gaming" bgColor={bgColor}>
                  <GamingHeadingContainer trendbg={`${darkTheme}`}>
                    <GamingTitleIconContainer iconcolor={`${darkTheme}`}>
                      <SiYoutubegaming size={25} color="#ff0000" />
                    </GamingTitleIconContainer>
                    <GamingHeading color={textColor}>Gaming</GamingHeading>
                  </GamingHeadingContainer>
                  {this.renderGamingVideos()}
                </GamingVideosContainer>
              </ResponsiveContainer>
            </AppContainer>
          )
        }}
      </ToggleContext.Consumer>
    )
  }
}
export default Trending
