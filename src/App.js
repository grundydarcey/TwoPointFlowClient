import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './routes/loginpage/loginpage';

export default class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div className='App'>
        <header className='app__header'>
          header goes here
        </header>
        <main className='app_main'>
          {this.state.hasError && <p className='red'>Error here</p>}
          <Switch>
            <Route
              exact path={'/login'}
              component={LoginPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}