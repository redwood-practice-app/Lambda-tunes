import React from 'react'
import axios from 'axios'
import { navigate, routes } from '@redwoodjs/router'

const AuthEndpoint = 'https://accounts.spotify.com/authorize'
const clientID = 'bf79bedc80564646a92e2094fa449767'
const redirect_uri = 'http://localhost:8910/'

const Auth = () => {
    function authenticate(){
        const auth_url = `${AuthEndpoint} + ?client_id=${clientID}&response_type=token&redirect_uri=${redirect_uri}`
        
        axios.get(auth_url).then((res) => {
            console.log(res)

            // window.location = auth_url
        })
    }

    return (
        <div>
            <button onClick={() => authenticate()}>Authenticate</button>
        </div>
    )
}

export default Auth