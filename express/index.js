const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.set('view engine','pug');
app.set('views', path.join(__dirname, "views"));

app.use(function(req,res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get('/', (req, res) => {
    res.render("homepage");
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));
