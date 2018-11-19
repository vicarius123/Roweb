$(document).ready(function(){
  if($('#calendar').length > 0){
    $( "#calendar" ).datepicker({
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      firstDay: 1,
    });
  }
  _html_pop = '<table class="linegraph-table table"> <thead> <th colspan="3"> История (курс 2) ЗЕТ №3 </th> </thead> <tbody> <tr> <td><span class="l__counter">1</span></td> <td>Штудирование.<br />Самостоятельная работа</td> <td><a href="#" class="btn-planning btn-yellow">Начать</a></td> </tr> <tr> <td><span class="l__counter">2</span></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-planning btn-yellow">Начать</a></td> </tr> <tr> <td><span class="l__counter">3</span></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-planning btn-yellow">Начать</a></td> </tr> <tr> <td><img src="/images/line--check.svg" /></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-green">Пройти снова</a></td> </tr> <tr> <td><span class="l__counter">5</span></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-yellow--empty">Продолжить</a></td> </tr> </tbody> </table>';
  $('i[data-toggle="tooltip"]').tooltip({
    offset: '-40px, 6px',
  })

  _w = $(document).width();

  if(_w >= 768){
    $('.flex-linegraph .flex-fill').tooltip({
      offset: '-40px, 6px',
      trigger: 'click focus',
      placement: 'auto',
      html: true,
      title: _html_pop,
    })

    $('.flex-linegraph .flex-fill').on('show.bs.tooltip	', function () {
      $('.flex-linegraph .flex-fill').tooltip('hide')
    });
  }

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
    $('body').removeClass('black-white')
    $('body').removeClass('blue-black')
    $('body').removeAttr('style');
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
    $('body').removeClass('black-white')
    $('body').removeClass('blue-black')
  })
  _imgs = ['/images/bg-reg.jpg', '/images/Bg_1.jpg', '/images/Bg_2.jpg']
  function getRandomInt(min, max) {
    _result = Math.floor(Math.random() * (max - min)) + min;
    $('.main-reg').css('background-image', 'url('+_imgs[_result]+')')
  }
  getRandomInt(0, 3);
  //Linegraph popup
  /* $('.flex-linegraph .flex-fill').click(function(e){
    e.preventDefault();
    _this = $(this);
    _top = _this.offset().top-150;
    _left = _this.offset().left-350;
    _w = $(document).width();
    _ww = $('.linegraph-pop').width();
    _www = (_ww+_left);
    _target = $(e.target);
    if(_this.hasClass('active')){
      _this.removeClass('active');
      $('.linegraph-pop').hide();
      $('.bg-linegraph--popup').removeClass('active');
    }else{
      $('.flex-linegraph .flex-fill.active').removeClass('active');
      _this.addClass('active')
      $('.linegraph-pop').show();
      $('.bg-linegraph--popup').addClass('active');
    }
    if(_www >= _w-100){
      $('.linegraph-pop').css({top:_top, left: (_left-_ww/1.5)})
      $('.linegraph-pop').addClass('right')
    }else{
      $('.linegraph-pop').css({top:_top, left: _left})
      $('.linegraph-pop').removeClass('right')
    }
  })*/
})
