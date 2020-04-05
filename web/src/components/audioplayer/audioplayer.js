import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const AudioPlayer = () => {
    return (
        <div>
            <section className="custom-player flexbox horizontal">
                <div className="btn-play"><FontAwesomeIcon icon={faCoffee} /></div>
                <audio className="audio-player" controls></audio>
            </section>
        </div>
    )
}

export default AudioPlayer