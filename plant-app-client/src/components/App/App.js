import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import LandingPage from '../Landing/Landing'
import QuizPage from '../Quiz/Quiz'
import ResultsPage from '../Results/Results'
import LoginPage from '../LoginPage/LoginPage'
import WishlistPage from '../Wishlist/Wishlist'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import Nav from '../Nav/Nav'
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className='App'>
        <header className='App header'>
          <Nav />
        </header>
        <main className='App main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route 
              path={'/quiz'}
              component={QuizPage}
            />
            <Route
              path={'/results'}
              component={ResultsPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/wishlist'}
              component={WishlistPage}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
