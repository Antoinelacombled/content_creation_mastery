import './App.css'
import BannerIntro from "../src/components/INDEX/bannerIntro/bannerIntro"
import BannerChapter from '../src/components/INDEX/bannerChapter/bannerChapter'
import videos from '../src/data/data.js'

function App() {

  return (

    <>
      <BannerIntro />
      {videos[0].chapter.map((video) => (
        <BannerChapter key={video.id} {...video} />
      ))}

    </>

  )
}

export default App
