function linetool(_w){
  _html_pop = '<table class="linegraph-table table"> <thead> <th colspan="2"> История (курс 2) ЗЕТ №3 </th> <th class="text-right"> <a href="#" class="close-linegraph"><img src="/images/pop-close.svg"></a> </th> </thead> <tbody> <tr> <td><span class="l__counter">1</span></td> <td>Штудирование.<br />Самостоятельная работа</td> <td><a href="#" class="btn-planning btn-yellow">Начать</a></td> </tr> <tr> <td><span class="l__counter">2</span></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-planning btn-yellow">Начать</a></td> </tr> <tr> <td><span class="l__counter">3</span></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-planning btn-yellow">Начать</a></td> </tr> <tr> <td><img src="/images/line--check.svg" /></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-green">Пройти снова</a></td> </tr> <tr> <td><span class="l__counter">5</span></td> <td>Модульная лекция ср</td> <td><a href="#" class="btn-yellow--empty">Продолжить</a></td> </tr> </tbody> </table>';
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
  }else{
    $('.flex-linegraph .flex-fill').tooltip('dispose')
    $('.flex-linegraph .flex-fill').click(function(e){
      e.preventDefault;
      window.location.href = "linegraph-pop.html";
    })
  }
}
$(document).ready(function(){
  _w = $(document).width();
  linetool(_w);
  if($('#calendar').length > 0){
    $( "#calendar" ).datepicker({
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      firstDay: 1,
    });
  }
  $('i[data-toggle="tooltip"]').tooltip({
    offset: '-40px, 6px',
  })
  $(document).on('click', '.close-linegraph', function(e) {
    e.preventDefault();
    $('.flex-linegraph .flex-fill').tooltip('hide')
  });
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
})
