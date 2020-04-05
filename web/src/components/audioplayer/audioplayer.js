import React from 'react'
import { faCoffee } from '@fortawesome/fontawesome-svg-core'

const AudioPlayer = () => {
    return (
        <div>
            <section className="custom-player flexbox horizontal">
                <div className="btn-play"><FontAwesome icon={faCoffee} /></div>
                <audio className="audio-player" controls></audio>
            </section>
        </div>
    )
}

export default AudioPlayer