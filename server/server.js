console.log('In server.js')
const express = require('express')
const app = express();

const bodyParser = require('body-parser');

let answer = [];
let history = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./server/public'));

app.listen(5000,function(){
    console.log('Server is live!');
});

app.post('/calculate', (req, res) =>{
    console.log('POST /calculate', req.body);

    numbersFromClient=req.body

    console.log('numberFromClient data', numbersFromClient)

    if(numbersFromClient.op === '+');
         numbersFromClient.total = Number(numbersFromClient.numbOne) + Number(numbersFromClient.numbTwo);
    if(numbersFromClient.op === '-');
         numbersFromClient.total = Number(numbersFromClient.numbOne) - Number(numbersFromClient.numbTwo);
    if(numbersFromClient.op === '/');
         numbersFromClient.total = Number(numbersFromClient.numbOne) / Number(numbersFromClient.numbTwo);
    if(numbersFromClient.op === '*');
        numbersFromClient.total = Number(numbersFromClient.numbOne) * Number(numbersFromClient.numbTwo);

    
        res.sendStatus(201);

    answer = numbersFromClient
});

app.get('/calculate', (req, res) => {
    res.send(answer);
})




