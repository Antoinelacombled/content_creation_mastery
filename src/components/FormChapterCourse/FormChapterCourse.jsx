function FormChapterCourse({ handleSubmit }) {

    return (

        <>

            <div className="admin-container">
                <div className="admin-form">
                    <form onSubmit={handleSubmit}>
                        <label className="admin-question">Quel est le nom du chapitre?</label><br></br>
                        <input type="text" name="" className="admin-input" placeholder="Entrez ici" />
                    </form>
                </div>
            </div>

        </>

    )
}

export default FormChapterCourse