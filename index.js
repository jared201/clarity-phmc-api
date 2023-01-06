const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,'dist')))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'dist'))
    .set('view engine', 'html')
.get('/', (req, res) => {
    //res.send('Hello World!')
    res.render('index.html')
})
.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
