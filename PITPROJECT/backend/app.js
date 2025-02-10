const express = require('express'); // Add this line

let app = express();

app.get('/', function(_, res) {
    let data = [
        {
            title: "Hello World",
            body: "This is a sample blog post"
        },
        {
            title: "Hello World 2",
            body: "This is a sample blog post 2"
        },
        {
            title: "Hello World 3",
            body: "This is a sample blog post 3"
        }
    ];
    res.json(data);
});

app.listen(3001, function() {
    console.log("Server is running on port 3001, visit http://localhost:3001");
});
