$(function(){
  var carouselList = $("#carousel ul");
  var changeSlide = function(){
    carouselList.animate({marginLeft:-500}, 1000, moveSlide);
  }
  var moveSlide = function(){
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  carouselList.css({marginLeft:0});
  }
  setInterval(changeSlide(), 5000,  moveSlide());  
});
