import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import Navbar from '../Navbar'
import ToggleContext from '../../context/ToggleContext'
import HomeVideos from '../HomeVideos'
import FailureView from '../FailureView'

import {
  HomeContainer,
  BannerContainer,
  BannerCloseContainer,
  BannerImage,
  BannerCloseButton,
  BannerText,
  BannerButton,
  AppContainer,
  ResponsiveContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomevideosContainer,
  LoaderContainer,
} from './styledComponents'

const BannerBg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    homePageVideos: [],
    searchInput: '',
    bannerShow: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        homePageVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getVideos()
  }

  onCloseBanner = () => {
    this.setState({bannerShow: false})
  }

  onRetryResults = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {homePageVideos} = this.state
    return (
      <HomeVideos
        homeVideos={homePageVideos}
        onRetryResults={this.onRetryResults}
      />
    )
  }

  renderFailureView = () => <FailureView onRetry={this.onRetryResults} />

  renderAll = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {bannerShow} = this.state
    return (
      <ToggleContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <AppContainer>
                <Header />
                <ResponsiveContainer>
                  <Navbar />
                  <HomeContainer data-testid="home" homebg={`${darkTheme}`}>
                    {bannerShow && (
                      <BannerContainer data-testid="banner">
                        <BannerCloseContainer>
                          <BannerImage src={BannerBg} alt="nxt watch logo" />
                          <BannerCloseButton
                            data-testid="close"
                            onClick={this.onCloseBanner}
                          >
                            <AiOutlineClose size={25} />
                          </BannerCloseButton>
                        </BannerCloseContainer>
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with <br /> UPI
                        </BannerText>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerContainer>
                    )}
                    <HomevideosContainer>
                      <SearchContainer>
                        <SearchInput
                          type="search"
                          placeholder="Search"
                          onChange={this.onChangeInput}
                        />
                        <SearchButton
                          type="button"
                          data-testid="searchButton"
                          onClick={this.getSearchResults}
                        >
                          <AiOutlineSearch />
                        </SearchButton>
                      </SearchContainer>
                      {this.renderAll()}
                    </HomevideosContainer>
                  </HomeContainer>
                </ResponsiveContainer>
              </AppContainer>
            </>
          )
        }}
      </ToggleContext.Consumer>
    )
  }
}
export default Home
