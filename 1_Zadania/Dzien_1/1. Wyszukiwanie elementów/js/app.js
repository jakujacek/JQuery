//Zadanie 1 z wykładowcą

$(document).ready(function(){
  console.log("hello");
  $('section').addClass('backgroundElement');

  // Zadanie 2
  $('.links').find('nav').addClass('hover-effect');

  // Zadanie 1 własne
  var liElements = $('.main').find('li').addClass('borderClass');

  // Zadanie 2 własne
  liElements.addClass('colorText').addClass('backgroundElement');

  // Zadanie 3
  var links = $('.menu').find('a').addClass('redLinks');
  links.first().addClass('bigFont');

  // Zadanie 4
  var h1 = $('h1').addClass('creepyHeader');
  h1.parent().css('border', '5px solid blue');
  h1.next().addClass('crazy');
  // Zadanie 5
  var menuElements = $('.menu').find('li');
  console.log(links.first());
  console.log(links.eq('2'));
  console.log(links.last());
  links.first().addClass('menuLinks');
  links.eq('2').addClass('menuLinks');
  links.last().addClass('menuLinks');
  // Zadanie 6
  links.eq('2').hide();
  // Zadanie 7
  var inputValue1 = $('.form').find('input').first().val();
  var inputValue2 = $('.form').find('input').last().val();
  console.log(inputValue1);
  console.log(inputValue2);
  // Zadanie 8
  var hrefCoders = $('#codersLink').attr('href');
  console.log(hrefCoders);
  // Zadanie 9
  var dataHover = $('.links').find('a').data('hover');
  console.log(dataHover);
  var linkHover = $('.links').find('a');
  linkHover.eq('1').attr('data-hover', 'JavaScript');
  linkHover.eq('0').attr('data-hover', 'Backbone');
  linkHover.eq('2').attr('data-hover', 'Angular');

});
