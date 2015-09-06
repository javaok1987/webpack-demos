var $ = require('jquery');

document.write('<h1>Hello World</h1>');

// function load_main2 (argument) {
	// require('./main2.js');
// }
// window.load_main2 = load_main2;

$('button').click(function(){
	require('./main2.js');
});

