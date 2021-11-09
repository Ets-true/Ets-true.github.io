new fullpage('#fullpage', {
  anchors: ['slide1', 'slide2', 'slide3'],
  scrollingSpeed: 1500,

  afterLoad: function(origin, destination, direction){
    console.log(destination);
    console.log(destination['index']);
    console.log(direction);
    $(".nav__item").filter(".active").removeClass('active');
    $('.nav__item').eq(destination['index']).addClass('active');
  },
});




