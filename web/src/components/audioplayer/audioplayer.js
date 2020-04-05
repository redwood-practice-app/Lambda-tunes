import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const AudioPlayer = () => {
    function play(){
        //Get player instance
        const player = document.querySelector('.audio-player')

        //Set player src
        player.src = ""

        //Play track
        player.play()
    }

    return (
        <div>
            <section className="custom-player flexbox horizontal">
                <div className="btn-play flexbox horizontal" onClick={play}><FontAwesomeIcon icon={faPlayCircle} /></div>
                <audio className="audio-player" controls></audio>
            </section>
        </div>
    )
}

export default AudioPlayer