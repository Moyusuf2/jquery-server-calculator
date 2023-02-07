console.log('In server.js')
const express = require('express')
const app = express();

const bodyParser = require('body-parser');

let history = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./server/public'));

app.listen(5000, function () {
    console.log('Server is live!');
});

app.post('/calculate', (req, res) => {
    console.log('POST /calculate', req.body);

    // do math
    let calculation = calculateNumbers(req.body)

    console.log('Calculation is:', calculation)
    res.sendStatus(201);

    // req.body is your math object
    // it needs the calculation
    req.body.answer = calculation;

    history.push(req.body);

})

function calculateNumbers(numbersFromClient) {
    console.log('in CalculateNumbers', numbersFromClient)
    let answer = 0;

    let numberOne = parseInt(numbersFromClient.numOne);
    let numberTwo = parseInt(numbersFromClient.numTwo);


    if (numbersFromClient.op === '+') {
        answer = numberOne + numberTwo
        // console.log("Number is:", numberOne, numbersFromClient.numOne);
    
            return answer
    }
    if (numbersFromClient.op === '-') {
        answer = numberOne - numberTwo
        // console.log("Number is:", numberOne, numbersFromClient.numOne);
    
            return answer
    }
    if (numbersFromClient.op === '*') {
        answer = numberOne * numberTwo
        // console.log("Number is:", numberOne, numbersFromClient.numOne);
    
            return answer
    }
    if (numbersFromClient.op === '/') {
        answer = numberOne / numberTwo
        // console.log("Number is:", numberOne, numbersFromClient.numOne);
    
            return answer
    }
}

app.get('/clear', (req, res) => {
    history = [];
    res.sendStatus(200);
})

app.get('/calculate', (req, res) => {
    res.send(history);
})





