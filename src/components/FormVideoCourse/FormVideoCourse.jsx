import './formvideocourse.scss'
import { useEffect, useState } from 'react';

function FormVideoCourse() {

    const [file, setFile] = useState()

    function handleFile(event) {
        console.log(event)
        setFile(event.target.files[0])
    }

    useEffect(() => {
        console.log(file)
    }, [file])

    return (

        <>

            <div className="admin-container">

                <div>Day 1 - Introduction</div>
                <div>Rempli les vidéos et appuie sur chapitre suivant pour continuer</div>

                <button>Chapitre Suivant</button>

                <div className="video-course-container">
                    <form className='form-video'>
                        <div>
                            <label className="label-form" >Titre de la vidéo #1</label>
                            <input type="text" />
                            <input type='file' name='file' onChange={handleFile} />
                            <button>Upload</button>
                        </div>
                    </form>
                </div>
            </div>

        </>

    )
}


export default FormVideoCourse