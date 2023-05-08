$(document).ready(onReady);

function onReady() {
    console.log('We have jQuery! 💲💲💲');

    $('#generate-button').on('click', newDiv);
    $('body').on('click', '#yellow-button', turnYellow);
    $('body').on('click', '#delete-button', rmvRow);
    // $('#generate-button').on('click', upCount)
}

let buttonCounter = 0

function newDiv(){
    buttonCounter += 1;
    $('body').append(`
        <div class="redDiv">
            <p><span>${buttonCounter}</span></p>
            <button id="yellow-button">Yellow</button>
            <button id="delete-button">Delete</button>
        </div>
    `)
}

function turnYellow(){
    $(this).parent().css("background", "yellow");
}

function rmvRow(){
    $(this).closest('div').remove();
}

// function upCount(){
    
// }
