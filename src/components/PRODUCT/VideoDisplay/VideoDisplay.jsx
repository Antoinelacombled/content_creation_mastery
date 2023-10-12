import './videodisplay.scss';
import ButtonSkip from '../ButtonSkip/ButtonSkip';
import DescriptionVideo from '../DescriptionVideo/DescriptionVideo';
import { useParams } from 'react-router-dom';


const VideoDisplay = ({ data, day }) => {

    const { subId, id } = useParams();

    const currentSubChapter = data.sub_chapter.find((element) => element.id === Number(subId));

    console.log('subId=', currentSubChapter.url)

    return (
        <div className="video-dislay-container">
            <div className='video-container'>
                <iframe width="560" height="315" src={currentSubChapter.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <DescriptionVideo name={currentSubChapter.name} />
            <ButtonSkip data={data} course={day} />
        </div>

    );
};

export default VideoDisplay;
