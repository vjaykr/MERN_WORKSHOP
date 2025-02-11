//import statements
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//use statements means middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//connect to MongoDB

mongoose.connect('mongodb://localhost:27017/asusrog', {
    
    useUnifiedTopology: true }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
    
//create schema
const articleSchema = mongoose.Schema({
    name: String,
    body: String
});

//create model

const Article = mongoose.model("article", articleSchema);

//routes

app.post('/article', async function(req, res) {
    try {
        const newArticle = new Article(req.body);
        await newArticle.save();
    }
    catch (err) {
        console.log(err);
    }
})


app.get('/article', async function(req, res) 
{
    try
    {
        const article = await Article.find();
        if (!article) throw Error("No items");
        res.json(article);
    }

    catch (err)
    {
        console.log(err);
    }

});

//listen to port 3001
app.listen(3001, function() 
    {
        console.log("Server started");
        console.log("access the server at\nhttp://localhost:3001");
    }       
);
