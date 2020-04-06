import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const AudioPlayer = () => {
    function play(){
        //Get player instance
        const player = document.querySelector('.audio-player')

        //Set player volume
        player.volume = 0.6 //60% volume

        //Set player src
        // player.src = ""

        //Play track
        player.play()
    }

    return (
        <div>
            <section className="custom-player flexbox horizontal">
                <section className="media-info flexbox horizontal">
                    <img alt="album art" />
                </section>
                <section className="btn-play flexbox horizontal">
                    <FontAwesomeIcon icon={faPlayCircle} onClick={play} />
                </section>
                <audio className="audio-player" controls></audio>
            </section>
        </div>
    )

export default AudioPlayer
