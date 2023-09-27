import './App.css'
import Header from './components/header/header'
import BannerIntro from './components/bannerIntro/bannerIntro'
import BannerChapter from './components/bannerChapter/bannerChapter'

function App() {

  return (

    <div className='glassy-rectangle'>
      <Header> </Header>
      <BannerIntro />
      <BannerChapter />
      <BannerChapter />
    </div>


  )
}

export default App
