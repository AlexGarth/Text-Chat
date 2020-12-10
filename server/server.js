const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 9035

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => console.log(`Server is online at http://localhost:${port}/`))