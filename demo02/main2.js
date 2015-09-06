var $ = require('jquery');

document.write('<h2>Hello Webpack</h2>');

// $(function () {
	
$('h2').click(function(){
	$(this).html('main2 jquery test..');
	require('./style.css');
});
// })