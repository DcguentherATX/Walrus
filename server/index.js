const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    console.log('hello, it is I, David Guenther');
});

app.listen(port, () => console.log(`server is running on port ${port}`));