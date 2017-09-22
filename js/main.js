var minutes1 = 5,
    minutes2 = 25,
    seconds = 0,
    isPaused = true,
    timerId = 0,
    //count = 0,
    remainingTime,
    countdownHandle,
    plus = $('plus'),
    show = $('value'),
    audio = new Audio('./sounds/beep.mp3');

function startAlarm(){
  if(remainingTime<1000)
  {
    audio.play();
  }
}

  $('.plus2').on('click', function(){
    minutes2++;
    $('.value2').html(minutes2);
  });

  $('.minus2').on('click', function(){
      minutes2++;
      $('.value2').html(minutes2);
    });



   $('.plus1').on('click', function(){
    minutes1++;
    $('.value1').html(minutes1);
  });

  $('.minus1').on('click', function(){
      minutes1--;
      $('.value1').html(minutes1);
    });
