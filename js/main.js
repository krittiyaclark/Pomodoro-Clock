var minutes1 = 5,
    minutes = 25,
    seconds = 0,
    beginTimer,
    pauseTimer,
    //count = 0,
    remainingTime,
    countdownHandle,
    // plus = $('plus'),
    // show = $('value'),
    audio = new Audio('./sounds/beep.mp3');

  $('.plus').on('click', function(){
    minutes++;
    $('.value').html(minutes);
  });

  $('.minus').on('click', function(){
      minutes++;
      $('.value').html(minutes);
  });

   $('.plus1').on('click', function(){
    minutes1++;
    $('.value1').html(minutes1);
   });

   $('.minus1').on('click', function(){
      minutes1--;
      $('.value1').html(minutes1);
   });

   $('.clock').on('click', function(){
     startTimer();
     name.innerHTML = 'Start Secession';
   });

   $('.clock').on('dblclick', reset);

   function reset(){
     clearInterval(timer);
     seconds = 0;
     minutes = 0;
     time.innerHTML = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10? '0' : '') +seconds
   }

   function timer(){
     seconds++
     if(seconds == 60){
       seconds = 0;
       minutes++
     }
     time.innerHTML = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10? '0' : '') +seconds
   }

   function startTimer(){
      clearInterval(timer);
      beginTimer = setInterval(timer, 100);

   }

   function startAlarm(){
     if(startTimer<1000)
     {
       audio.play();
     }
   }
