$(document).ready(function(){
  // Zadanie z wykładowcą
  var newDiv = $('<div class= "panel" ></div>');
  $('.people').after(newDiv);
  newDiv.html('Wielka fiesta na cześć gubernatora!');

  // Zadanie 1
  var people = $('.people');
  var button = people.find('input').last();
  var list = $('.main');

  $(function(){
    $('input[type=submit]').on('click', function(event){
      event.preventDefault();
      var newElement = $('<li>');
      var idUser = $('#addUser').val();
      var age = $('#age').val();
      newElement.attr('data-age', age);
      newElement.text(idUser);
      var coloredLi = colored(newElement);
      list.append(coloredLi);
    });
  });

  function colored(element){
    var ageAge = element.data('age');
  switch (true){
      case ageAge < 16:
      element.css('color', 'green');
      break;
      case ageAge < 41:
      element.css('color', 'blue');
      break;
      default:
      element.css('color', 'brown');
      break;
    }
    return element;
};

  // Zadanie 2
  var location = $('.where-i-am');
  location.on('click', function(){
    var newSpan = $('<span>Jestem tutaj...</span>');
    if (location.find('span').length%2 == 0) {
      location.append(newSpan);
    }else {
      location.prepend(newSpan);
    }
  });
  // Zadanie 3

  var block = $('.block');
  var left = $('.left');
  var right = $('.right');
  block.on('click', function(){
    var block = $(this);
    left.find('block').remove();
    right.prepend(block);
  });

});
