$(document).ready(function(){
  var newDiv = $('<div class="panel">');
  var newP = $('<p>jakikolwiek tekst<p>');
  newDiv.append(newP);
  $('.people').append(newDiv);
  newP.hide();
  newDiv.on('mouseenter', function(){
    var button = $(this);
    button.find('p').show();
  });
  newDiv.on('mouseleave', function(){
    var button = $(this);
    button.find('p').hide();
  });

  // Zadanie 1 ###################################################


  function currentElements(){
  var liElements = $('.people').find('li');
  var button1 = $('<button class="delete">Usuń</button>');
  var button2= $('<button class="edit">Edytuj</button>');
  var ul = $('<ul>')
  ul.append(button1).append(button2);
  liElements.after(ul);
  var deleteBtn = $('ul').find('.delete');
  deleteBtn.on('click', function(){
    $(this).parent().prev().remove();
    $(this).parent().remove();
  });
  var editBtn = $('ul').find('.edit');
  editBtn.on('click', function(){
        if ($(this).hasClass('edit')) {
        var text = $(this).parent().prev().text();
        var newInput = $('<input>');
        newInput.val(text);
        $(this).parent().before(newInput);
        $(this).parent().prev().prev().remove();
        $(this).text('Zatwierdź');
        $(this).addClass('submit');
        $(this).removeClass('edit');
      } else if ($(this).hasClass('submit')) {
        var submit = $(this);
          var text = submit.parent().prev().val();
          var newLi = $('<li>');
          newLi.text(text);
          submit.parent().prev().remove();
          submit.parent().before(newLi);
          submit.text('Edytuj');
          submit.addClass('edit');
          submit.removeClass('submit');
      }
  });
}
currentElements();

    var people = $('.people');
    var button = people.find('input').last();
    var list = $('.main');

    $('input[type=submit]').on('click', function(event){
      event.preventDefault();
      var newElement = $('<li>');
      var idUser = $('#addUser').val();
      var age = $('#age').val();
      newElement.attr('data-age', age);
      newElement.text(idUser);
      var button1 = $('<button class="del">Usuń</button>');
      var button2= $('<button class="ed">Edytuj</button>');
      button1.on('click', function(){
        $(this).parent().prev().remove();
        $(this).parent().remove();
      });
      button2.on('click', function(){
        if ($(this).hasClass('ed')) {
        var edit = $(this);
        var text = $(this).parent().prev().text();
        var newInput = $('<input>');
        newInput.val(text);
        edit.parent().before(newInput);
        edit.parent().prev().prev().remove();
        edit.text('Zatwierdź');
        edit.removeClass('ed');
        edit.addClass('sub');
      } else if ($(this).hasClass('sub')) {
        var submit = $(this);
          var text = submit.parent().prev().val();
          var newLi = $('<li>');
          newLi.text(text);
          submit.parent().prev().remove();
          submit.parent().before(newLi);
          submit.text('Edytuj');
          submit.addClass('ed');
          submit.removeClass('sub');
      }
    });
      var ul = $('<ul>')
      ul.append(button1).append(button2);
      list.append(newElement);
      list.append(ul);
  });


});
