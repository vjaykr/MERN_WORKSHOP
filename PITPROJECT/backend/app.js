let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');

let app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));






mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

let articleSchema = mongoose.Schema({
    name: String,
    body: String
});

let Article = mongoose.model("article", articleSchema);

app.get("/", async function(req, res) {
    let article = await Article.find();
    console.log(article);
    res.json(article);
});



app.post('/addarticle', async function(req, res) {
    let article = new Article(req.body);
    await article.save();
    res.json({ message: "Article added" });
});

app.listen(3001, function() {
    console.log("Server started");
});
