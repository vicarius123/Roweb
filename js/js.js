$(document).ready(function(){


  $( "#calendar" ).datepicker({
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    firstDay: 1,

  });

  $('.notif-icon').click(function(e){
    console.log()
    e.preventDefault();
    if(e.target.localName == 'img')
    $('.notifications-ctn').fadeToggle('100')
  });

  $(document).mouseup(function(e) {
    var container = $(".notifications-ctn");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
      container.fadeOut('100');
    }
  });
})
