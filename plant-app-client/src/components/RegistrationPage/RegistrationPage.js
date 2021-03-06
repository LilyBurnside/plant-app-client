import React from 'react'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export default class RegistrationPage extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm 
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}