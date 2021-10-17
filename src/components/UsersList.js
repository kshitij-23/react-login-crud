import axios from 'axios';
import React, { Component } from 'react';
import Cookies from 'js-cookie';

class UsersList extends Component {
    
    onLoad = (e) => {
        e.preventDefault();
        var token = Cookies.get("token");
        axios.defaults.headers.common.Authorization = "Bearer "+token;
        axios.get("http://localhost:8080/findAll").then(response => console.log(response)).catch(error => console.log(error));
        alert('On Load Event');
    }

    componentDidMount() {
        window.addEventListener('load', this.onLoad);
     }

    render() {
        return (
            <div>
                <h1>Users List</h1>           
            </div>
        );
    }   
}
export default UsersList;