console.log('in client.js');

$(document).ready(onReady);



function onReady(){
console.log('ready!');

$('#submitBtn').on('click', onEqual);
$('#add').on('click', onAdd);
$('#subtract').on('click', onSubtract);
$('#divide').on('click', onDivide);
$('#multiply').on('click', onMultiply);
$('#clearBtn').on('click','clearBtn',emptyInputs);

loadAnswer()
let history =[];
newSubmit ={};

}

function onEqual(evt){
    evt.preventDefault();
    newSubmit.numOne = $('#number1').val()
    newSubmit.numTwo = $('#number2').val()
    
   
    
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

    $.ajax ({
    url: '/calculate',
    method: 'GET'

  })
  .then((response) => {
    console.log('response is:', response);
    // renderAnswer(response)
    render(response)
    history = response
    // console.log('answer',answer)
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
function render(response){
   $('allAnswers').empty()
console.log('in Render',response)
    $('.allAnswers').empty();
    for(let i = response.length-1; i >= 0; i--){
    $('.allAnswers').append(`
    <h3>${response[i].numOne} ${response[i].op} ${response[i].numTwo} = ${response[i].answer}</h3>
    
    `)
    }
    $('.answer').text(`${response[response.length -1].answer}`)


    // Now, get the last item in the response array
    /// and render it's `answer` property to the DOM
    
}

function renderAnswer(response){
    console.log('answer is:')
    $('.answer').text(`
    ${response[0].answer}
`)
}
function emptyInputs(){
    $('#1stNumber').empty();
    $('#2ndNumber').empty();
    }
    



