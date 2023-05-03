import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import ToggleContext from './context/ToggleContext'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here

class App extends Component {
  state = {darkTheme: false, activeTab: 'Home', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  changeTab = Tab => {
    this.setState({activeTab: Tab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  render() {
    const {darkTheme, activeTab, savedVideos} = this.state
    return (
      <ToggleContext.Provider
        value={{
          darkTheme,
          activeTab,
          savedVideos,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/Gaming" component={Gaming} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ToggleContext.Provider>
    )
  }
}

export default App
