console.log('in client.js');

$(document).ready(onReady);

let history =[];

function onReady(){
console.log('ready!');

$('#submitBtn').on('click', onEqual);
$('#add').on('click', onAdd);
$('#subtract').on('click', onSubtract);
$('#divide').on('click', onDivide);
$('multiply').on('click', onMultiply);
$('#clearBtn').on('click',emptyInputs);


newSubmit ={};

}

function onEqual(evt){
    evt.preventDefault();
    
    newSubmit.numOne = Number($('#number1').val()),
    newSubmit.numTwo = Number($('#number2').val()),
    
   
    
    $.ajax({
        method: 'POST', 
        url: '/calculate',
        data: newSubmit
        // Sending to server side
    })
    .then(response => {
        console.log('POST /calculate response', response);
        loadAnswer();
    })
    .catch(err => {
        console.log('POST /calculate error', err);
    });
}

function loadAnswer(){
    console.log('in answer');

    $.ajax ({
    url: '/calculate',
    method: 'GET'

  })
  .then((response) => {
    console.log('GET /calculate', response);

    $('')
  })
  .catch((err) => {
   console.log('GET /calculate error', err);
  })
}

function onAdd(evt){
    evt.preventDefault();
    console.log('in onAdd');
    
    newSubmit.op = '+'
}

function onSubtract(evt){
    evt.preventDefault();
    console.log('in onSubtract')

    newSubmit.op = '-'
}

function  onDivide(evt){
    evt.preventDefault();
    console.log('in onDivide')

    newSubmit.op = '/'
}

function onMultiply(evt){
    evt.preventDefault();
    console.log('in onMultiply')

    newSubmit.op = '*'

}
function render(){

console.log('in Render')
}

function emptyInputs(){
    $('#1stNumber').val('');
    $('#2ndNumber').val('');
    }
    



