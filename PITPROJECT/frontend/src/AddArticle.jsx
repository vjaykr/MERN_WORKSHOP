import { useState } from "react";
import axios from "axios";

function AddArticle() {
    let [name, setName] = useState("hi there");
    let [body, setBody] = useState("i am vijay");

    async function addArticle() {
        await axios.post("http://localhost:3001/addarticle", {
            name,
            body,
        });
        
        // Reset the state to initial values
        setName("");
        setBody("");
    }

    return (
        <form className="col-md-4 ms-auto me-auto">
            <h1 className="text-center">Add a new article</h1>
            <div className="mb-3">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Article Name"
                />
            </div>

            <div className="mb-3">
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="form-control"
                    placeholder="Description"
                ></textarea>
            </div>
            <button
                onClick={addArticle}
                type="button"
                className="btn btn-warning text-white w-100"
            >
                Add
            </button>
        </form>
    );
}

export default AddArticle;