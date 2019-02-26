import React, { Component } from 'react';
import {UserService} from '../../services';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        UserService.login(username, password)
          
    }


  render() {
    const { username, password, submitted, loading, error } = this.state;
    return (
      <div>
          <div class="login">
            <input type="text" placeholder="Username" id="username" />  
            <input type="password" placeholder="password" id="password" />  
            <a href="#" class="forgot">forgot password?</a>
            <input type="submit" value="Sign In" />
          </div>
          <div class="shadow"></div>
      </div>
    )
  }
}
