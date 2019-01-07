$(function(){
  var carouselList = $("#images");
  var interval = setInterval(changeSlide, 8000);

  function moveSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  function changeSlide(){
    carouselList.animate({marginLeft:-500}, 3000, "swing", moveSlide);
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
    interval = setInterval(changeSlide, 3000);
  });
  $('#right').on('click', function(){
    clearInterval(interval);
    carouselList.animate({marginLeft:-500}, 1000, moveSlide);
    interval = setInterval(changeSlide, 3000);
  });

  $('.slides-number > a').on('click', function(){
    setTimeout(changeSlide, 5000);
    interval = setInterval(changeSlide, 3000);
  })

});
