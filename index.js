const express = require('express');
const {listen} = require("express/lib/application");
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
