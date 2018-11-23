'use strict';

const express = require('express');

// Constants
const PORT = 8001;
const HOST = '149.129.242.205';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
