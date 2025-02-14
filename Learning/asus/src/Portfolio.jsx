import React  from "react";


function Portfolio() {
    
        return (
            <div className="App">
                <header className="App-header">
                    <h1> hi chitranjan</h1>
                </header>

                <main>
                    <section>
                        <h2>Portfolio</h2>
                        <p>My portfolio will go here...</p>
                    </section>

                    <section>
                        <h2>Work Experience</h2>
                    </section>

                    <section>
                        <h2>link and image of my projects</h2>
                        <a href="https://vjaykr.github.io/about" target="_blank" rel="noreferrer">this is my project</a>
                        <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    </section>

                    <section>
                        <h2>form tag</h2>
                        <form style={{ textAlign: "center" }}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <br /><br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" /><br /><br />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                            <br/><br/>
                            <button type="submit">Send</button>
                        </form>
                    </section>
                    
                </main>

                <footer>
                    <p>&copy; 2025 basic web development witout css </p>
                </footer>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="col-md-3 bg-white px-3 py-3 m-3 box" >
                                <h1>Article 1</h1>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="btn btn-danger">View details</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-md-4 bg-white px-4 py-4 m-4 box" >
                                <h1>Article 2</h1>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="btn btn-danger">View details</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-md-4 bg-white px-4 py-4 m-4 box" >
                                <h1>Article 3</h1>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="btn btn-danger">View details</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-md-4 bg-white px-4 py-4 m-4 box" >
                                <h1>Article 4</h1>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="btn btn-danger">View details</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-md-4 bg-white px-4 py-4 m-4 box" >
                                <h1>Article 5</h1>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button className="btn btn-danger">View details</button>
                            </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        );
    }

  
  

export default Portfolio;    