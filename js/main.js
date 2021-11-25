$(document).ready(function() {
    if (document.documentElement.clientWidth >=1024) {


        var video = document.querySelector('.video__IT')
        // video.pause();

        var num = 0;
        var chapters =  document.querySelectorAll('.chapter__title');
        var chapter;
        var chapter_position;

        var winHeight = $(window).height();
        var winHeight_2 = winHeight/2;

        var scrollToChapter;
        var scrollTop;


        var number = 0;
        var number_2 = 0;

        var lottie_Wrap_Position = $(".lottie_wrap").offset().top;
        var lottie_Wrap_Height = $(".lottie_wrap").height();

        var sum_Height = lottie_Wrap_Position + lottie_Wrap_Height


        var video_up =  document.querySelector('.video_up');
        var lottie_animation =  document.querySelector('.lottie_animation');
        var slider_arc =  document.querySelector('.slider__arc');
        var slider_title =  document.querySelector('.slider__title');


        var vidblock =  document.querySelector('.slider__video');
        var vidblock_width = $(".slider__video").width()


        var it_block = document.querySelector('#IT_block');
        var art_block = document.querySelector('#Art_block');
        var industry_block = document.querySelector('#Industry_block');
        var science_block = document.querySelector('#Science_block');
        var media_block = document.querySelector('#Media_block');


        var it_Title =  document.querySelector('.title__IT');
        var art_Title =  document.querySelector('.title__Art');
        var industry_Title =  document.querySelector('.title__Industry');
        var science_Title =  document.querySelector('.title__Science');
        var media_Title =  document.querySelector('.title__Media');

        ////Видосы

        var title_IT_video =  document.querySelector('#IT__titleVideo');
        title_IT_video.pause();
        title_IT_video.currentTime = 0;

        var title_Art_video =  document.querySelector('#Art__titleVideo');
        title_Art_video.pause();
        title_Art_video.currentTime = 0;

        var title_Industry_video =  document.querySelector('#Industry__titleVideo');
        title_Industry_video.pause();
        title_Industry_video.currentTime = 0;

        var title_Science_video =  document.querySelector('#Science__titleVideo');
        title_Science_video.pause();
        title_Science_video.currentTime = 0;

        var title_Media_video =  document.querySelector('#Media__titleVideo');
        title_Media_video.pause();
        title_Media_video.currentTime = 0;

        //---------------------------------------------/////

        var back_IT_video =  document.querySelector('#IT__backVideo');
        back_IT_video.pause();
        back_IT_video.currentTime = 1;

        var back_Art_video =  document.querySelector('#Art__backVideo');
        back_Art_video.pause();
        back_Art_video.currentTime = 0;

        var back_Industry_video =  document.querySelector('#Industry__backVideo');
        back_Industry_video.pause();
        back_Industry_video.currentTime = 0;

        var back_Science_video =  document.querySelector('#Science__backVideo');
        back_Science_video.pause();
        back_Science_video.currentTime = 0;


        var back_Media_video =  document.querySelector('#Media__backVideo');
        back_Media_video.pause();
        back_Media_video.currentTime = 0;

        var ITNumber = 0;
        var ArtNumber = 0;
        var IndustryNumber = 0;
        var ScienceNumber = 0;
        var MediaNumber = 0;

        var AccompanyNumber = 0;


        var AccompanyVideo_block =  document.querySelector('#AccompanyVideo_block');
        var AccompanyVideo =  document.querySelector('#AccompanyVideo');

        AccompanyVideo.pause()
        AccompanyVideo.currentTime = 0;

        var mouse =  document.querySelector('#mouse');

        var Menu = document.querySelector('#Menu')
        var Logo = document.querySelector("#Logo")

        var form =  document.querySelector('.nameUP');
        var formNumber = 0;



        var winHeightSpec = $(window).height();
        var winWidthSpec = $(window).width()


        if (winWidthSpec <=1920){
            if (winHeightSpec/winWidthSpec >= 0.48958){
                var SpecVar = 0;
            } else if (winHeightSpec/winWidthSpec < 0.48958){
                var SpecVar = (winWidthSpec*0.48958 - winHeightSpec)/2
            }
        } else {
            var SpecVar = 0;
        }


        // console.log(SpecVar)




        $(window).on('scroll', function() {

            var winHeight = $(window).height();

            chapter = chapters[num];
            chapter_position = chapter.getBoundingClientRect().top;
            // console.log(chapter_position)

            // scrollToChapter = (chapter_position - winHeight/2) - winHeight;

        
            scrollTop = $(window).scrollTop()
            // console.log(chapter)

            // console.log(scrollTop)
            // console.log(winHeight/2)

            if (chapter_position <= winHeight/2){
                chapter.style.opacity = 1;

                num = num + 1;
                if (num >=3){
                    num = 0;
                }
            }

            if (chapter_position > winHeight/2){
                chapter.style.opacity = 0;

                num = num + 1;
                if (num >=3){
                    num = 0;
                }
            }

            

            // if ( scrollTop <= 600){
            //     $('.chapter__title').css({
            //         'opacity'         : '0'
            //     });
            
            // }


            if( scrollTop > winHeight*0.2){
                var scrollCoef = 0.001;
                var res = scrollCoef * (scrollTop-winHeight*0.2)
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





            var scrollT = $(this).scrollTop()
            // console.log(scrollT)

            
            

            var video_up_position = video_up.getBoundingClientRect().top - SpecVar;

            var video_up_height = $(".video_up").height()
            var video_up_height_2 = video_up_height/2
            var winHeight = $(window).height();
            var winHeight_2 = winHeight/2;

            scrollToSlider = winHeight_2 - video_up_height_2;

            // console.log(video_up_position)
            // console.log(winHeight_2)
            // console.log(scrollToSlider)
            

            if(scrollToSlider >= video_up_position && number==0){
                    number=1
                    lottie_animation.style.opacity = 0;
                    video_up.style.opacity = 1;
                    slider_arc.style.opacity = 1;
                    slider_title.style.opacity = 1;

                    it_Title.style.transition = "all 0.5s"
                    it_Title.style.opacity = 1
                    it_Title.style.visibility = "visible"

                    title_IT_video.play()
                    back_IT_video.play()
                    ITNumber = 1;
            }

            if(scrollToSlider < video_up_position && number==1){
                    number = 0;
                    lottie_animation.style.opacity = 1;
                    video_up.style.opacity = 0;
                    slider_arc.style.opacity = 0;
                    slider_title.style.opacity = 0;
            

                    it_Title.style.transition = "all 0s"
                    it_Title.style.opacity = 0;
                    it_Title.style.visibility = "hidden"

                    title_IT_video.pause();
                    title_IT_video.currentTime = 0;

                    back_IT_video.pause();
                    back_IT_video.currentTime = 1;
                    ITNumber = 0;
            }


            
            var winWidth = $(window).width();


            var it_block_position = it_block.getBoundingClientRect().left;
            var art_block_position = art_block.getBoundingClientRect().left;
            var Industry_block_position = Industry_block.getBoundingClientRect().left;
            var Science_block_position = Science_block.getBoundingClientRect().left;
            var Media_block_position = Media_block.getBoundingClientRect().left;
        

            // if( (-(vidblock_width/2) <= it_block_position && it_block_position <= 0) && ITNumber == 2){
            //     ITNumber = 1;
            //     it_Title.style.opacity = 1
            //     it_Title.style.visibility = "visible"
            //     setTimeout(function(){
            //         back_IT_video.play()
            //         title_IT_video.play();
            //     }, 2000)
            // }
            
            // if( (-(vidblock_width/2) >= it_block_position || it_block_position >= 0) && ITNumber == 1){
            //     ITNumber = 2;
            //     back_IT_video.pause();
            //     title_IT_video.pause();
            //     it_Title.style.opacity = 0
            //     it_Title.style.visibility = "hidden"
            //     setTimeout(function(){
            //         back_IT_video.currentTime = 0; 
            //         title_IT_video.currentTime = 0;
            //     }, 2000)

            //  }

            if( (-(vidblock_width/2) <= art_block_position && art_block_position <= (winWidth-vidblock_width/2)) && ArtNumber == 0){
                ArtNumber = 1;
                back_Art_video.play()
                title_Art_video.play();
                art_Title.style.opacity = 1
                art_Title.style.visibility = "visible"
            }

            if( (-(vidblock_width/2) >= art_block_position || art_block_position >= (winWidth-vidblock_width/2)) && ArtNumber == 1){
                ArtNumber = 0;
                back_Art_video.pause();
                title_Art_video.pause();
                art_Title.style.opacity = 0
                art_Title.style.visibility = "hidden"
                setTimeout(function(){
                    back_Art_video.currentTime = 0; 
                    title_Art_video.currentTime = 0;
                }, 2000)

            }
        
        ////////////////////////////////////////////////////////////

            if( (-(vidblock_width/2) <= Industry_block_position && Industry_block_position <= (winWidth-vidblock_width/2)) && IndustryNumber == 0){
                IndustryNumber = 1;
                back_Industry_video.play()
                title_Industry_video.play();
                industry_Title.style.opacity = 1
                industry_Title.style.visibility = "visible"

            }
            if( (-(vidblock_width/2) >= Industry_block_position || Industry_block_position >= (winWidth-vidblock_width/2)) && IndustryNumber == 1){
                IndustryNumber = 0;
                back_Industry_video.pause();
                title_Industry_video.pause();
                industry_Title.style.opacity = 0
                industry_Title.style.visibility = "hidden"
                setTimeout(function(){
                    back_Industry_video.currentTime = 0; 
                    title_Industry_video.currentTime = 0;
                }, 2000)

            }
        /////////////////////////////////////////////////////////////

            if( (-(vidblock_width/2) <= Science_block_position && Science_block_position <= (winWidth-vidblock_width/2)) && ScienceNumber == 0){
                ScienceNumber = 1;
                back_Science_video.play()
                title_Science_video.play();
                science_Title.style.opacity = 1
                science_Title.style.visibility = "visible"

            }
            if( (-(vidblock_width/2) >= Science_block_position || Science_block_position >= (winWidth-vidblock_width/2)) && ScienceNumber == 1){
                ScienceNumber = 0;
                back_Science_video.pause();
                title_Science_video.pause();
                science_Title.style.opacity = 0
                science_Title.style.visibility = "hidden"
                setTimeout(function(){
                    back_Science_video.currentTime = 0; 
                    title_Science_video.currentTime = 0;
                }, 2000)

            }

            ////////////////////////////////////////////////

            if( (-(vidblock_width/2) <= Media_block_position && Media_block_position <= (winWidth-vidblock_width/2)) && MediaNumber == 0){
                MediaNumber = 1;
                back_Media_video.play()
                title_Media_video.play();
                media_Title.style.opacity = 1
                media_Title.style.visibility = "visible"

            }
            if( (-(vidblock_width/2) >= Media_block_position || Media_block_position >= (winWidth-vidblock_width/2)) && MediaNumber == 1){
                MediaNumber = 0;
                back_Media_video.pause();
                title_Media_video.pause();
                media_Title.style.opacity = 0
                media_Title.style.visibility = "hidden"
                setTimeout(function(){
                    back_Media_video.currentTime = 0; 
                    title_Media_video.currentTime = 0;
                }, 2000)

            }
            

            var AccompanyVideo_position = AccompanyVideo_block.getBoundingClientRect().top;

            if (AccompanyVideo_position <= winHeight/4 && AccompanyNumber == 0){
                AccompanyNumber = 1;
                setTimeout(function(){
                    AccompanyVideo.play()
                    setTimeout(function(){
                        $(".Accompany__title1").css({'transition' : 'all 0.8s'});
                        $(".Accompany__title2").css({'transition' : 'all 0.8s'});

                        $(".Accompany__title1").css({'visibility' : 'visible'});
                        $(".Accompany__title2").css({'visibility' : 'visible'});

                        $(".Accompany__title1").css({'opacity' : '1'});
                        setTimeout(function(){
                            $(".Accompany__title1").css({'opacity' : '0'});
                            setTimeout(function(){
                                $(".Accompany__title2").css({'opacity' : '1'});
                            },500)
                        },3300)
                    },4000)
                }, 500)
            }

            // if (AccompanyVideo_position > winHeight && AccompanyNumber == 1){
            //         AccompanyVideo.pause()
            //         setTimeout(function(){
            //             AccompanyVideo.currentTime = 0;
            //             $(".Accompany__title1").css({'transition' : 'all 0s'});
            //             $(".Accompany__title2").css({'transition' : 'all 0s'});

            //             $(".Accompany__title1").css({'visibility' : 'hidden'});
            //             $(".Accompany__title2").css({'visibility' : 'hidden'});

            //             $(".Accompany__title1").css({'opacity' : '0'});
            //             $(".Accompany__title2").css({'opacity' : '0'});
            //             AccompanyNumber = 0;
            //         },10000)
                    
            // }

            console.log(AccompanyNumber)

            // if (AccompanyVideo_position > winHeight/2){
                
            // }
            var form_position = form.getBoundingClientRect().top;

            if (form_position <= winHeight/2 && formNumber==0){
            mouse.style.opacity = 0;
            
            Menu.style.opacity = 0;
            Logo.style.transform = "translateX(-65px)"
            formNumber=1;
            }

            if (form_position > winHeight/2 && formNumber==1){
                mouse.style.opacity = 1;
                
                Menu.style.opacity = 1
                Logo.style.transform = "translateX(0px)"
                formNumber=0;
            }
            
        });



        $("#Menu").on("click", function(){
            $(".menu__page").css({'display' : 'block'});
            setTimeout(function(){
                $(".menu__page").css({'transition' : 'all 0.3s'});
                $(".main").css({'transition' : 'all 0.3s'});

                $(".menu__page").css({'opacity' : '1'});
                $(".main").css({'opacity' : '0'});

            },300)
            $('body').css({'overflow-y' : 'hidden'})
        });


        $(document).on('click', '#PageBack', function() {
            setTimeout(function(){
                $(".menu__page").css({'transition' : 'all 0.3s'});
                $(".main").css({'transition' : 'all 0.3s'});

                $(".menu__page").css({'opacity' : '0'});
                $(".main").css({'opacity' : '1'});
            },300)
            setTimeout(function(){
                $(".menu__page").css({'display' : 'none'});
            },1200)
            $('body').css({'overflow-y' : 'scroll'})
        });

    }

    if (document.documentElement.clientWidth <=1024) {
        // setTimeout(function(){
        //     $('.iphone').addClass('active')
        //  }, 100);
        //  setTimeout(function(){
        //     $('.quote').addClass('active')
        //  }, 500);

        var winHeight = $(window).height();
        var mobiletext = document.querySelector('.MobileText')
        console.log(mobiletext)
        var mobileTextNumber = 0;
        
        // var mobiletext_position = mobiletext.getBoundingClientRect().top;
        $(window).on('scroll', function() {

            var mobiletext_position = mobiletext.getBoundingClientRect().top;

            if(mobiletext_position <= winHeight*0.59 && mobileTextNumber == 0){
                mobiletext.style.opacity = 1;
            }



        })

    }


    
})




