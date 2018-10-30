$(document).ready(function(){
  if(jQuery('#calendar').length > 0){
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
})
