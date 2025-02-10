function AddArticle(){
    return (
        <form className='col-md-4 ms-auto me-auto'> 
        <h1 className="text-center">add a new article</h1>
            <div  className="mb-3">
                <input className="form-control" type="text" 
                placeholder="Article Name"/>
                
                
            </div>

            <div className="mb-3">
                
                <textarea className='form-control' placeholder="description"></textarea>
            </div>
            <button className='btn btn-warning text-white w-100'>Add </button>
        </form>
    )
}

export default AddArticle