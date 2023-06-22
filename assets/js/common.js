$(function () {
    // 헤더 언어선택
    $('.lang-box').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.nav-menu2').toggleClass('off')
    });

    //헤더 호버 메뉴
    $('.gnb .nav-item').hover(function () {
        if ($(this).find('.sub-list').length) {
            $('.gnb').addClass('on')
            $(this).find('.sub-list').addClass('on');
        }
    }, function () {
        $('.gnb').removeClass('on')
        $(this).find('.sub-list').removeClass('on');
    })


    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        touchRatio: 0, // 터치액션 가능여부
        speed: 1000,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 6000,
            // disableOnInteraction: false, 터치액션 이후에제대로 실행될것인가 
        },
    });

    var swiper2 = new Swiper(".slide-area", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 700,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
    var swiper3 = new Swiper(".slide-area2", {
        slidesPerView: 1,
        /*모바일기준*/
        spaceBetween: 30,
        speed: 700,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
            1025: {
                slidesPerView: 3
            },
        }
    });
    // 셀렉박스 옵션 선택시 
    $('.select-box').click(function () {
        $(this).toggleClass('on')
    })
    $('.select-box').on('change', function () {
        $(this).css('color', 'black')
    })

    // 푸터 관련사이트 
    $('.footerRight-area').click(function () {
        $('.footerRight-area button').toggleClass('on')
        $('.footerRight-area ul').toggleClass('on')
    })






    //media

    $('.header .btn-menu').click(function () {
        $('.header .btn-menu, .header .side-nav ').toggleClass('on')
        $('body').toggleClass('hidden')
    })


    // $('.header .nav-item').click(function (e) {
    //     e.preventDefault();
    //     if ($(this).has('.sub-list').length) {
    //         $(this).toggleClass('active');
    //     }
    // })

    $('.search-area2 .search-more').click(function () {
        $('.sc-search .search-popup').addClass('on')
        $('header').css('z-index', '10') 
    })

    $('.search-popup .btn-close').click(function () {
        $('.search-popup').removeClass('on');
        $('header').css('z-index', '11') 
    })

    // 전체label  누르면 한번에 선택하기
    $('.sub-all label').each(function (idx, el) {
        $(el).click(function () {
            box = $(this).data('box');
            if ($(this).siblings().prop('checked')) {
                $(box).find('input').prop('checked', false)
            } else {
                $(box).find('input').prop('checked', true)
            }
        })
    })

    //직군펼치기
    $('.job-list .job-item > span').each(function (idx, el) {
        $(el).click(function () {
            $(el).siblings('.sub-list').toggleClass('on')
        })
    })

    // 직무펼치기
    $('.search-popup .sub-item > span').each(function (idx, el) {
        $(el).click(function () {
            $(el).siblings('.sub-list2').toggleClass('on')
        })
    })


})