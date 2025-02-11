import { useEffect, useState } from "react";

import axios from 'axios';

function Asus() {
    // State variables for articles and form inputs
    const [articles, setArticles] = useState([]);
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [editId, setEditId] = useState(null);

    // Fetch all articles from the backend
    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            const response = await axios.get("http://localhost:3001/article");
            setArticles(response.data);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    // Add a new article
    const addArticle = async () => {
        if (!name || !body) return alert("Please enter name and body");

        try {
            await axios.post("http://localhost:3001/article", { name, body });
            fetchArticles(); // Refresh articles after adding
            setName("");
            setBody("");
        } catch (error) {
            console.error("Error adding article:", error);
        }
    };

    // Delete an article
    const deleteArticle = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/article/${id}`);
            fetchArticles(); // Refresh articles after deletion
        } catch (error) {
            console.error("Error deleting article:", error);
        }
    };

    // Update an article
    const updateArticle = async () => {
        if (!editId) return alert("No article selected for editing");

        try {
            await axios.put(`http://localhost:3001/article/${editId}`, { name, body });
            fetchArticles(); // Refresh articles after update
            setName("");
            setBody("");
            setEditId(null);
        } catch (error) {
            console.error("Error updating article:", error);
        }
    };

    // Handle edit button click
    const editArticle = (article) => {
        setEditId(article._id);
        setName(article.name);
        setBody(article.body);
    };

    return (
        <div className="container">
            <h1 className="text-center mt-3">CRUD Operations with MongoDB & React</h1>

            {/* Form for Adding/Updating */}
            <form className="mb-3">
                <div className="mb-2">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        type="text"
                        placeholder="Article Name"
                    />
                </div>

                <div className="mb-2">
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="form-control"
                        placeholder="Article Description"
                    ></textarea>
                </div>

                {editId ? (
                    <button type="button" className="btn btn-primary w-100" onClick={updateArticle}>
                        Update Article
                    </button>
                ) : (
                    <button type="button" className="btn btn-success w-100" onClick={addArticle}>
                        Add Article
                    </button>
                )}
            </form>

            {/* Displaying Articles */}
            <div className="row">
                {articles.map((article) => (
                    <div className="col-md-4" key={article._id}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{article.name}</h5>
                                <p className="card-text">{article.body}</p>
                                <button className="btn btn-warning me-2" onClick={() => editArticle(article)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => deleteArticle(article._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Asus;
