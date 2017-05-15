$(function(){
var ul = $('.repertuar');
var url = 'http://localhost:3000';
var addMovie = $('.add_movie');

function insertMovies(movies){
  var moviesLength = movies.length;
  for (var i = 0; i < moviesLength; i++) {
    var li = $('<li>');
    var h3 = $('<h3>').text(movies[i].title);
    var p = $('<p>').text(movies[i].description);
    var newDeleteButton = $('<button class="deleteButton" data-id="' + movies[i].id + '">Delete</button>');
    var newUpdateButton = $('<button class="updateButton" data-id="' + movies[i].id + '">Zmodyfikuj</button>');
    li.append(h3);
    li.append(p);
    li.append(newDeleteButton).append(newUpdateButton);
    ul.append(li);
  }
}

  $.ajax({
    url: url + '/movies',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(response){
    insertMovies(response)
  });


  var button = $('#addMovie');
  button.on('click', function(event){
    event.preventDefault();
    var titleMovie = $('.get_title').val();
    var descriptionMovie = $('.get_description').val();
    var newMovie = {
      title: titleMovie,
      description: descriptionMovie
    };
    $.ajax({
      url: url + "/movies",
      method: 'POST',
      dataType: 'JSON',
      data: newMovie
    }).done(function(response){
      var li = $('<li>');
      var h3 = $('<h3>').text(response.title);
      var p = $('<p>').text(response.description);
      li.append(h3);
      li.append(p);
      var newDeleteButton = $('<button class="deleteButton" data-id="' + response.id + '">Delete</button>');
      var newUpdateButton = $('<button class="updateButton" data-id="' + response.id + '">Zmodyfikuj</button>');
      li.append(newDeleteButton).append(newUpdateButton);
      ul.append(li);
    }).fail(function(error){
      console.log(error);
    })
  });

  function removeMovie() {
    ul.on('click', '.deleteButton', function(){
      var btn = $(this);
      $.ajax({
        url: url + '/movies/' + btn.data('id'),
        method: "DELETE",
        dataType: "JSON"
      }).done(function(){
        console.log("film usunięty");
        btn.parent().remove();
      }).fail(function(error){
        console.log(error);
      })
    })
  }
removeMovie();

function updateMovie(){
    ul.on('click', '.updateButton', function(){
      var btn1 = $(this);
      btn1.siblings('h3').addClass('editable');
      btn1.siblings('p').addClass('editable');
      btn1.text('Zatwierdź');
      btn1.addClass('confirmButton');
      btn1.removeClass('updateButton');
    });
    ul.on('click', '.confirmButton', function(){
      var btn2 = $(this);
      var titleMovie = $('.get_title').val();
      var descriptionMovie = $('.get_description').val();
      var newMovie = {
        title: titleMovie,
        description: descriptionMovie
      };

      $.ajax({
        url: url + "/movies/" + btn2.data('id'),
        method: "PUT",
        dataType: "JSON",
        data: newMovie
      }).done(function(response){
        btn2.siblings('h3').text(response.title);
        btn2.siblings('p').text(response.description);
        btn2.siblings('h3').removeClass('editable');
        btn2.siblings('p').removeClass('editable');
        btn2.text('Edytuj');
        btn2.removeClass('confirmButton');
        btn2.addClass('updateButton');
      })
    });
}

updateMovie();


});
