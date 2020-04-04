import React from 'react'
import axios from 'axios'

const AuthEndpoint = 'https://accounts.spotify.com/api/token'
const clientID = 'bf79bedc80564646a92e2094fa449767'
const redirect_uri = 'https://peaceful-hawking-f47563.netlify.com/'
const client_secret = '0ee8ec5b6fd14a1aa43e79eea998731f'
const client_token = btoa(`${clientID}${client_secret}`)

const Auth = () => {
  function authInfo() {
    const authEndpoint = 'https://accounts.spotify.com/authorize'
    let hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=')
          initial[parts[0]] = decodeURIComponent(parts[1])
        }
        return initial
      }, {})

    const clientId = '7e2d2c8c567449da91f19267c33aa557'
    const redirectUri = 'http://localhost:8910/'
    const scopes = ['user-top-read']

    if (!hash.access_token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
      )}&response_type=token&show_dialog=true`
    } else {
      alert('You are already logged in!')
    }
    return (
      <div>
        <button onClick={authInfo}>Log in to Spotify!</button>
        <button onClick={axiosCall}>Find top artists!</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={authInfo}>Log in to Spotify!</button>
    </div>
  )
}
export default Auth
