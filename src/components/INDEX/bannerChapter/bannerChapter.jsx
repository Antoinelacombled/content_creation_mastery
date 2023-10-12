import { Link } from 'react-router-dom';
import './bannerChapter.scss';


const BannerChapter = ({ name, sub_chapter, id }) => {


    return (
        <div className="banner-chapter-container">

            <Link to={`/day/${id}/${sub_chapter[0].id}`}><div className='banner-chapter-title'><h3>{name}</h3></div></Link>
            <div className="progress-chapter">
                <div className="bar-chapter">
                </div>
            </div>
            <div className='lesson-number'>3 leçons</div>

            <div className='line'></div>

            {sub_chapter.map((data) => (
                <>
                    <Link to={`/day/${id}/${data.id}`} ><div className='banner-chapter-video'><h3>{data.name}</h3></div></Link>
                    <div className='line'></div>
                </>
            ))}





        </div>
    );
};

export default BannerChapter;
