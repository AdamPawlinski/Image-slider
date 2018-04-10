$(function(){
  var carouselList = $("#images");
  var interval = setInterval(changeSlide, 3000);

  function moveSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  function carouselStart(){
    interval;
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
    carouselList.animate({marginLeft:500}, 1000, moveSlidePrev);
    setInterval(changeSlide, 3000);
  });
  $('#right').on('click', function(){
    clearInterval(interval);
    carouselList.animate({marginLeft:-500}, 1000, moveSlide);
    setInterval(changeSlide, 3000);
  });

  $('.slides-number > a').on('click', function(){
    clearInterval(interval);
  })

  carouselStart();
});
