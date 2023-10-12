
import { useParams } from 'react-router-dom';
import './videotitle.scss';


const VideoTitle = ({ data }) => {

    const { subId } = useParams();

    const currentSubChapter = data.sub_chapter.find((element) => element.id === Number(subId));

    return (
        <div className="video-title-container">
            <h3 className='video-title' >{data.name} <span className='span-sub-chapter'>({currentSubChapter.name})</span></h3>

        </div>
    );
};

export default VideoTitle;
