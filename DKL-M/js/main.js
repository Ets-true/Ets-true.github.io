

// setTimeout(function(){
//   aside.classList.add('opacity1');
//   headerLogo.classList.add('opacity1');
//   headerLinks.classList.add('opacity1');
// }, 50);

// setTimeout(function(){
//   loading.classList.add('opacity0');
// }, 2500);
// var loading = document.querySelector('.loading');
// var aside = document.querySelector('aside');
// var headerLogo = document.querySelector('.header__logo');
// var headerLinks = document.querySelector('.header__links');

// setTimeout(function(){
//     loading.classList.add('opacity0');
//     aside.classList.add('opacity1');
//     headerLogo.classList.add('opacity1');
//     headerLinks.classList.add('opacity1');
// }, 10);



$(document).ready(function(){
    $('.Security__blur').toggleClass("Security__blur_active")
});


$(function () {
  $('.item__Company').on("mouseover mouseout",function(){
    $('.glow__Company').toggleClass("glow__hover")
  });
  $('.item__Audit').on("mouseover mouseout",function(){
    $('.glow__Audit').toggleClass("glow__hover")
  });
  $('.item__Computers').on("mouseover mouseout",function(){
    $('.glow__Computers').toggleClass("glow__hover")
  });
  $('.item__Skud').on("mouseover mouseout",function(){
    $('.glow__Skud').toggleClass("glow__hover")
  });
  $('.item__Trust').on("mouseover mouseout",function(){
    $('.glow__Trust').toggleClass("glow__hover")
  });
  $('.item__Contacts').on("mouseover mouseout",function(){
    $('.glow__Contacts').toggleClass("glow__hover")
  });

  $('.Sites__link').on("mouseover mouseout",function(){
    $('.Sites__blur').toggleClass("Sites__blur_active")
  });

});



// Загрузка сайта/////////////////////////////////////
// var loading = document.querySelector('.loading');
// var loadingInfo = document.querySelector('.loading__info');

// const min = 0, max = 100, time = 1000;
// (function step(val) { 
//     setTimeout(function() {
//             document.querySelector('.loading__info_timer').textContent = val;
//             if (val < max) {
//                 step(val + 1);
//             }
//     }, time / (max - min));
// })(min);

// setTimeout(function(){
//     loadingInfo.classList.add('opacity0')
// }, 2000);





// setTimeout(function(){
//     loading.style.display = 'none'
// }, 2000)
////////////////////////////////////////////////////
       
//Слайдер всего сайта///////////////////////////////
$(document).ready(function() {
  if (document.documentElement.clientWidth >=1024) { 
    new fullpage('#fullpage', {
      anchors: ['company', 'audit', 'computers', 'skud', 'trust', 'contacts'],
      verticalCentered: false,
      lazyLoading: false,
      scrollingSpeed: 1200,
      animateAnchor: false,
      afterLoad: function(origin, destination, direction){
        console.log(destination);
        console.log(destination['index']);
        console.log(direction);
        $(".glow").filter(".glow__active").removeClass('glow__active');
        $('.glow').eq(destination['index']).addClass('glow__active');
      },


      // responsiveWidth:1024,
      // anchors: ['company', 'audit'],
    });
  }
  


})


  




//////////////////////////////////////////////////

//NET в разделе компания и контакты//////////////

  VANTA.NET({
    el: "#net",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    maxWidth: 1800.00,
    scale: 1,
    scaleMobile: 1.00,
    // color: 0xb8c12,
    color: 0x36b03,
    opacity: 0,
    // backgroundColor: 0x0d001f,
    backgroundColor: 0x12002A,
    // backgroundColor: 0x12002a,
  })
  VANTA.NET({
    el: "#net_2",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    maxWidth: 1800.00,
    scale: 1.00,
    scaleMobile: 1.00,
    // color: 0x089120,
    color: 0x36b03,
    opacity: 0.4,
    // backgroundColor: 0x12002a,
    backgroundColor: 0x12002A,
  })
  VANTA.NET({
    el: "#net_3",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    maxWidth: 1800.00,
    scale: 1.00,
    scaleMobile: 1.00,
    // color: 0x089120,
    color: 0x36b03,
    opacity: 0.4,
    // backgroundColor: 0x12002a,
    backgroundColor: 0x12002A,
  })

//////////////////////////////////////////////

//Вращалка блока/////////////////////////////

//   VanillaTilt.init(document.querySelector(".grid__example"), {
//     max: 15,
//     speed: 400,
//     perspective:            1000,
//     reverse:                true,
    
// });
// VanillaTilt.init(document.querySelectorAll(".grid__example"), {
//   max: 15,
//   speed: 1000,
//   perspective:            1000,
//   // reverse:                true,
// });

///////////////////////////////////////////////
// var background = document.querySelector('.net__movement')
// var section_background = document.querySelector('.section')

// function handler_background(){
//     setTimeout(function(){
//       console.log("its ok");

//       var hash = window.location.hash;
//       console.log(hash)
  
//       if (hash=="#company"||hash=="#audit"||hash=="#computers"||hash=="#skud"||hash=="#trust"||hash=="#contacts"){
//            background.classList.add('_active')
//            section_background.classList.remove('section_active')

//       }
//       else{
//         background.classList.remove('_active')
//         section_background.classList.add('section_active')
//       }  
//     }, 10)
// }

// document.addEventListener("DOMContentLoaded",  handler_background);
// window.addEventListener('wheel',  handler_background)
// var sidebar = document.querySelector('.sidebar')
// sidebar.addEventListener('click',  handler_background)




///////////////////////////////////////////////////////////////

// var navItem = document.querySelectorAll('.nav__item')
// var navGlow = document.querySelector('.nav__glow')

// navItem[].onmouseover = function(e){

//   var rect = navItem[].getBoundingClientRect();
//   console.log(rect.top, rect.left);

// }


$(window).on('resize',function(){location.reload();});

$(window).bind('hashchange', function() {
  var hash = window.location.hash;
  if(hash != "#company") {
    $('.scroll').removeClass("active_scroll")
    $('.scroll__line').removeClass("active_scrollLine")
  }
  if(hash == "#company") {
    $('.scroll').addClass("active_scroll")
    $('.scroll__line').addClass("active_scrollLine")
  }
});

