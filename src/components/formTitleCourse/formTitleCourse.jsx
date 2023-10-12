import { useState } from "react"


function FormTitleCourse({ handleSubmit }) {

    return (

        <>

            <div className="admin-container">
                <div className="admin-form">
                    <label className="admin-question">Quel est le nom de ta nouvelle formation?</label>
                    <input onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit()
                        }
                    }}
                        type="text"
                        name=""
                        className="admin-input" placeholder="Entrez ici" />
                </div>
            </div>

        </>

    )
}

export default FormTitleCourse