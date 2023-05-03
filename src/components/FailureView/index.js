import ToggleContext from '../../context/ToggleContext'

import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const failureDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
const failureLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ToggleContext.Consumer>
      {value => {
        const {darkTheme} = value
        const failureImage = darkTheme ? failureDark : failureLight
        const headingColor = darkTheme ? '#f1f5f9' : '#1e293b'
        const failText = darkTheme ? '#e2e8f0' : '#475569'
        return (
          <FailureViewContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureText failText={failText}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureText>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ToggleContext.Consumer>
  )
}
export default FailureView
