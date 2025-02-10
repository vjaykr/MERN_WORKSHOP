function ArticleList() {
return (
    <div className="container">
        <div className="row">
            <div className="col-md-3 bg-white px-3 py-3 m-3" >
                <h1>Article 1</h1>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-danger">View details</button>
            </div>
            <div className="col-md-3 bg-white px-3 py-3 m-3" >
                <h1>Article 2</h1>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-danger">View details</button>
            </div>
            <div className="col-md-3 bg-white px-3 py-3 m-3" >
                <h1>Article 2</h1>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="btn btn-danger">View details</button>
            </div>
        </div>
    </div>
  )
}

export default ArticleList;