
const express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');


let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function Connection(){
 await mongoose.connect("mongodb://localhost:27017/pitproject")
console.log("Connected to Database");
}


app.get('/', function(res,req) {
    let data = [
        {
            title: "Hello World",
            body: "This is a sample blog post"
        },
        {
            title: "Hello World 2",
            body: "This is a sample blog post 2"
        }
       
    ];
    res.json(data);
});

app.post("/addarticle", function(req, res) {
    console.log(req.body);
    res.json({ message: "Article added" });
});

app.listen(3001, function() {
    console.log("Server is running on port 3001, visit http://localhost:3001");
});
