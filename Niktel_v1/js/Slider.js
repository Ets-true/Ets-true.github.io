$('.slideshow__slider').slick({
    slidesToShow: 1,
    // speed: 2000,
    speed: 1200,
    // autoplay: true,
    // autoplaySpeed: 10000,
    nextArrow: '.slideshow__next',
    prevArrow: '.slideshow__prev',
    dots: false,
    infinite: true,
    focusOnSelect: false,
    // onAfterChange: function(slider, index){
    //     var video = document.getElementById('video_background');
    //     video.pause();
    //     video.currentTime = 0;
    //     video.load();
    // }
});

// $('.slideshow__slider').on(`beforeChange`, function(event, slick) {
//     var video = document.getElementById('video_background');
//     video.pause();
//     video.currentTime = 0;
//     video.load();
// })





// $('.slideshow_2__slider_2').slick({
//      slidesToShow: 1,
//      autoplay: true,
//      autoplaySpeed: 2000,
//      speed: 1600,
//      nextArrow: '.slideshow_2__next',
//      prevArrow: '.slideshow_2__prev',
//      dots: false, //Исправить точки
//      infinite: true,
     
     
// }); 
