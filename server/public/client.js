console.log('in client.js');

$(document).ready(onReady);

function onReady(){
    console.log('in onReady');

    $('#add').on('click', onAddition);
    $('#subtract').on('click', onSubtract);
    $('#multiply').on('click', onMultiply)
    $('#divide').on('click', onDivide)
    $('#equal').on('click', onEquals)
    $('#clear').on('click', onClear)
}


function onAddition(){
    console.log('in addition');
}

function onSubtract(){
    console.log('in subtract');
}
function onMultiply(){
    console.log('in onMultiply');
}
function onDivide(){
    console.log('in onDivide');    

}

function onEquals(){
    console.log('in onEquals');
}

function onClear(){
    console.log('in onClear')
}
