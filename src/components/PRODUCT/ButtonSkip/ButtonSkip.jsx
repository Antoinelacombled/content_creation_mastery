import { Link, useParams } from 'react-router-dom';
import './buttonskip.scss';


const ButtonSkip = ({
    data,
    course,
}) => {
    const { subId, id } = useParams();


    console.log('data', data);
    console.log('course', course);


    console.log(data.sub_chapter.length);

function generateUrl() {
    let dayId = Number(id);
    let videoId = Number(subId)

    if(subId <= data.sub_chapter.length - 1) {
        videoId ++
    } else {
        videoId = 1;
        dayId ++

    }

    return `/day/${dayId}/${videoId}`
}

    return (
        <div className="button-next">
            <Link to={generateUrl()}><button className='button glow-effect'>

                {subId <= data.sub_chapter.length - 1 ? "Next vid 🤟" : "Next Day 👏"}


            </button></Link>
        </div>
    );
};

export default ButtonSkip;
