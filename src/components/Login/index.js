import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  FormContainer,
  Image,
  CustomContainer,
  Label,
  Input,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  Error,
} from './styledComponents'
import ToggleContext from '../../context/ToggleContext'

const lightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showPassword: false,
    error: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  renderError = errorMsg => {
    this.setState({error: true, errorMsg})
  }

  showPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  fromSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.renderSuccess(data.jwt_token)
    } else {
      this.renderError(data.error_msg)
    }
  }

  renderUsername = () => (
    <>
      <Label htmlFor="Username">USERNAME</Label>
      <Input
        id="Username"
        type="text"
        placeholder="Username"
        onChange={this.onChangeUsername}
      />
    </>
  )

  renderPassword = () => {
    const {showPassword} = this.state
    return (
      <>
        <Label htmlFor="Password">PASSWORD</Label>
        <Input
          id="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderCheckBox = () => (
    <>
      <CheckBox id="checkbox" type="checkbox" onClick={this.showPassword} />
      <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
    </>
  )

  render() {
    const {error, errorMsg} = this.state
    // console.log(errorMsg)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ToggleContext.Consumer>
        {value => {
          const {darkTheme} = value
          const loginImg = darkTheme ? darkImg : lightImg
          return (
            <LoginContainer loginbg={`${darkTheme}`}>
              <FormContainer onSubmit={this.fromSubmit} formbg={`${darkTheme}`}>
                <Image src={loginImg} alt="website logo" />
                <CustomContainer>{this.renderUsername()}</CustomContainer>
                <CustomContainer>{this.renderPassword()}</CustomContainer>
                <CheckBoxContainer>{this.renderCheckBox()}</CheckBoxContainer>
                <LoginButton>Login</LoginButton>
                {error && <Error>*{errorMsg}</Error>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </ToggleContext.Consumer>
    )
  }
}
export default Login
