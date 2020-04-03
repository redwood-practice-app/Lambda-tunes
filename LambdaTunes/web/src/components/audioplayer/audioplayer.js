import React from 'react'
import session from 'src/media/sess3_6.mp3'

const AudioPlayer = () => {
    return (
        <div>
            <audio class="audio-player" controls src={session}></audio>
        </div>
    )
}

export default AudioPlayer