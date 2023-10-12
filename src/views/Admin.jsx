import { useState } from "react";
import FormTitleCourse from "../components/formTitleCourse/formTitleCourse";
import FormChapterCourse from "../components/FormChapterCourse/FormChapterCourse";
import FormVideoCourse from "../components/FormVideoCourse/FormVideoCourse";
import "./admin.scss";

function Admin() {

    const [steps, setSteps] = useState(3)

    const handleFirstStep = () => {
        setSteps(2)
    }

    const handleSecondStep = () => {
        setSteps(3)
    }





    return (

        <>
            {steps === 1 && <FormTitleCourse handleSubmit={handleFirstStep} />}

            {steps === 2 && <FormChapterCourse handleSubmit={handleSecondStep} />}

            {steps === 3 && <FormVideoCourse />}

        </>

    )
}

export default Admin