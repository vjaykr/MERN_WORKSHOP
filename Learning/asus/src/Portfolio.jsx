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
                        <form align="center">
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
            </div>
        );
    }

  
  

export default Portfolio;    