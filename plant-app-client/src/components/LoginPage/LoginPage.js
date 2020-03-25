import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
    window.location.reload()
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Login</h2>
        <p>Log in with username: guest and password: password</p>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}