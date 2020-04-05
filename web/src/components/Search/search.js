import React from 'react'
import axios from 'axios'

const Search = () => {
  const track = ""

  //API wrapper function
  function apiRequest(options, callback){
    //wrapper for all axios calls
    axios(options)
      .then((resp) => {
        callback(resp)
      })
  }

  //Search function
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
      url: 'https://api.spotify.com/v1/search?q=hello%20darlin&type=track',
      headers: { Authorization: 'Bearer ' + hash.access_token }
    }, (resp) => {
      console.log(resp)
      document.querySelector('.audio-player').src = resp.data.tracks.items[7]['preview_url']
      document.querySelector('.media-info img').src = resp.data.tracks.items[7].album.images[2]['url']
    })

    // axios
    //   .get('https://api.spotify.com/v1/me/top/artists', {
    //     headers: { Authorization: 'Bearer ' + hash.access_token },
    //   })
    //   .then((response) => {
    //     console.log(response)
    //   })
  }

  return (
    <div>
      <button onClick={axiosCall} id="btn-search">Find top artists!</button>
    </div>
  )
}

export default Search