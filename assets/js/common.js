$(function(){
    // 헤더 언어선택
    $('.lang-box').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active')
        $('.nav-menu2').toggleClass('on')
    });

    //헤더 호버 메뉴
    $('.gnb-area').mouseover(function(){
        $(this).addClass('active');
    })
    $('.gnb-area').mouseout(function(e){
        if($(this).has(e.target).length == 0){
            $('.gnb-area').removeClass('active');
        }
    })
    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        speed:1000,
        loop:true,
        centeredSlides: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
    });
    
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed:700,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed:700,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // 셀렉박스 옵션 선택시 
    $('.select-box').click(function(){
        $(this).toggleClass('on')
    })
    $('.select-box').on('change', function(){
        $(this).css('color', 'black')
    })

    // 푸터 관련사이트 
    $('.footerRight-area').click(function(){
        $('.footerRight-area button').toggleClass('on')
        $('.footerRight-area ul').toggleClass('on')
    }) 

})
