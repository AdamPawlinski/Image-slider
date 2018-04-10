$(function(){
  var start = function carouselStart(){
    setInterval(changeSlide, 3000);
  }

  var carouselList = $("#images");
  function moveSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }

  function moveSlidePrev(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({marginLeft:0});
  }

  function changeSlide(){
    carouselList.animate({marginLeft:-500}, 3000, moveSlide);
  }

  $('#left').on('click', function(){
    carouselList.animate({marginLeft:500}, 1000, moveSlidePrev);
  });
  $('#right').on('click', function(){
    carouselList.animate({marginLeft:-500}, 1000, moveSlide)
  });  
});
