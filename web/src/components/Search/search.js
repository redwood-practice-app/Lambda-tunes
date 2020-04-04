import React from 'react'
import axios from 'axios'

const Search = () => {
  function apiRequest(options = {}, callback){
    //wrapper for all axios calls
    axios(options)
      .then(callback(resp))
  }

  function axiosCall() {
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

    apiRequest({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/top/artists',
      headers: { Authorization: 'Bearer ' + hash.access_token }
    }, (resp) => {
      console.log(resp)
    })

    return (
      <div>
        <button onClick={axiosCall}>Find top artists!</button>
      </div>
    )

    // axios
    //   .get('https://api.spotify.com/v1/me/top/artists', {
    //     headers: { Authorization: 'Bearer ' + hash.access_token },
    //   })
    //   .then((response) => {
    //     console.log(response)
    //   })
  }
}

export default Search