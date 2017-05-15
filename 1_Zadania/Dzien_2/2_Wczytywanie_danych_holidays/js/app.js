$(function() {

    // variables for DOM
    var ul = $("#holiday-dates");
    var apiKey = 'c44852b6-bca0-49df-bcaf-1dfabb4f0474';
    var country = 'PL';
    var year = 2014;
    //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    //'https://holidayapi.com/v1/holidays?key=21e877a6-77f7-7777-9999-e6f5f4519f25&country=EN&year=2016';
    var holidayUrl = 'https://holidayapi.com/v1/holidays?key=' + apiKey + '&country=' + country + '&year=' + year;
    var holidayDates = $('#holiday-dates');
    function insertHolidays(days) {
      for (key in days) {
        var li = $('<li>');
        var span = $('<span>');
        li.text(days[key][0].name)
        span.text(days[key][0].date);
        li.append(span);
        holidayDates.append(li);
      }
    }
        //Użyj sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in


    $.ajax({
      url: holidayUrl,
      dataType: 'json'
    }).done(function(response) {
      insertHolidays(response.holidays);
    }).fail(function(error) {
      console.log(error);
    })

});
