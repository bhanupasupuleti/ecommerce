import React from 'react';
import GoogleAuth from './auth';

const Header = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div className="ui secondary pointing menu">
        <div className="right menu">
            <GoogleAuth setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />        
      </div>
    </div>
  );
};

export default Header;