var anchor = true;
$( document ).on( "scroll", function(){
  var yTop = $('.content').offset().top;
  var yBottom = yTop + $('.content').height();
  var scrollTop = $('body, html').scrollTop() + $(window).height();
  if( (scrollTop > (yBottom - 100)) && anchor ){
    $("#toscroll").removeClass("hide").addClass( "slideUp" );
    anchor = false;
    console.log("scrolled");
  }
  
} );