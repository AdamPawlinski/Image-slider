$(function(){
  var carouselList = $("#images");
  var interval = setInterval(changeSlide, 5000);

  // moving slides automatically and by clicking buttons

  function moveSlide(){  
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");     
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  function changeSlide(){    
    carouselList.animate({marginLeft:-500}, 3000, moveSlide);    
  }

  function moveSlidePrev(){    
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");    
    firstItem.before(lastItem);
    carouselList.css({marginLeft:0});  
  }

  $('#left').on('click', function(){
    clearInterval(interval);   
    carouselList.animate({marginLeft:500}, 3000, moveSlidePrev);
    interval = setInterval(changeSlide, 5000);    
  });

  $('#right').on('click', function(){
    clearInterval(interval);       
    carouselList.animate({marginLeft:-500}, 3000, moveSlide);
    interval = setInterval(changeSlide, 5000);
  });

  // picking the slide to show

  $('.slides-number > a').on('click', function(){     
    clearInterval(interval);        
    interval = setInterval(changeSlide, 5000);     
  })

  // animation pausing function

  $(".item").hover(
    function(){
      clearInterval(interval);
    }, 
    function(){
      interval = setInterval(changeSlide, 5000);
    }
  );
});
