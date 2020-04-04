import AudioPlayer from 'src/components/audioplayer/audioplayer'
import Auth from 'src/components/authorization/auth'
import Search from 'src/components/search/search'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Auth />
      <AudioPlayer />
    </div>
  )
}

export default HomePage
