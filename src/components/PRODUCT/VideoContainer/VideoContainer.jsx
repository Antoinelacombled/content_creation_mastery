import VideoTitle from '../VideoTitle/VideoTitle';
import VideoDisplay from '../VideoDisplay/VideoDisplay';
import './videocontainer.scss';



const VideoContainer = ({ data, day, }) => {



    return (
        <div className="video-container-right">
            <VideoTitle data={data} />
            <VideoDisplay data={data} day={day} />
        </div>
    );
};

export default VideoContainer;
