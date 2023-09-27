
import './bannerChapter.scss';


const BannerChapter = () => {

    return (
        <div className="banner-chapter-container">

            <div className='banner-chapter-title'><h3>Jour 1 : Find a niche</h3></div>
            <div className="progress-chapter">
                <div className="bar-chapter">
                </div>
            </div>
            <div className='lesson-number'>3 leçons</div>

            <div className='line'></div>
            
            <div className='banner-chapter-video'><h3>Introduction: Le défi Shorts</h3></div>
            <div className='line'></div>
            <div className='banner-chapter-video'><h3>Aborder les plateformes</h3></div>
            <div className='line'></div>
            <div className='banner-chapter-video'><h3>Devriez-vous créer des nouveaux comptes</h3></div>
        </div>
    );
};

export default BannerChapter;
