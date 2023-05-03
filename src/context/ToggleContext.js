import React from 'react'

const ToggleContext = React.createContext({
  darkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
})
export default ToggleContext
