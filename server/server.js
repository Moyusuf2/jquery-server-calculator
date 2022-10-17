console.log('In server.js')
const express = require('express')
const app = express();

const bodyParser = require('body-parser');

let history = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./server/public'));

app.listen(5000,function(){
    console.log('Server is live!');
});

app.post('/calculate', (req, res) =>{
    console.log('POST /calculate', req.body);

    calculateNumbers(req.body)

    res.sendStatus(201);

    history.push(req.body)

})

    function calculateNumbers(){
        console.log('in CalculateNumbers')
    if(numbersFromClient.op === '+');
         numbersFromClient.total = Number(numbersFromClient.numbOne) + Number(numbersFromClient.numbTwo);
    if(numbersFromClient.op === '-');
         numbersFromClient.total = Number(numbersFromClient.numbOne) - Number(numbersFromClient.numbTwo);
    if(numbersFromClient.op === '/');
         numbersFromClient.total = Number(numbersFromClient.numbOne) / Number(numbersFromClient.numbTwo);
    if(numbersFromClient.op === '*');
        numbersFromClient.total = Number(numbersFromClient.numbOne) * Number(numbersFromClient.numbTwo);

    
        res.sendStatus(201);

    history.push(numbersFromClient)
}

app.get('/calculate', (req, res) => {
    res.send(history);
})




