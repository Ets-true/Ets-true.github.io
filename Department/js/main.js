$(window).on('scroll', function() {

    var scrollTop = $(window).scrollTop()
    if( scrollTop > 200){
        var scrollCoef = 0.001;
        var res = scrollCoef * (scrollTop-200)
        var res2 = 1 - res;
        if (res2>=0.1){
            $('.content_wrap').css({
                'transform'         : 'scale(' +res2+ ')'
        
            });
        
        
            $('.iphone').css({
                'box-shadow'         : '0px 0px 0px white'
            });
        }

    }
    if ( scrollTop > 600){
        $('.chapter__title').css({
            'opacity'         : '1'
        });
    
    }

    if ( scrollTop <= 600){
        $('.chapter__title').css({
            'opacity'         : '0'
        });
    
    }


    var lottie_Wrap_Position = $(".lottie_wrap").offset().top;
    var lottie_Wrap_Height = $(".lottie_wrap").height();

    var sum_Height = lottie_Wrap_Position + lottie_Wrap_Height

    // alert(scrollTop);

    if (scrollTop >= 16450){
        $('.lottie_wrap').css({
            'opacity'         : '0'
        });

        $('.video__up').css({
            'opacity'         : '1'
        });

        $('.slider__title').css({
            'opacity'         : '1'
        });

        $('.slider__arc').css({
            'opacity'         : '1'
        });

        $('.slide__title').css({
            'opacity'         : '1'
        });
    }

    if (scrollTop < 16450){
        $('.lottie_wrap').css({
            'opacity'         : '1'
        });

        $('.video__up').css({
            'opacity'         : '0'
        });
        $('.slider__title').css({
            'opacity'         : '0'
        });
        $('.slider__arc').css({
            'opacity'         : '0'
        });

        $('.slide__title').css({
            'opacity'         : '0'
        });
    }

    if (scrollTop >= 17150){
        $('#IT__title').css({
            'opacity'         : '0',
            'visibility'         : 'hidden',
        });

        $('#Art__title').css({
            'opacity'         : '1',
            'visibility'         : 'visible',
        });
    }

    if (scrollTop <= 17150){
        $('#IT__title').css({
            'opacity'         : '1',
            'visibility'         : 'visible',
        });

        $('#Art__title').css({
            'opacity'         : '0',
            'visibility'         : 'hidden',
        });
    }



    if (scrollTop >= 17950){
        $('#Art__title').css({
            'opacity'         : '0',
            'visibility'         : 'hidden',
        });

        $('#Industry__title').css({
            'opacity'         : '1',
            'visibility'         : 'visible',
        });
    }

    if (scrollTop <= 17950){
        $('#Art__title').css({
            'opacity'         : '1',
            'visibility'         : 'visible',
        });

        $('#Industry__title').css({
            'opacity'         : '0',
            'visibility'         : 'hidden',
        });
    }
	


});

// transform: scale( 1 - $(window).scrollTop() * scrollCoef )

// opacity: 1 - $(window).scrollTop() * scrollCoef

// transform: scale(0.5);