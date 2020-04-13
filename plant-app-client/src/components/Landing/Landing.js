import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Landing.css'

export default class Landing extends React.Component {

  renderLoggedInView() {
    return(
        <section className='lower'>
          <Link to='/wishlist'>
            <button className='wishlist-link'>Show my wishlist</button>
          </Link>
        </section>
    )
  }

  renderLoggedOutView() {
    return(
        <section className='lower'>
          <Link to='/login'>
            <button className='login-landing-button'>Login to show my wishlist</button>
          </Link>
        </section>
    )
  }

  render() {
    return(
      
      <div className='Landing'>
        <section className='title'>
          <h1>The Plant Shelf</h1>
          <p>Find the right plant for you and add it to your plant wishlist!</p>
          <Link to='/quiz'>
            <button className='find-match'>Find my match ></button>
          </Link>
        </section>

        {TokenService.hasAuthToken()
          ? this.renderLoggedInView()
          : this.renderLoggedOutView()}

      </div>
    )
  }
}