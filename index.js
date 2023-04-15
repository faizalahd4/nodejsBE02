const express = require('express')
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    // We will be coding here
    console.log("Body: ", req.body);
    res.send('Login is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));