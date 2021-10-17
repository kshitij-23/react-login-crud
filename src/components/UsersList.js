import axios from 'axios';
import React, { Component } from 'react';

class UsersList extends Component {
    
    onLoad = (e) => {
        e.preventDefault();
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