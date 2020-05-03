// Select color input
// Select size input

var height;
var width;
var colour;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    
})


function makeGrid(h, w) {
    for (let i = 1; i <= h; i++) {
    $('#pixelCanvas').append(`<tr id=table${i}></tr`)
        for (let j = 1; j <= w; j++) {
        $('#table' + i).append("<td></td>")
        }
    }

    $('td').click(function addColour () {
        colour = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', `background-color:${colour}`);
        }
    })
}

