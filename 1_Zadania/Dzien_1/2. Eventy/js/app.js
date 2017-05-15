$(document).ready(function(){
  var dtElements = $('dt');
  dtElements.on('mouseenter', function(){
    console.log(this);
  });
  var buttons = $('.hero-buttons').find('button');
  buttons.on('click', function(){
    console.log($(this).data('feature'));

  });

  // Zadanie 1
var heroDiscript = $('.superhero-description');
heroDiscript.find('dd').addClass('hide');
var newButtons = $('.superhero-description').find('dt');
newButtons.on('click', function(){
  $(this).next().toggleClass('hide');
});
  // Zadanie 2
  var shopping = $('.shopping');
  var shop = $('#shop');
  shopping.on('click', function(){
    shop.find('div').first().toggleClass('added');
    shopping.html('Dodano');

  });

});
