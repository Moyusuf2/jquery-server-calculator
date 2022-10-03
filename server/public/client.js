console.log('in client.js');

$(document).ready(onReady);

function onReady(){
console.log('ready!');

let operator;

$('#submitBtn').on('click', onSubmit);

function onSubmit(evt){
    evt.preventDefault();
    let newSubmit =  {
        numOne: Number($('#number1').val()),
        numTwo: Number($('#number2').val()),
        value: operator
    }
    console.log(newSubmit);
    $.ajax({
        method: 'POST', 
        url: '/calculate',
        data: newSubmit
        // Sending to server side
    })
    .then(response => {
        console.log('POST /calculate response', response);

        answer();
    })
    .catch(err => {
        console.log('POST /calculate error', err);
    });
}

function answer(){
    console.log('in answer');
}

