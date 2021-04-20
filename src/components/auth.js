import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '325720564437-hpoqpiijeqpt8sk3cngirs3s977jdjg8.apps.googleusercontent.com';

export default ({setIsLoggedIn,isLoggedIn})=>
{ 
   const login=(res)=>res.accessToken?setIsLoggedIn(true):null
   const logout=()=>setIsLoggedIn(false)
    return(
            <div className="google icon" >
                {   isLoggedIn?(
                        <GoogleLogout
                        clientId={CLIENT_ID}
                        buttonText='Logout'
                        onLogoutSuccess={logout}
                    />
                    ):(
                        <GoogleLogin
                            clientId={CLIENT_ID}
                            buttonText='Login'
                            onSuccess={login}
                            cookiePolicy={'single_host_origin'}
                            responseType='code,token'
                            />
                    )

                }
            </div>
        )
}