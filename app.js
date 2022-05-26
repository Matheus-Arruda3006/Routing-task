let express = require('express');
let app = express();
let joke = require('one-liner-joke');

app.get('/joke/:number', (req, resp) => {
    let num = req.params.number;
    let result = '';
})
