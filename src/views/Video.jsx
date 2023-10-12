
import videos from "../data/data.js"
import { useParams } from "react-router-dom"
import VerticalBanner from "../components/PRODUCT/VerticalBanner/VerticaBanner.jsx"
import VideoContainer from "../components/PRODUCT/VideoContainer/VideoContainer.jsx"
import './video.scss'


function Video() {

    const { id } = useParams();

    const currentChapter = videos[0].chapter.find((element) => element.id === Number(id))

    console.log(currentChapter)

    return (

        <>

            <div className="course-video-container">
                <VerticalBanner data={videos[0]} />
                <VideoContainer data={currentChapter} day={videos[0]} />
            </div>

        </>

    )
}

export default Video
