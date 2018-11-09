$(document).ready(function(){
  if($('#calendar').length > 0){
    $( "#calendar" ).datepicker({
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      firstDay: 1,
    });
  }


  $('i[data-toggle="tooltip"]') .tooltip({
    offset: '-40px, 6px'
  })

  $('.mob-burger').click(function(e){
    e.preventDefault();
    $(this).toggleClass('active')
    $('.left-panel').toggleClass('active');
    $('.right-content').toggleClass('nonactive');
    $('body').toggleClass('overflow-y');
  })

  $('.menu-item').click(function(e){

    if($(this).next('.submenu').length > 0){
      console.log($(this).next('.submenu'))
      e.preventDefault();
    }
    $(this).next().slideToggle();
  })

  $('.close_b').click(function(){
    $('.more_op').fadeToggle();

    $('.footer *').removeAttr('style');
    $('.footer').removeAttr('style');

    $('body').css('transform','scale(1)');
    jQuery('body').removeClass('black-white')
    jQuery('body').removeClass('blue-black')
  });

  $('.eye-switcher').click(function(){
    $('.more_op').fadeToggle();
  })

  $('.black_c').click(function(e){
    e.preventDefault();
    $('body').removeClass('blue-black');
    $('body').addClass('black-white')
  })
  $('.blue_c').click(function(e){
    e.preventDefault();
    $('body').removeClass('black-white')
    $('body').addClass('blue-black');
  })

  $('.big').click(function(){
    $('body').css('transform','scale(1.1)');

  });

  $('.bigger').click(function(){
    $('body').css('transform','scale(1.3)');

  });
  $('.biggest').click(function(){
    $('body').css('transform','scale(1.5)');
  });

  $('.normal_c').click(function(e){
    e.preventDefault();
    jQuery('body').removeClass('black-white')
    jQuery('body').removeClass('blue-black')
  })

  _imgs = ['/images/bg-reg.jpg', '/images/Bg_1.jpg', '/images/Bg_2.jpg']
  function getRandomInt(min, max) {
    _result = Math.floor(Math.random() * (max - min)) + min;
    $('.main-reg').css('background-image', 'url('+_imgs[_result]+')')
  }

  getRandomInt(0, 3);


})
