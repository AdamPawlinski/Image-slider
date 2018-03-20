$(function(){
  carouselStart();
  var carouselList = $("#images");
  function moveSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  }
  function changeSlide(){
    carouselList.animate({marginLeft:-500}, 3000, moveSlide);
  }
  function carouselStart(){
    setInterval(changeSlide, 3000);
  }
  // $('.image1').on('click', function(){
  //   $('#carousel').carousel(0);
  // })
  // $('.image2').on('click', function(){
  //   $('#carousel').carousel(1);
  // })
  // $('.image3').on('click', function(){
  //   $('#carousel').carousel(2);
  // })
  // $('.image4').on('click', function(){
  //   $('#carousel').carousel(3);
  // })
  // $('.image5').on('click', function(){
  //   $('#carousel').carousel(4);
  // })
  // $('#carousel').carousel({pause: hover});
  // $('#left').on('click', function(){
  //   $('#carousel').carousel('next');
  // })
  // $('#right').on('click', function(){
  //   $('#carousel').carousel('prev');
  // })
  $(.left).on('click', function(){
    carouselList.animate({left:500})
  }
  $(.right).on('click', function(){
    carouselList.animate({left:-500})
  }
});
