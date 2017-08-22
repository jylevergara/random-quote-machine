var randomNumber = Math.floor((Math.random() * 10) + 1)

// var quotes = 
console.log('$', $);

function getDogImage() {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        success: function (result) {
            console.log('result', result);
            $('#img').attr('src', result.message);
        }
    });
}
getDogImage();