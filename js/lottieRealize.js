$(document).ready(function(){
    setTimeout(function(){
       $('.iphone').addClass('active')
   }, 100);
   setTimeout(function(){
       $('.quote').addClass('active')
   }, 500);
   
});


var animData = {
   container: document.getElementById('lottie-1'),
   renderer: 'svg',
   loop: true,
   autoplay: false,
   path: 'lottie.json'
};

var anim = bodymovin.loadAnimation(animData);
var lottie_Wrap = $(".lottie_wrap");
var lottie_Wrap_Height = $(".lottie_wrap").height();
var lottie_Wrap_Position = $(".lottie_wrap").offset().top;
var animDuration = lottie_Wrap_Height;
var lottie_Animation_Height = $('.lottie_animation').height();
var lottie_Animation_Height_2 = lottie_Animation_Height/2;
var winHeight = $(window).height();
var scrollToElem = (lottie_Wrap_Position + lottie_Animation_Height_2) - winHeight;



function animatebodymovin(duration, animObject) {
   var winScrollTop = $(this).scrollTop();
   var scrollPosition = winScrollTop - scrollToElem;
   if(scrollPosition >= 0){
       var maxFrames = animObject.totalFrames;
       var frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
       animObject.goToAndStop(frame, true);
   }
}





var animData_2 = {
   container: document.getElementById('lottie-2'),
   renderer: 'svg',
   loop: true,
   autoplay: false,
   path: 'lottie-2.json'
};

var anim_2 = bodymovin.loadAnimation(animData_2);

var lottie_Wrap_2 = $(".lottie_wrap_2");
var lottie_Wrap_Height_2 = $(".lottie_wrap_2").height();
var lottie_Wrap_Position_2 = $(".lottie_wrap_2").offset().top;
var animDuration_2 = lottie_Wrap_Height_2;
var lottie_Animation_Height_2 = $('.lottie_animation_2').height();
var lottie_Animation_Height_2_2 = lottie_Animation_Height_2/2;

var SliderWidth = $('#slideContainer').width();

  
var scrollToElem_2 = (lottie_Wrap_Position_2 + lottie_Animation_Height_2_2 + SliderWidth) - winHeight;


function animatebodymovin_2(duration, animObject) {
   var winScrollTop = $(this).scrollTop();
   var scrollPosition_2 = winScrollTop - scrollToElem_2;
   console.log(scrollPosition_2)
   if(scrollPosition_2 >= 0){
       var maxFrames = animObject.totalFrames;
       var frame = (maxFrames / 100) * (scrollPosition_2 / (duration*1.05 / 100));
       animObject.goToAndStop(frame, true);
   }
}



$(window).scroll(function(){
var winScrollTop = $(this).scrollTop();

if(winScrollTop > scrollToElem && winScrollTop < scrollToElem_2) {
   animatebodymovin(animDuration, anim);
}

if(winScrollTop > scrollToElem_2) {
   animatebodymovin_2(animDuration_2, anim_2); 
}

});