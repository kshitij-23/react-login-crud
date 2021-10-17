import axios from 'axios';
import React, { Component } from 'react';
import Cookies from 'js-cookie';

class Login extends Component {

    state = {
        username : '',
        password : ''
    }

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    }
    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const loginData = { username: this.state.username, password: this.state.password };
        axios.post('http://localhost:8080/login', loginData)
             .then(response => { 
                    console.log(response);
                    var token = response.data.access_token;
                    Cookies.set('token', token);
                    // 
                })
             .catch(error => {console.error(error)});
        alert('Submit Event ' +this.state.username +" : "+this.state.password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td><input type="text" name="username" placeholder="username" onChange={this.handleChangeUsername}/></td>
                            </tr>
                            <tr>
                                <td>Password</td>
                                <td><input type="password" name="password" placeholder="password" onChange={this.handleChangePassword}/></td>
                            </tr>
                            <tr>
                                <td><input type="submit" value="Login" /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

export default Login