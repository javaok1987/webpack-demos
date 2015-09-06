var $ = require('jquery');

document.write('<h1>Hello World</h1>');

// function load_main2 (argument) {
// require('./main2.js');
// }
// window.load_main2 = load_main2;

$(function() {
    $('button').click(function() {
        require('./main2.js');
    });

    $('img').on('click', function(){
    	$(this).attr('src', require('./like_n.jpg'));
    });

});
