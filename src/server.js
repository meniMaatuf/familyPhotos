const express = require("express");

const app  = express();

const port = process.env.PORT || 5000;
app.get('/api/hello', (req, res) => {
    res.send({express: "hello"});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});