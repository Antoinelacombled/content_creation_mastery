import DayVerticalBanner from '../DayVerticalBanner/DayVerticalBanner';
import TittleVerticalBanner from '../../INDEX/TitleVerticalBanner/TitleVerticalBanner';
import './verticalbanner.scss';
import { Link } from 'react-router-dom';


const VerticalBanner = ({ data }) => {

    return (
        <div className="vertical-banner-container">
            <Link to='/' ><button className="back-button">RETOUR </button></Link>
            <TittleVerticalBanner />


            {data.chapter.map((newData) => (
                <DayVerticalBanner data={newData} />
            ))}

        </div>
    );
};

export default VerticalBanner;
