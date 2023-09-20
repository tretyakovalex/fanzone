const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConnection = require('./configs/mongodb');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});