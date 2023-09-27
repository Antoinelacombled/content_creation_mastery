
import './bannerIntro.scss';
import React, { useState } from 'react';

const bannerIntro = () => {
    const [progress, setProgress] = useState(50);

    return (
        <div className="banner-container">
            <h2 className='banner-content'>YouTube Wizardry 🧙🏼‍♂️</h2>
            <div className='banner-button'><button>Démarrer -></button></div>
            <div className='progress-bar'>
                <div className='progress-bar-background'></div>
                <div className='progress-bar-content' style={{ width: `${progress}%` }} ></div>
            </div>
        </div>
    );
};

export default bannerIntro;
