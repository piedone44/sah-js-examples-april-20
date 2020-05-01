// Thrid Part:
console.log('Script is loaded.');

$('h1').html('This is done by <em>JavaScript</em>!');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');
$('h2').toggleClass('blue');

 let name = 'Piedone';
 let age = 38;

function myLittleFunction() {
   $('main').append('<p>A p is appended in the main.</p>');
   $('p').css('border',  '1px solid red');
   $('p').css('padding',  '10px');
}

myLittleFunction();
myLittleFunction();

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});


 // Single line Comment

  /*
    Multiple
    line
    of comments
    */
   // First part:
