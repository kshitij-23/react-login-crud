import React, { Component } from 'react';

class CookieAccess extends Component {

    constructor(props) {
        super(props);
        this.cookieRef = React.createRef();
      }

    saveTokenIntoCookie = (cookie) =>{
        setCookie('jwt_token', cookie);
    }
    getToekFromCookie = () => {
        return coockies.get('jwt_token');
    }

    render() {
        return <div ref={this.cookieRef} />;
    }
}

export default CookieAccess;