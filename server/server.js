console.log('In server.js')
const express = require('express')
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./server/public'));

app.listen(5000,function(){
    console.log('Server is live!');
});
