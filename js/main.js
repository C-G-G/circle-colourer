var $ball = $('.ball');
var $form = $('form');

// when the form's change event fires (type="color"),
// adjust the ball's background-color
$form.on('change', function () {

  // get the color input value

  var newColor = $('[type="color"]').val();

  // var newColor = $('[value=""]').val();

  // console.log( $('[value=""]').val() );

  $ball.css('background-color', newColor);
});
