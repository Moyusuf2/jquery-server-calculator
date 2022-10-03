console.log('in client.js');

$(document).ready(onReady);

let newSubmit =  {

};

function onReady(){
console.log('ready!');

$('#submitBtn').on('click', onEqual);
$('#add').on('click', onAdd);
$('#subtract').on('click', onSubtract);
$('#divide').on('click', onDivide);
$('multiply').on('click', onMultiply);

}

function onEqual(evt){
    evt.preventDefault();
    
    newSubmit.numOne = Number($('#number1').val()),
    newSubmit.numTwo = Number($('#number2').val()),
    
    console.log(newSubmit);
    
    $.ajax({
        method: 'POST', 
        url: '/calculate',
        data: newSubmit
        // Sending to server side
    })
    .then(response => {
        console.log('POST /calculate response', response);

        render();
        answer();
    })
    .catch(err => {
        console.log('POST /calculate error', err);
    });
}

function answer(){
    console.log('in answer');

    $.ajax ({
    url: '/calculate',
    method: 'GET'

  })
  .then((response) => {
    console.log('GET /calculate', response);
    newSubmit = response;
    render();
  })
  .catch((err) => {
   console.log('GET /calculate error', err);
  })
}
function render(){
    // $('.answers').empty();
console.log('in Render')

$('.answers').append(`${newSubmit[newSubmit.total]}`);

    console.log('newSubmit',newSubmit)
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


