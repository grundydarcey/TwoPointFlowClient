import React, { Component } from 'react';

export default class LoginForm extends Component {
  static defaultProps = {
      onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = e => {
    e.preventDefault();
    const { user_name, password } = e.target;
    console.log('loginsubmit')
    console.log({ user_name, password })
    user_name.value = '';
    password.value = '';
    this.props.onLoginSuccess();
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='loginform'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='user_name'>
          <label htmlFor='loginform__user_name'>
            Username:
          </label>
          <input
            required
            name='user_name'
            id='loginform__user_name'
          >
          </input>
        </div>
        <div className='password'>
          <label htmlFor='loginform__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='loginform__password'
          >
          </input>
        </div>
        <button type='submit'>
          Login
        </button>
      </form>
    ) 
  }
}