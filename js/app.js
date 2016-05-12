$(function() {
  $('.navbar a').on('click', function(e) {
    e.preventDefault();

    var targetId = $(this).attr('href');
    var targetTop = $(targetId).position().top - 40;

    $('body').animate({
      scrollTop: targetTop
    });
  });

  $('#kyle-chakos').hover(function(){
    $('#kyle-chakos .description').show();
  },  function(){
    $('.description').hide();
  });

  $('#universal-mirror').hover(function(){
    $('#universal-mirror .description').show();
  },  function(){
    $('.description').hide();
  });

  $('#sartres-list').hover(function(){
    $('#sartres-list .description').show();
  },  function(){
    $('.description').hide();
  });

  $('#chefmate').hover(function(){
    $('#chefmate .description').show();
  },  function(){
    $('.description').hide();
  });

  $('#pirate-radio-nyc').hover(function(){
    $('#pirate-radio-nyc .description-upcoming').show();
  },  function(){
    $('.description-upcoming').hide();
  });

  $('#corinne-day').hover(function(){
    $('#corinne-day .description-upcoming').show();
  },  function(){
    $('.description-upcoming').hide();
  });
});