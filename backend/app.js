const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dbConnection = require('./configs/mongodb');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

// Serve static files from the Svelte build folder
app.use(express.static(path.join(__dirname, 'public')));


// Handle all other routes by serving the Svelte app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});