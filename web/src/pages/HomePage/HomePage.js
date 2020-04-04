import AudioPlayer from 'src/components/audioplayer/audioplayer'
import Auth from 'src/components/authorization/auth'
import Search from 'src/components/search'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Auth />
      <AudioPlayer />
      <Search />
    </div>
  )
}

export default HomePage
