const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        // event.preventDefault();
        // const blockID = anchor.getAttribute('href')
        // document.querySelector('' + blockID).scrollIntoView({
        //     behavior: 'smooth',
        //     block: "start"
        // })
        const blockID = anchor.getAttribute('href');
        $('html, body').animate({
            scrollTop: $(''+blockID).offset().top
        }, 1200);
    })
    
}