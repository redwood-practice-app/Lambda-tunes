import React from 'react'
import axios from 'axios'

const AuthEndpoint = 'https://accounts.spotify.com/api/token'
const clientID = 'bf79bedc80564646a92e2094fa449767'
const redirect_uri = 'https://peaceful-hawking-f47563.netlify.com/'
const client_secret = '0ee8ec5b6fd14a1aa43e79eea998731f'
const client_token = btoa(`${clientID}${client_secret}`)

const Auth = () => {
    function authenticate(){
        const auth_url = `${AuthEndpoint} + ?client_id=${client_token}&response_type=token&redirect_uri=${redirect_uri}`
console.log(client_token)
        axios.post(
            encodeURIComponent(`${AuthEndpoint}`),
                new URLSearchParams({
                    grant_type: "client_credentials",
                    code: `${client_token}`,
                    redirect_uri: `${redirect_uri}`
                }).toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Basic ${client_token}`
                    },
                }
            ).then(function (response) {
                console.log(response.data);
            });

        // axios.post(AuthEndpoint, { grant_type: 'client_credentials' }, {headers: { 'Authorization': `Basic ${clientID}:${client_secret}`, "Content-Type": "application/jsodfvbdfgn"}}).then((res) => {
        //     console.log(res)

        //     // window.location = auth_url
        // })
    }

    return (
        <div>
            <button onClick={() => authenticate()}>Authenticate</button>
        </div>
    )
}

export default Auth