import React from 'react'

const AudioPlayer = () => {
    return (
        <div>
            <section className="custom-player flexbox horizontal">
                <div className="btn-play"></div>
                <audio className="audio-player" controls></audio>
            </section>
        </div>
    )
}

export default AudioPlayer